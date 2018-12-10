/**
 * @name       : utilsRouter
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: User REST API, all user auth endpoints.
 */

import * as fs from 'fs';
import { User } from '../models/user.model';

export class UtilsAPI {

    async readFileAsync(filename: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, async (err, result) => {
                if (err) reject(err);
                else await resolve(result);
            });
        });
    }

    async loadJSONAsync(filename: string): Promise<User> {
        return this.readFileAsync(filename)
            .then(async (res) => {
                return await JSON.parse(res);
            }).catch(err => JSON.parse(err));
    }


}
