interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(obj: Profile, fieldsToUpdate: Partial<Profile>) {
  return { ...obj, ...fieldsToUpdate };
}

