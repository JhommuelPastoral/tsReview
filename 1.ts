import { JSDOM } from "jsdom";
const url =
  "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub";

type Row = {
  x: number;
  char: string;
  y: number;
};

async function main() {
  try {
    const res = await fetch(url);
    const html = await res.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const rows = document.querySelectorAll("table tr");

    const data: Row[] = [];

    rows.forEach((row:any) => {
      const cells = row.querySelectorAll("td");

      if (cells.length === 3) {
        const x = Number(cells[0].textContent?.trim());
        const char = cells[1].textContent?.trim() ?? " ";
        const y = Number(cells[2].textContent?.trim());

        if (!isNaN(x) && !isNaN(y)) {
          data.push({ x, char, y });
        }
      }
    });

    // find grid size
    const maxX = Math.max(...data.map((d) => d.x));
    const maxY = Math.max(...data.map((d) => d.y));
    console.log(`Grid size: ${maxX + 1} x ${maxY + 1}`);
    // build grid
    const grid: string[][] = Array.from({ length: maxY + 1 }, () =>
      Array.from({ length: maxX + 1 }, () => " ")
    );

    // fill grid
    for (const { x, y, char } of data) {
      grid[y][x] = char;
    }

    // print result
    console.log("\n===== RESULT =====\n");
    for (const row of grid) {
      console.log(row.join(""));
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

main();