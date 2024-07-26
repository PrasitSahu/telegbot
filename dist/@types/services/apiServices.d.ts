import { AxiosRequestConfig } from "axios";
import { Bot } from "../index";
export default class ApiServices {
    key: string;
    url: string;
    constructor(key: string);
    get(options?: AxiosRequestConfig): Promise<Bot>;
}
