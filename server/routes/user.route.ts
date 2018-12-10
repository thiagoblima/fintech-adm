/**
 * @name       : userRouter
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: User REST API, all user auth endpoints.
 */

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { User } from '../models/user.model';
import { LoggerService } from '../middleware/logger.service';
import { UtilsAPI } from './utills.route';

export class UserAPI extends UtilsAPI{
    constructor(private app: express.Router) {
        super();
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
        const loggerService = new LoggerService({});
        return (req: express.Request, res: express.Response) => {
               this.loadJSONAsync('./database/users.collection.json')
               .then(async (users: User) =>{
                    await res.status(200).json(users);
                    await loggerService.getLogResultData('consuming users api: ', users);
               })
               .catch(err => res.status(500).json(err));
            }
    }

}

const userRouter = new UserAPI(express.Router());

export default userRouter;
