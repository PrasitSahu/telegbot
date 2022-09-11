import axios from "axios";

export default class Telegbot {
  constructor(token) {
    this.origin = `https://api.telegram.org/bot${token}`;
  }

  object2query(ob) {
    let query = "";
    for (const prop in ob) {
      if (!query) {
        query += `?${prop}=${ob[prop]}`;
      } else {
        query += `&${prop}=${ob[prop]}`;
      }
    }
    return query;
  }

  getBot() {
    const request = `${this.origin}/getMe`;
    axios(request)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  getUpdates() {
    const request = `${this.origin}/getUpdates`;
    axios(request)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  getWebhookInfo(params) {
    const query = this.object2query(params);
    const request = `${this.origin}/getWebhookInfo${query}`;
    axios(request)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  setWebhook(fields) {
    try {
      const request = `${this.origin}/setWebhook`;
      if (!(typeof fields == "object"))
        throw new Error(
          "required argument of type object not provided --> setWebhook(<arg>)"
        );
      if (!fields["url"])
        throw new Error(
          "required field (url) of type string not provided --> setWebhook(<arg>)"
        );
      axios
        .post(request, fields)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(`${err.code}: ${err.message}`);
        });
    } catch (error) {
      console.error(error);
    }
  }

  deleteWebhook(params) {
    try {
      const query = this.object2query(params);
      if (params && !(typeof params == "object"))
        throw new Error(
          "argument of type object not provided --> setWebhook(<arg>)"
        );
      const request = `${this.origin}/deleteWebhook${query}`;
      axios
        .post(request)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(`${err.code}: ${err.message}`);
        });
    } catch (error) {
      console.error(error);
    }
  }
}
