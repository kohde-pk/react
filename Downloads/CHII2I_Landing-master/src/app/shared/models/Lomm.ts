import { ILomm, ICardSummaryContent } from "../interfaces/ILomm";

export class MLomm implements ILomm {
    MeasureName: string = '';
    Period: string = '';
    Actual: string = '';
    Goal: string = '';
    Division: string = '';
    'Reporting Period': string = '';
    Format: string = '';
    'Measure Order': number = null;
    summary?: ICardSummaryContent = null;
    Color?: string = '';
    BgImage?: string = '';
    MeasureLabel?: string = '';
    danger?: boolean = null;
    QuaterData?: string = '';
    constructor(lomm?: ILomm) {
        if (lomm) {
            Object.keys(lomm).forEach(key => {
                this[key] = lomm[key];
            });
        }
    }
}
