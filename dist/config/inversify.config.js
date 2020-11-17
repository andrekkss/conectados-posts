"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = __importDefault(require("./type"));
const inversify_1 = require("inversify");
const PostRepositoryImpl_1 = require("../repository/PostRepositoryImpl");
const container = new inversify_1.Container();
container.bind(type_1.default.PostRepositoryImpl).to(PostRepositoryImpl_1.PostRepositoryImpl).inSingletonScope();
exports.default = container;
