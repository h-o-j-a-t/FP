# 1
it's usefull while working on compose
```
// this line
ajaxCall(json => callback(json));
// is the same as this line
ajaxCall(callback);
```
# 2
Having multiple names for the same concept is a common source of confusion in projects.
There is also the issue of generic code. For instance, these two functions do exactly the
same thing, but one feels infinitely more general and reusable:
```
// specific to our current blog
const validArticles = articles =>
articles.filter(article => article !== null && article !== undefined),
// vastly more relevant for future projects
const compact = xs => xs.filter(x => x !== null && x !== undefined);
```
By using specific naming, we've seemingly tied ourselves to specific data (in this case
articles ). This happens quite a bit and is a source of much reinvention.
# 3 Pure Functions
>***A pure function is a function that, given the same input, will always return the same
output and does not have any observable side effect.***

page: 24