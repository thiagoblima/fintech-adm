"use strict";
/**
 * @author: Thiago Lima
 * @version: 0.1.0
 * @description: env file with sensitive info.
 * @exports: object
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BuildDev = /** @class */ (function () {
    function BuildDev(_a) {
        var options = __rest(_a, []);
        this.options = {
            port: 3412,
            googleAPIURL: 'https://maps.googleapis.com/maps/api/geocode/',
            googleAPIKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            forecastIOURL: 'https://api.darksky.net/forecast/',
            forecastIOKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        } || options;
    }
    return BuildDev;
}());
exports.BuildDev = BuildDev;
