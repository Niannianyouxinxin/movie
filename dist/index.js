"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const MovieRoute_1 = __importDefault(require("./routes/MovieRoute"));
const UploadRoute_1 = __importDefault(require("./routes/UploadRoute"));
const connect_history_api_fallback_1 = __importDefault(require("connect-history-api-fallback"));
const app = express_1.default();
app.use(connect_history_api_fallback_1.default());
app.use("/", express_1.default.static("public/build"));
app.use("/upload", express_1.default.static("public/upload"));
app.use(express_1.default.json());
app.use("/api/movie", MovieRoute_1.default);
app.use("/api/upload", UploadRoute_1.default);
app.listen(3000);
