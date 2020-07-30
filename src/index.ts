import * as yargs from "yargs";
import { getDownloadLink } from "./api";
import { saveFile } from "./save-file";
import { delay } from "./utils/utils";
import { ProgInput } from "./models/prog-input";
import { verifyParams } from "./utils/checkings";

yargs.version("1.0.0");
yargs.command({
  command: "get",
  describe: "Download tdkdx podcasts from --start to --end",
  builder: {
    start: {
      describe: "Lower boundary",
      demandOption: true,
      type: "number",
    },
    end: {
      describe: "Upper boundary",
      demandOption: false,
      type: "number",
    },
  },
  handler: main,
}).argv;

const HOME_PAGE_URL = "https://tdkdx.com/";
const PATH = "../files/";
async function main(argv: ProgInput) {
  try {
    let min = 0;
    let max = 0;
    await verifyParams(argv.start, argv.end).then((res: any) => {
      min = Math.min(res.start, res.end);
      max = Math.max(res.start, res.end);
    });

    for (let i = min; i < max; ++i) {
      const downloadUrl = await getDownloadLink(i, HOME_PAGE_URL);
      await delay(i % 3 == 0 ? 2500 : 1500);
      saveFile(downloadUrl, PATH);
    }
  } catch (err) {
    console.log(err);
  }
}
