"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = exports.settingRouter = exports.adminVideoRouter = exports.channelRouter = void 0;
const express_1 = require("express");
const channelRouter_1 = require("./channelRouter");
Object.defineProperty(exports, "channelRouter", { enumerable: true, get: function () { return channelRouter_1.channelRouter; } });
const adminVideoRouter_1 = require("./adminVideoRouter");
Object.defineProperty(exports, "adminVideoRouter", { enumerable: true, get: function () { return adminVideoRouter_1.adminVideoRouter; } });
const settingRouter_1 = require("./settingRouter");
Object.defineProperty(exports, "settingRouter", { enumerable: true, get: function () { return settingRouter_1.settingRouter; } });
const userRouter_1 = require("./userRouter");
Object.defineProperty(exports, "userRouter", { enumerable: true, get: function () { return userRouter_1.userRouter; } });
const routes = (0, express_1.Router)();
routes.use(channelRouter_1.channelRouter);
routes.use(adminVideoRouter_1.adminVideoRouter);
routes.use(settingRouter_1.settingRouter);
