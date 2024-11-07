function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
  const isExist: boolean = keys.every((key) => key in obj);
  return isExist;
}
