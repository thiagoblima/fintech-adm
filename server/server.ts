/**
 * @class      : Server
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: Instances of object Server { aap, port }
 */

import * as express from "express";
import * as bodyParser from "body-parser";
import userRouter from './routes/user.route'
import requestLogger from "./middleware/requestLogger";

export class Server {
  /**
   * @param: app - { express application }
   * @param: port - { port to listen on }
   */
  constructor(private app: express.Express, private port: number) {
    this.configureMiddleware(app);
    this.configureRoutes(app);
  }

  private configureMiddleware(app: express.Express) {
    app.use(requestLogger);
  }

  private configureRoutes(app: express.Router) {
    app.use('/api', userRouter.setUserApis());
    app.get("/users", userRouter.getAllUsers());
  }

  /**
   * @param: run the app - express application
   */

  public run() {
    this.app.listen(this.port);
    this.app.use(express.static(__dirname + "/dist"));
  }
}
