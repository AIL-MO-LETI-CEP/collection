const fs = require("fs");
const tsv = fs.readFileSync("tmp.tsv", { encoding: "utf-8" });
const ans = tsv.split(/\r\n|\n/).map(row => {
    const [pmcp, ja] = row.split("\t");
    return JSON.stringify({ "x-pmcp": pmcp, ja });
}).join(",\n")
fs.writeFileSync("tmp_converted.txt", ans);
