var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
export default class ApiServices {
    constructor(key) {
        this.key = key;
        this.url = "";
        this.url = `https://api.telegram.org/bot${key}`;
    }
    get(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios
                .get(`${this.url}/getMe`, options)
                .then((res) => {
                return res.data.result;
            })
                .catch((error) => {
                var _a, _b;
                throw new Error(`${(_a = error.response) === null || _a === void 0 ? void 0 : _a.data.error_code}: ${(_b = error.response) === null || _b === void 0 ? void 0 : _b.data.description}`);
            });
        });
    }
}
