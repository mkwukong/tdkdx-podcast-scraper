export function delay(ms: number) {
  new Promise((resolve) => setTimeout(resolve, ms));
}

const USER_AGENT =
  "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0";

export const header = {
  referrer: "https://tdkdx.com",
  accept: "*/*",
  "user-agent": USER_AGENT,
  "accept-language": "en-GB,en;q=0.5",
};
