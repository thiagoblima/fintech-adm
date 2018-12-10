/**
 * @name       : app.ts
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: Main server entrance. 
 */

import * as express from "express";
import { Server } from './server'; 
import { BuildDev } from './environments/build.dev';
import { LoggerService } from './middleware/logger.service';

/**
 * Initing a server at port
 * @param: app { express() }
 * @param: port { Number } 
 */

 export class App {
     public buildDev;
     public server;
     public loggerService;
     constructor({ ...attr }){
         this.buildDev = new BuildDev({ ...attr });
         this.server = new Server(express(), this.getInitServer());
         this.loggerData().getLogResultData(`Microservice listening on:`, { port: `${this.initServer()}` });
     }

     private initServer(): number & {} {
         const port = this.buildDev.options.port; 
         return port;
     }

     public getInitServer(): number & {} {
        return this.initServer();
     }

     public loggerData() {
         return new LoggerService({});
     }
 }

const app = new App({});
app.server.run();
