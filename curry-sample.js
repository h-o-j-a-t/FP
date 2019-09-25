const { curry } = require("./curry.js");

const match = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter = curry((f, xs) => xs.filter(f));
const map = curry((f, xs) => xs.map(f));

let output = match(/r/g, "hello world");

const hasLetterR = match(/r/g);

console.log(output);

output = hasLetterR("hello world");

console.log(output);

output = hasLetterR("just j and s and t etc");

console.log(output);

filter(hasLetterR, ["rock and roll", "smooth jazz"]); // ['rock and roll']
const removeStringsWithoutRs = filter(hasLetterR); // xs => xs.filter(x => x.match(/r/g))
removeStringsWithoutRs(["rock and roll", "smooth jazz", "drum circle"]);

const noVowels = replace(/[aeiou]/gi); // (r,x) => x.replace(/[aeiou]/ig, r)
const censored = noVowels("*"); // x => x.replace(/[aeiou]/ig, '*')
censored("Chocolate Rain"); // 'Ch*c*l*t* R**n'
