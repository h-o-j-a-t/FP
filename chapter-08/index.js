class Container {
  constructor(x) {
    this.$value = x;
  }
  static of(x) {
    return new Container(x);
  }
}

Container.prototype.map = f => Container.of(f(this.$value));

const log = x => console.log(x);

Container.of(3);
// Container(3)
Container.of("hotdogs");
// Container("hotdogs")
Container.of(Container.of({ name: "yoda" }));
// Container(Container({ name: 'yoda' }))
