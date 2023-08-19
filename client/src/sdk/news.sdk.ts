/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";


export class news {
  static remote = new Remote("http://127.0.0.1:8083/news");

  static async setApiKey(apiKey: string) {
    return await news.remote.call("news.setApiKey", apiKey);
  }
  static async getNews(query: string) {
    return await news.remote.call("news.getNews", query);
  }
}

export { Remote };
