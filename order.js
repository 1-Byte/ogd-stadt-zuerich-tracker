const fs = require("fs");
const fetch = require("node-fetch");

const BASE_URL = "https://www.ogd.stadt-zuerich.ch/geoportal_order/";
const ORDER_CHECK = 20000;

let { order } = JSON.parse(fs.readFileSync(process.argv[2]));
let destination = process.argv[3];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async function () {
  let res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({ order }),
    headers: { "Content-Type": "application/json" },
  });
  let ordered = await res.json();
  console.log(ordered);

  let statusUrl = BASE_URL + ordered.job_id;
  while (true) {
    console.log(statusUrl);
    let statusRes = await fetch(statusUrl);
    let { status } = await statusRes.json();
    if (status == "SUCCESS") {
      break;
    } else if (status == "PULLED") {
      await sleep(ORDER_CHECK);
    } else {
      throw new Error("Unknown status: " + status);
    }
  }

  let downloadUrl = ordered.download_url;
  console.log(downloadUrl, destination);
  await fetch(downloadUrl).then((res) => {
    res.body.pipe(fs.createWriteStream(destination));
  });
})().catch((err) => {
  console.log(err);
  process.exit(1);
});
