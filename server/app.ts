/**
 * @name       : app.ts
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: Main server entrance. 
 */

import * as express from "express";
import { Server } from './server'; 


/**
 * Initing a server at port
 * @param: app { express() }
 * @param: port { Number } 
 */


const port = 3412; 
const server = new Server(express(), port);

/**
 * @method     : { server.run() } 
 * @description: connect database and run
 */

server.run();
console.info(`listening on ${port}`);
