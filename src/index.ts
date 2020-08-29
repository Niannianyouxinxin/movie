import "reflect-metadata";
import Express from "express";
import MovieRouter from "./routes/MovieRoute"
import UploadRouter from "./routes/UploadRoute"
import history from "connect-history-api-fallback"

const app = Express();
app.use(history());
app.use("/",Express.static("public/build"));
app.use("/upload",Express.static("public/upload"));  

app.use(Express.json()); // 解析json格式数据

app.use("/api/movie",MovieRouter);

app.use("/api/upload",UploadRouter);

app.listen(3000);