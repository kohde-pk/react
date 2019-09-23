import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { BreakpointService } from '../../../core/services/breakpoint.service';
import { LommComponent } from './lomm.component';
import { MLomm } from 'src/app/shared/models/Lomm';
import { MBreakpointConfig } from 'src/app/shared/models/Breakpoint';
describe('LommComponent', () => {
  let component: LommComponent;
  let fixture: ComponentFixture<LommComponent>;
  let iLommStub;
  let breakpointEventStub;
  beforeEach(() => {
    iLommStub = {
      Actual: { trim: () => ({ toLowerCase: () => ({}) }) },
      Goal: {},
      danger: {},
      summary: {},
      MeasureName: { trim: () => ({ toLowerCase: () => ({}) }) }
    };
    const dataServiceStub = {
      getLommData: () => ({ then: () => ({ catch: () => ({}) }) }),
      getLommCardStyles: () => ({ then: () => ({ catch: () => ({}) }) }),
      getLommCardSummary: () => ({})
    };
    const breakpointServiceStub = {
      breakpointChanges: { subscribe: () => ({}) }
    };
    breakpointEventStub = { breakpointName: {} };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LommComponent],
      providers: [
        { provide: MLomm, useValue: iLommStub },
        { provide: DataService, useValue: dataServiceStub },
        { provide: BreakpointService, useValue: breakpointServiceStub },
        { provide: MBreakpointConfig, useValue: breakpointEventStub }
      ]
    });
    fixture = TestBed.createComponent(LommComponent);
    component = fixture.componentInstance;
  });
  describe('Asynchronous Specs', () => {
    let value;
    beforeEach((done) => {

      setTimeout(() => {
        value = 0;
        done();
      }, 1);
    });
    it('can load instance', (done) => {
      value++;
      expect(component).toBeTruthy();
      done();
    });
  });


  describe('addCardSummaryContent', () => {
    it('makes expected calls', () => {
      const dataServiceStub: DataService = fixture.debugElement.injector.get(
        DataService
      );
      spyOn(dataServiceStub, 'getLommCardSummary');
      component.addCardSummaryContent(iLommStub);
      expect(dataServiceStub.getLommCardSummary).toHaveBeenCalled();
    });
  });

  describe('cardMatrixManager', () => {
    it('makes expected calls', () => {
      spyOn(LommComponent.prototype, 'cardMatrixManager').and.callThrough();
      component.cardMatrixManager(breakpointEventStub);
      expect(LommComponent.prototype.cardMatrixManager).toHaveBeenCalled();
    });
  });
  describe('cardDivisionSelect', () => {
    it('makes expected calls', () => {
      spyOn(LommComponent.prototype, 'cardDivisionSelect').and.callThrough();
      component.cardDivisionSelect('CHI');
      expect(LommComponent.prototype.cardDivisionSelect).toHaveBeenCalled();
    });
  });
  describe('getColWidth', () => {
    it('makes expected calls', () => {
      spyOn(LommComponent.prototype, 'getColWidth').and.callThrough();
      component.getColWidth();
      expect(LommComponent.prototype.getColWidth).toHaveBeenCalled();
    });
  });
  describe('cardClick', () => {
    it('makes expected calls', () => {
      spyOn(LommComponent.prototype, 'cardClick').and.callThrough();
      component.cardClick(iLommStub, 1);
      expect(LommComponent.prototype.cardClick).toHaveBeenCalled();
    });
  });
});
