import axios from "axios";
import * as cheerio from "cheerio";

const PAGE_URL = "https://tdkdx.com/1800s";

const USER_AGENT =
  "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0";

const header = {
  referrer: "https://tdkdx.com",
  accept: "*/*",
  "user-agent": USER_AGENT,
  "accept-language": "en-GB,en;q=0.5",
};

export async function getDownloadLink(podcastId: number) {
  try {
    const resp = await axios.get(PAGE_URL, {
      headers: header,
    });

    console.log(resp.status);
    const $ = cheerio.load(resp.data);
    const podcastDownload = $("a[class=powerpress_link_d]");
    console.log(podcastDownload[0].attribs.href);
  } catch (err) {}

  try {
  } catch (err) {}
}
