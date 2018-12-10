/**
 * @author: Thiago Lima
 * @version: 0.1.0
 * @description: env file with sensitive info.
 * @exports: object
 */
import { BuildDevModel } from '../models/build.interface';
export declare class BuildDev implements BuildDevModel {
    options: any;
    constructor({ ...options }: {
        [x: string]: any;
    });
}
