import { getDownloadLink } from "./api";

const HOME_PAGE_URL = "https://tdkdx.com/";

async function main() {
  const podcastId: number = 200;
  const downloadUrl = await getDownloadLink(podcastId, HOME_PAGE_URL);
  console.log(downloadUrl);
}

main().catch(() => console.log("Page dosen't exist"));
