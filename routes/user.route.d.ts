/**
 * @name       : userRouter
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: User REST API, all user auth endpoints.
 */
import * as express from "express";
import { User } from "../models/user.model";
export declare class UserAPI {
    private app;
    constructor(app: express.Router);
    bodyParserInit(app: express.Router): void;
    setUserApis(): ((req: express.Request, res: express.Response) => void)[];
    /**
     * @prop       : authorization
     * @param      : headers
     * @method     : getToken()
     * @description: getting headers for JWT token
     */
    getToken: (headers: any) => any;
    /**
     * Get all users of the application, non-protected endpoint route
     * @param {Object} req HTTP request object.
     * @param {Object} res HTTP response object.
     */
    getAllUsers(): (req: express.Request, res: express.Response) => void;
    readFileAsync(filename: string): Promise<any>;
    loadJSONAsync(filename: string): Promise<User>;
}
declare const userRouter: UserAPI;
export default userRouter;
