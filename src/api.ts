import axios, { AxiosResponse } from "axios";
import * as cheerio from "cheerio";
import { delay } from "./utils";

const USER_AGENT =
  "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0";

const header = {
  referrer: "https://tdkdx.com",
  accept: "*/*",
  "user-agent": USER_AGENT,
  "accept-language": "en-GB,en;q=0.5",
};

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
