// Builds the CV PDFs from the HTML files in this folder.
// Run from the repo root:  node cv/build.mjs
// Needs Playwright (npm i -D playwright). Output goes to assets/docs/.
import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, "..", "assets", "docs");
const jobs = [
  ["combined.html", "Abdelrahman-Samy-CV.pdf"],
  ["architecture.html", "Abdelrahman-Samy-CV-Architect.pdf"],
  ["marketing.html", "Abdelrahman-Samy-CV-Visual-Content.pdf"],
];

const browser = await chromium.launch();
for (const [src, pdf] of jobs) {
  const page = await browser.newPage();
  await page.goto("file://" + path.join(here, src));
  await page.evaluate(() => document.fonts.ready);
  const overflow = await page.evaluate(() => {
    const pg = document.querySelector(".page"), cols = document.querySelector(".cols");
    return [...cols.children].map((c) => c.scrollHeight - c.clientHeight).filter((d) => d > 1).length > 0 || pg.scrollHeight > pg.clientHeight + 1;
  });
  if (overflow) console.warn(`⚠ ${src}: content is longer than one page, trim some text`);
  await page.pdf({ path: path.join(out, pdf), format: "A4", printBackground: true, preferCSSPageSize: true });
  console.log("✓", pdf);
}
await browser.close();
