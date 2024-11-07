function getProperty<T, Q extends keyof T>(obj: T, key: Q): T[Q] {
  return obj[key];
}

// const person = { name: "Alice", age: 30, isActive: true };
// console.log(getProperty(person, "isActive"));
