/**
 * @class      : Server
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: Instances of object Server { aap, port }
 */

import * as express from "express";
import userRouter from './routes/user.route';
import productRouter from './routes/product.route';
import alertRouter from './routes/alert.route';
import requestLogger from "./middleware/requestLogger";

export class Server {
  /**
   * @param: app - { express application }
   * @param: port - { port to listen on }
   */
  constructor(private app: express.Express, private port: number) {
    this.configureMiddleware(app);
    this.configureUserRoutes(app);
    this.configureProductRoutes(app);
    this.configureAlertRoutes(app);
  }

  private configureMiddleware(app: express.Express) {
    app.use(requestLogger);
  }

  private configureUserRoutes(app: express.Router) {
    app.use('/users', userRouter.setUserApis());
    app.get('/get', userRouter.getAllUsers());
  }

  private configureProductRoutes(app: express.Router) {
   app.use('/products', productRouter.setProductApis());
   app.get('/get', productRouter.getAllProducts());
  }


  private configureAlertRoutes(app: express.Router) {
    app.use('/alerts', alertRouter.setAlertApis());
    app.get('/get', alertRouter.getAllAlerts());
  }

  /**
   * @param: run the app - express application
   */

  public run() {
    this.app.listen(this.port);
    this.app.use(express.static(__dirname + "/dist"));
  }
}
