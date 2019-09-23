import { IQlikAppURLConfig, IQlikAppSelection } from '../interfaces/IQlik';
import { C_QLIK_APP_ID, C_QLIK_OBJECT_ID, C_QLIK_SERVER_URL_OPTIONS, C_QLIK_APP_CONFIG, C_QLIK_APP_FILTER_DIMENSION_DEFAULT, C_QLIK_APP_FILTER_DIMENSION_VALUE_DEFAULT } from '../constants/qlik_server_parameters';

export class MQlikAppURLConfig implements IQlikAppURLConfig {
    appID = C_QLIK_APP_ID;
    appObjectID = C_QLIK_OBJECT_ID;
    appOptions = [C_QLIK_SERVER_URL_OPTIONS.noInteraction];
    appConfiguration = C_QLIK_APP_CONFIG;
    appSelections: Array<IQlikAppSelection> = [{
        dimension: C_QLIK_APP_FILTER_DIMENSION_DEFAULT,
        values: [C_QLIK_APP_FILTER_DIMENSION_VALUE_DEFAULT]
    }];

    constructor(options?: IQlikAppURLConfig) {
        if (options) {
            Object.keys(options).forEach((key) => {
                this[key] = options[key];
            });
        }
    }
}
