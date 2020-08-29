"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MovieSchema_1 = __importDefault(require("./MovieSchema"));
exports.MovieModel = MovieSchema_1.default;
mongoose_1.default.connect("mongodb://localhost:27017/moviedb", {
    useNewUrlParser: true
}).then(() => {
    console.log("连接数据库成功");
});
