import { getDownloadLink } from "./api";
import { saveFile } from "./save-file";

const HOME_PAGE_URL = "https://tdkdx.com/";
const PATH = "../files/";
async function main() {
  const podcastId: number = 200;
  const downloadUrl = await getDownloadLink(podcastId, HOME_PAGE_URL);
  saveFile(downloadUrl, PATH);
}

main().catch(() => console.log("Page dosen't exist"));
