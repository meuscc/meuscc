import fs from "fs";

const md = fs.readFileSync("./a.md").toString();

const b = md.replace(/\$\$(.|\s)*\$\$/, function ($1, $2) {
  console.log("---");
  console.log($1, $2);
  return "<m-b>" + $2.replace(/\$/g, "").replace(/\\/g, "\\\\") + "</m-b>";
});

console.log("==============");
console.log(b);
