/**
 * @author: <thitheguy@gmail.com> Thiago Lima
 * @class: BuildDevModel
 * @version: 0.1.0
 * @description: Building Object Model.
 * @exports: object
 */


export interface BuildDevModel {
    options: {
       port: number | { n: number | {}};
       googleAPIURL?: string;
       googleAPIKey?: string;
       forecastIOURL?: string;
       forecastIOKey?: string;
    }
}
