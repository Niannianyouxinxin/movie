import Express from "express";
import multer from "multer";
import path from "path"
import { ResponseHelper } from "./ResponserHelper";

const router = Express.Router();

const storage = multer.diskStorage({
    destination:path.resolve(__dirname,"../../public/upload"),
    filename(req,file,cb){
        const time = new Date().getTime();
        const extname = path.extname(file.originalname);
        cb(null,`${time}${extname}`);
    }
})

const allowedExtensions = [".jpg",".png",".gif",".bmp","jiff"];
const upload = multer({
    storage,
    limits:{
        fileSize:1024 * 1024  // 文件最多1M
    },
    fileFilter(req,file,cb){
        const ext = path.extname(file.originalname);
        if(allowedExtensions.includes(ext)){
            cb(null,true);
        }else{
            cb(new Error("不能识别此后缀名的文件"));
        }
    }
}).single("imgfile");

router.post("/",(req,res) => {
    upload(req,res,err => {
        if(err){
            ResponseHelper.sendError(err.message,res);
        }else{
            const url = `/upload/${req.file.filename}`;
            ResponseHelper.sendData(url,res);
        }
    })
})

export default router;