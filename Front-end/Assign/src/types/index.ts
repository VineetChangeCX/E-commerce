//* Defining an interface named 'User'.
//* Interfaces in TypeScript are used to tell the compiler what the shape an object should have.
//* They are used to check the validity of the objects at compile time.
export interface User {
  //* 'id' property of the 'User' should be of type 'number'.
  id: number;

  //* 'name' property of the 'User' should be of type 'string'.
  name: string;
}
