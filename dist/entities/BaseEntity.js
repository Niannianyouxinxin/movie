"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class BaseEntity {
    validateThis(skipMissing) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield class_validator_1.validate(this, {
                skipMissingProperties: skipMissing
            });
            const temp = errors.map(e => Object.values(e.constraints));
            const result = [];
            temp.forEach(t => {
                result.push(...t);
            });
            return result;
        });
    }
    static baseTransform(cls, plainObject) {
        if (plainObject instanceof cls) {
            return plainObject;
        }
        return class_transformer_1.plainToClass(cls, plainObject);
    }
}
exports.BaseEntity = BaseEntity;
