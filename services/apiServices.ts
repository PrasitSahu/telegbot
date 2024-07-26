import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { Bot, BotGetError } from "../index";

export default class ApiServices {
  public url = "";
  constructor(public key: string) {
    this.url = `https://api.telegram.org/bot${key}`;
  }
  public async get(options?: AxiosRequestConfig): Promise<Bot> {
    return await axios
      .get<{ ok: true; result: Bot }>(`${this.url}/getMe`, options)
      .then((res) => {
        return res.data.result;
      })
      .catch((error: AxiosError<BotGetError>) => {
        throw new Error(
          `${error.response?.data.error_code}: ${error.response?.data.description}`
        );
      });
  }
}
