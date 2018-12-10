/**
 * @name       : alertRouter
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: Alert REST API, all user auth endpoints.
 */

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Alert } from '../models/alert.interface';
import { LoggerService } from '../middleware/logger.service';
import { UtilsAPI } from './utills.route';

export class AlertAPI extends UtilsAPI {
    constructor(private app: express.Router) {
        super();
        this.bodyParserInit(app);
        
    }

    public bodyParserInit(app: express.Router): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    public setAlertApis() {
        return [
            this.getAllAlerts()
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

    public getAllAlerts() {
        const loggerService = new LoggerService({});
        return (req: express.Request, res: express.Response) => {
               this.loadJSONAsync('./database/alerts.collection.json')
               .then(async (alerts: Alert) =>{
                    await res.status(200).json(alerts);
                    await loggerService.getLogResultData('consuming alerts api: ', alerts);
               })
               .catch(err => res.status(500).json(err));
            }
    }

}

const alertRouter = new AlertAPI(express.Router());

export default alertRouter;
