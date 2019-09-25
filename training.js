function curry(fn) {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}
// words :: String -> [String]
const str = "asqdf asdfasdf";
// const words = str => split(' ', str);
const split = curry((sep, str) => str.split(sep));
const words = split(" ");
console.log(words(str));

const filter = curry((fn, xs) => xs.filter(fn));
const match = curry((re, str) => re.test(str));
//console.log(filter(words(str)))
//const filter = curry((fn, xs) => xs.filter(fn));
//const filterQs = xs => filter(x => x.match(/q/i), xs);
//console.log(filterQs(str))
const filterqs = filter(match(/q/g));
console.log(filterqs(words(str)));

const keepHighest = (x, y) => (x >= y ? x : y);
const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));
// max :: [Number] -> Number
const max = reduce(keepHighest, -Infinity);

console.log(max([2, 3, 10]));
