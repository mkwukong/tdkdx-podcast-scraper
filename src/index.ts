import { getDownloadLink } from "./api";
import { saveFile } from "./save-file";
import { delay } from "./utils";

const HOME_PAGE_URL = "https://tdkdx.com/";
const PATH = "../files/";
async function main() {
  const podcastIds: number[] = [
    1800,
    1799,
    1798,
    1797,
    1796,
    1795,
    1794,
    1793,
    1792,
    1791,
    1790,
    1789,
    1788,
    1787,
    1786,
  ];
  for (let i = 0; i < podcastIds.length; ++i) {
    const downloadUrl = await getDownloadLink(podcastIds[i], HOME_PAGE_URL);
    await delay(i % 3 == 0 ? 2500 : 1500);
    saveFile(downloadUrl, PATH);
  }
}

main().catch(() => console.log("Page dosen't exist"));
