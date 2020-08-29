"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHelper = void 0;
class ResponseHelper {
    static sendError(error, res) {
        let err;
        if (Array.isArray(error)) {
            err = error.join(";");
        }
        else {
            err = error;
        }
        res.send({
            err,
            data: null
        });
    }
    static sendData(data, res) {
        res.send({
            err: "",
            data
        });
    }
    static sendPageData(result, res) {
        if (result.errors.length > 0) {
            this.sendError(result.errors, res);
        }
        else {
            res.send({
                err: "",
                data: result.data,
                total: result.count
            });
        }
    }
}
exports.ResponseHelper = ResponseHelper;
