import { Component, OnInit, ViewChildren, AfterViewInit, QueryList, OnDestroy } from '@angular/core';
import { ILomm } from '../../../shared/interfaces/ILomm';
import { DataManipulators } from '../../../shared/helpers/data_manipulators';
import { CardDetailComponent } from '../../../shared/components/card-detail/card-detail.component';
import * as VisualEffects from '../../../shared/helpers/visual_effects';
import { C_QLIK_APP_FILTER_DIMENSION_DEFAULT } from '../../../shared/constants/qlik_server_parameters';
import { IQlikAppURLConfig, IQlikAppSelection } from '../../../shared/interfaces/IQlik';
import { MQlikAppURLConfig } from '../../../shared/models/Qlik';
import { QlikAPI } from '../../../shared/helpers/qlik_api';
import { CardDataHelper } from '../../../shared/helpers/card_data_presentation';
import { DataService } from '../../../core/services/data.service';
import { BreakpointService } from '../../../core/services/breakpoint.service';
import { Subscription } from 'rxjs';
import { BreakpointEvent } from 'src/app/shared/interfaces/IBreakpoint';

@Component({
  selector: 'app-lomm',
  templateUrl: './lomm.component.html',
  styleUrls: ['./lomm.component.scss']
})
export class LommComponent implements OnInit, AfterViewInit, OnDestroy {

  private _lommData: Array<ILomm>;
  private _lommDataDivisionGrouped = {};
  private _lommDivisions: Array<string> = [];
  private _cards: Array<ILomm> = [];
  private _cardsMatrix: Array<Array<ILomm>> = [];
  private _currentDivisionFilterSelection = 'CHI';
  private _nextQtrdata = [];
  private _nextQtrDataDivisionGrouped = {};
  private _nextQtrCards: Array<ILomm> = [];
  private _qlikUrl = '';
  private QlikURLOptions: IQlikAppURLConfig = new MQlikAppURLConfig();
  private cardMatrixDimension = 3;
  private subscriptions = new Subscription();

  @ViewChildren(CardDetailComponent) cardDetailGroup: QueryList<CardDetailComponent>;

  constructor(private _dataService: DataService, private _breakpoint: BreakpointService) {

    this.subscriptions.add(
      this._breakpoint.breakpointChanges.subscribe({
        next: (res: BreakpointEvent) => {
          this.cardMatrixManager(res);
          this._cardsMatrix = DataManipulators.toMatrix(this._cards, this.cardMatrixDimension);
        },
        error: e => { console.warn(e); }
      })
    );
    this._dataService.getLommData().then(res => {
      res = DataManipulators.groupBy(res, 'QuaterData');
      console.log('LOMM data', res);

      this._lommData = res['LOMM'] || [];
      this._nextQtrdata = res['LOMM2'] || [];
      try {
        this._lommDivisions = Array.from(new Set(this._lommData.map((key) => key.Division)));
        this._lommDataDivisionGrouped = DataManipulators.groupBy(this._lommData, 'Division');
        this._nextQtrDataDivisionGrouped = DataManipulators.groupBy(this._nextQtrdata, 'Division');
        this.cardDivisionSelect(this._currentDivisionFilterSelection);
      } catch (e) {
        console.warn(e);
      }
    }).catch(e => {
      console.warn(e);
    });

  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.cardDetailGroup.toArray().forEach(item => item.detailMode = false);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  cardDivisionSelect(key: string) {
    this._qlikUrl = this.getQlikUrl([{ dimension: C_QLIK_APP_FILTER_DIMENSION_DEFAULT, values: [key] }]);
    console.log('Default qlik url', this._qlikUrl);
    this._currentDivisionFilterSelection = key;
    this._nextQtrCards = this._nextQtrDataDivisionGrouped[key];
    this._cards = this._lommDataDivisionGrouped[key] ? this._lommDataDivisionGrouped[key]
      .map((item: ILomm) => CardDataHelper.transformationCardDataFormat(item))
      .map((item: ILomm) => this.addCardSummaryContent(item))
      .map((item: ILomm) => this.cardDanger(item))
      :
      [];
    this.attachCardStyles(this._cards).then((res) => {
      this._cards = res;
      this._cardsMatrix = DataManipulators.toMatrix(this._cards, this.cardMatrixDimension);
      console.log('this._cardsMatrix', this._cardsMatrix);
    }).catch(e => { console.warn(e); });

  }

  cardClick(cardItem: ILomm, cardDetailIndex) {
    // let cardDetailIndex: number = null;
    // for (let i = 0; i < this._cardsMatrix.length; i++) {
    //   if (this._cardsMatrix[i].indexOf(cardItem) > -1) {
    //     cardDetailIndex = i;
    //     break;
    //   } else { continue; }
    // }
    this.cardDetailManager(cardItem, cardDetailIndex);
  }


  cardDetailManager(cardItem: ILomm, cardDetailIndex: number) {
    if (this.cardDetailGroup) {
      this.cardDetailGroup.toArray().forEach((item: CardDetailComponent, index: number) => {
        if (index !== cardDetailIndex) {
          item.detailMode = false;
        } else {
          item.card = cardItem;
          item.cardNextQtr = this.getNextQtrCard(cardItem);
          item.detailMode = true;
          item.loadPerformanceDashboardLinks();
          VisualEffects.scrollToEl(item._elRef.nativeElement);
        }
      });
    }
  }

  cardDanger(card: ILomm): ILomm {
    // tslint:disable:radix
    const actualFigure: number =
      card.Actual !== null
        && card.Actual !== undefined
        && card.Actual !== ''
        && card.Actual.trim().toLowerCase() !== 'tbd' ? parseFloat(card.Actual) : 0;

    const goalFigure: number =
      card.Goal !== null
        && card.Goal !== undefined
        && card.Goal !== '' ? parseFloat(card.Goal) : 0;

    card.danger = actualFigure - goalFigure < 0 ? true : false;
    return card;
  }

  attachCardStyles(cards): Promise<Array<ILomm>> {
    return new Promise((resolve, reject) => {
      this._dataService.getLommCardStyles().then((res: Array<ILomm>) => {
        resolve(cards.map(x => Object.assign(x, res.find(y => y.MeasureName.toLowerCase().trim() === x.MeasureName.toLowerCase().trim()))));
      }).catch(e => { reject(e); });
    });
  }

  addCardSummaryContent(cardItem: ILomm): ILomm {
    const summary = this._dataService.getLommCardSummary();
    cardItem.summary = summary ? summary[cardItem.MeasureName] : null;
    return cardItem;
  }

  getQlikUrl(selections?: Array<IQlikAppSelection>): string {
    if (!selections) {
      return QlikAPI.generateQlikAppURL(this.QlikURLOptions);
    } else {
      this.QlikURLOptions.appSelections = selections;
      return QlikAPI.generateQlikAppURL(this.QlikURLOptions);
    }
  }

  getNextQtrCard(card: ILomm) {
    return this._nextQtrCards.find(item => item.MeasureName.trim().toLowerCase() === card.MeasureName.trim().toLowerCase());
  }

  cardMatrixManager(breakpoint: BreakpointEvent) {
    switch (breakpoint.breakpointName) {
      case 'xs':
        this.cardMatrixDimension = 1;
        break;
      case 'sm':
        this.cardMatrixDimension = 1;
        break;
      case 'md':
        this.cardMatrixDimension = 2;
        break;
      case 'lg':
        this.cardMatrixDimension = 3;
        break;
      case 'xl':
        this.cardMatrixDimension = 3;
        break;
      default:
        this.cardMatrixDimension = 3;
        break;
    }

  }
  getColWidth() {
    return 12 / this.cardMatrixDimension;
  }

  get cards(): Array<ILomm> {
    return this._cards;
  }
  get nextQtrCards(): Array<ILomm> {
    return this._nextQtrCards;
  }
  get lommDivisions(): Array<string> {
    return this._lommDivisions;
  }
  get cardsMatrix(): Array<Array<ILomm>> {
    return this._cardsMatrix;
  }
  get qlikUrl(): string {
    return this._qlikUrl;
  }

}
