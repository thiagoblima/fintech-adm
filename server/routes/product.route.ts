/**
 * @name       : userRouter
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: User REST API, all user auth endpoints.
 */

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Product } from '../models/product.interface';
import { LoggerService } from '../middleware/logger.service';
import { UtilsAPI } from './utills.route';

export class ProductAPI extends UtilsAPI {
    constructor(private app: express.Router) {
        super();
        
    }

    public bodyParserInit(app: express.Router): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    public setProductApis() {
        return [
            this.getAllProducts()
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

    public getAllProducts() {
        const loggerService = new LoggerService({});
        return (req: express.Request, res: express.Response) => {
               this.loadJSONAsync('./database/products.collection.json')
               .then(async (products: Product) =>{
                    await res.status(200).json(products);
                    await loggerService.getLogResultData('consuming users api: ', products);
               })
               .catch(err => res.status(500).json(err));
            }
    }

}

const productRouter = new ProductAPI(express.Router());

export default productRouter;
