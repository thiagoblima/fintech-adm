/**
 * @name       : userRouter
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: User REST API, all user auth endpoints.
 */

import * as express from "express";
import * as bodyParser from "body-parser";
import * as fs from 'fs';
import { User } from "../models/user.model";

export class UserAPI {
    constructor(private app: express.Router) {
        this.bodyParserInit(app);
    }

    public bodyParserInit(app: express.Router): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    public setUserApis() {
        return [
            this.getAllUsers()
        ];
    }

    /**
     * @prop       : authorization
     * @param      : headers
     * @method     : getToken()
     * @description: getting headers for JWT token
     */

    public getToken = headers => {
        if (headers && headers.authorization) {
            let parted = headers.authorization.split(" ");
            if (parted.length === 2) {
                return parted[1];
            } else {
                return null;
            }
        } else {
            return null;
        }
    };

    /**
     * Get all users of the application, non-protected endpoint route
     * @param {Object} req HTTP request object.
     * @param {Object} res HTTP response object.
     */

    public getAllUsers() {
        return this.app.get(
            "/users", (req: express.Request, res: express.Response) => {
               this.loadJSONAsync('./database/users.collection.json')
               .then(async users => await res.status(200).json(users))
               .catch(err => res.status(500).json(err));
            })
    }

    async readFileAsync(filename: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, async (err, result) => {
                if (err) reject(err);
                else await resolve(result);
            });
        });
    }

    async loadJSONAsync(filename: string): Promise<JSON> {
        return this.readFileAsync(filename) 
            .then(async (res) => {
                return await JSON.parse(res);
            }).catch(err => JSON.parse(err));
    }
}

const userRouter = new UserAPI(express.Router());

export default userRouter;