"use strict";
/**
 * @name       : userRouter
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: User REST API, all user auth endpoints.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var UserAPI = /** @class */ (function () {
    function UserAPI(app) {
        this.app = app;
        /**
         * @prop       : authorization
         * @param      : headers
         * @method     : getToken()
         * @description: getting headers for JWT token
         */
        this.getToken = function (headers) {
            if (headers && headers.authorization) {
                var parted = headers.authorization.split(" ");
                if (parted.length === 2) {
                    return parted[1];
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        };
        this.bodyParserInit(app);
    }
    UserAPI.prototype.bodyParserInit = function (app) {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    };
    UserAPI.prototype.setUserApis = function () {
        return [
            this.getAllUsers()
        ];
    };
    /**
     * Get all users of the application, non-protected endpoint route
     * @param {Object} req HTTP request object.
     * @param {Object} res HTTP response object.
     */
    UserAPI.prototype.getAllUsers = function () {
        var _this = this;
        return function (req, res) {
            _this.loadJSONAsync('./database/users.collection.json')
                .then(function (users) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, res.status(200).json(users)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); })
                .catch(function (err) { return res.status(500).json(err); });
        };
    };
    UserAPI.prototype.readFileAsync = function (filename) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        fs.readFile(filename, function (err, result) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!err) return [3 /*break*/, 1];
                                        reject(err);
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, resolve(result)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    UserAPI.prototype.loadJSONAsync = function (filename) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.readFileAsync(filename)
                        .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, JSON.parse(res)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); }).catch(function (err) { return JSON.parse(err); })];
            });
        });
    };
    return UserAPI;
}());
exports.UserAPI = UserAPI;
var userRouter = new UserAPI(express.Router());
exports.default = userRouter;
