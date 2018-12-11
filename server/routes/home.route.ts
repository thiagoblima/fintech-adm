/**
 * @name       : homeRouter
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: User REST API, all home auth endpoints.
 */

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { LoggerService } from '../middleware/logger.service';
import { UtilsAPI } from './utills.route';

export class HomeAPI extends UtilsAPI {
    constructor(private app: express.Router) {
        super();
        this.bodyParserInit(app);
    }

    public bodyParserInit(app: express.Router): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    public setProductApis() {
        return [
            this.getHomeRoute()
        ];
    }

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

    public getHomeRoute() {
        const loggerService = new LoggerService({});
        return async (req: express.Request, res: express.Response) => {
            return {
                greetings: await res.status(200).json({ user: loggerService.getLogResultData('Hello user:', { 
                    greeting: 'Hi user you acessed the page from the server side'
                }) })
            }

        }
    }

}

const homeRouter = new HomeAPI(express.Router());

export default homeRouter;
