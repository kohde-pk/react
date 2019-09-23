import { ILomm } from '../interfaces/ILomm';

export class CardDataHelper {
    constructor() { }

    public static metricUnit = (format: string): string => {
        let unit = '';
        format = format ? format.toLowerCase() : null;
        switch (format) {
            case 'percent':
                unit = '%';
                break;
            case 'number':
                unit = '';
                break;
            default:
                unit = '';
                break;
        }
        return unit;
    }
    public static transformationCardDataFormat(card: ILomm): ILomm {
        if (card.MeasureName.trim().toLowerCase() === 'transformation') {
            const actualFigure = card.Actual.trim();
            const goalFigure = card.Goal.trim();
            if (actualFigure === '0' || parseFloat(actualFigure) === 0) {
                card.Actual = 'N/A';
            } else {
                card.Actual = parseFloat(actualFigure).toFixed(1);
            }
            if (goalFigure === '0' || parseFloat(goalFigure) === 0) {
                card.Goal = 'N/A';
            } else {
                card.Goal = parseFloat(goalFigure).toFixed(1);
            }
        }
        return card;
    }
}
