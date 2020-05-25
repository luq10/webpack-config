// import {lodash} from "lodash";

const sum = (a, b) => a + b;

export default sum;

const foo = () => "Some some some some some some some some some some some some some some some some some some some some";

foo();

class Foo {
  some = {
    a: 1,
  };

  foo() {}
}

new Foo();

async function asyncAction() {
  return await new Promise((resolve) => {
    setTimeout(() => resolve("some async data"), 1000);
  });
}

async function doWork() {
  const data = await asyncAction();

  // eslint-disable-next-line no-console
  console.log(`message = ${data}`);
}

doWork();
