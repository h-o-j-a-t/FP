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

> **_A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect._**

```
// impure
const signUp = (attrs) => {
const user = saveUser(attrs);
welcomeUser(user);
};
// pure
const signUp = (Db, Email, attrs) => () => {
const user = saveUser(Db, attrs);
welcomeUser(Email, user);
};
```

The example here demonstrates that the pure function must be honest about its
dependencies and, as such, tell us exactly what it's up to

---

> **_we're forced to "inject" dependencies, or pass them in as arguments, which makes our app much more flexible because we've parameterized our database or mail client or what have you_**

---

> **_A higher order function is a function that takes or returns a function_**
> page 27
