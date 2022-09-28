let fs = require("fs");

let input = fs.readFileSync("input.txt").toString();
const reg = /<[^>]*>?/g;

input = input.replace(/<[^>]*>?/g, "");
input = input.replace(" ", "");
console.log(input);

const text = input;
fs.writeFileSync("output.txt", "\ufeff" + text, { encoding: "utf8" });
