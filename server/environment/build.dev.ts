/**
 * @author: Thiago Lima
 * @version: 0.1.0
 * @description: env file with sensitive info.
 * @exports: object
 */

import { BuildDevModel } from '../models/build.interface';

export class BuildDev implements BuildDevModel {
    public options;
    constructor({ ...options }) {
        this.options = {
            port: 3412,
            googleAPIURL: 'https://maps.googleapis.com/maps/api/geocode/',
            googleAPIKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            forecastIOURL: 'https://api.darksky.net/forecast/',
            forecastIOKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        } || options;
    }
}
