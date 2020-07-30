import axios, { AxiosResponse } from "axios";
import * as cheerio from "cheerio";
import { delay, header } from "./utils/utils";

export async function getDownloadLink(podcastId: number, url: string) {
  let resp;
  try {
    resp = await axios.get(`${url}${podcastId}s`, {
      headers: header,
    });
    return parseResponse(resp);
  } catch (err) {
    console.log(`${podcastId}s dosen't exist`);
  }

  await delay(1000);

  try {
    resp = await axios.get(`${url}${podcastId}`, {
      headers: header,
    });
    return parseResponse(resp);
  } catch (err) {
    console.log(`${podcastId} dosen't exist`);
  }
}

function parseResponse(resp: AxiosResponse) {
  const $ = cheerio.load(resp.data);
  const podcastDownload = $("a[class=powerpress_link_d]");
  return podcastDownload[0].attribs.href;
}
