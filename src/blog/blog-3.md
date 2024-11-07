# Why are Type Guards Necessary?

Type guards in TypeScript help keep your code safe by making sure the types are correct. They allow you to check the type of a variable at runtime, ensuring that you can safely access properties or methods without causing errors. Using type guards helps prevent bugs and improves code reliability.

## Types of Type Guards and Their Use Cases

Here’s a list of the main type guards in TypeScript:

### 1. `typeof` Type Guard

The `typeof` type guard is used to check if a variable is of a primitive type like `string`, `number`, `boolean`, `symbol`, or `undefined`.This type guard is commonly used when you need to narrow down the type of a variable, especially when dealing with union types.

```
function add(param1: string | number, param2: number): number {
  if (typeof param1 === 'string') {
    return parseFloat(param1) + param2
  }
  return param1 + param2
}

const result1 = add('2', 5)
const result2 = add(2, 5)
console.log(result1) // 7
console.log(result2) // 7

```

## 2. `in` Operator Type Guard

The `in` operator checks if a property exists on an object. This is useful for distinguishing types based on specific properties.

```
type Dog = {
  name: string;
}

type Cat = {
  name: string;
  sound: 'mew mew';
}

function activity(animal: Dog | Cat): string {
  if ('sound' in animal) {
    return `The ${animal.name} is making sound ${animal.sound}`
  }
  return `The ${animal.name} is sleeping`
}
console.log(activity({ name: 'bilai', sound: 'mew mew' }))
console.log(activity({ name: 'German Shephard' }))

```

## 3. `instanceof` Operator Type Guard

The instanceof type guard checks if an object is an instance of a specific class or constructor function, helping TypeScript narrow the type based on its prototype chain.

```
class Dog {
  bark() {
    console.log("Ghew Ghew");
  }
}

class Cat {
  meow() {
    console.log("Meow Meow!");
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDog = new Dog();
const myCat = new Cat();

makeSound(myDog);
makeSound(myCat);
```

## 4. `User-Defined` Type Guard

The TypeScript special syntax known as "User-Defined Type Guard" is used for functions that return a boolean and that also indicates whether or not an argument has a specific type.

```
type Salesman = {
  name: string;
  role: "Salesman";
  department: string;
};

type Manager = {
  name: string;
  role: "Manager";

};
// User-Defined Type Guard

function isSalesman(person: Salesman | Manager): person is Salesman {
  return (person as Salesman).department !== undefined;
}

function printDetails(person: Salesman | Manager): string {
  if (isSalesman(person)) {

    return `${person.name} is a Salesman of ${person.department}`;
  } else {

    return `${person.name} is an Manger`;
  }
}

const salesman: Salesman = { name: "Mr. X", role: "Salesman", department: "Sales" };
const manager: Manager = { name: "Ripon", role: "Manager", };

console.log(printDetails(salesman));
console.log(printDetails(manager));


```
