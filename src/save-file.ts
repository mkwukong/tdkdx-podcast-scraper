import axios from "axios";
import { header } from "./utils";
import * as fs from "fs";

export async function saveFile(url: string | undefined, savePath: string) {
  try {
    console.log(url);
    const resp = await axios.request({
      method: "GET",
      responseType: "stream",
      url: url,
      //headers: header,
    });
    let splittedPath;
    if (url !== undefined) {
      splittedPath = url.split("/");
      console.log(`${savePath}${splittedPath[splittedPath.length - 1]}`);
      resp.data.pipe(
        fs.createWriteStream(
          `${savePath}${splittedPath[splittedPath.length - 1]}`
        )
      );
    }

    console.log("Done");
  } catch (err) {
    console.log(err);
  }
}
