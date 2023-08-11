// * Importing the 'User' type from a local file.
// * TypeScript allows us to define custom types for more complex data structures.
import { User } from "@/types";

// * Importing the 'NextApiRequest' and 'NextApiResponse' types from the 'next' library.
// * These types are used to type the request and response parameters of Next.js API route handlers.
import type { NextApiRequest, NextApiResponse } from "next";

// ! Defining the shape of the response data using TypeScript's 'type' keyword.
// ? 'Data' is an array of 'User' objects.
type Data = User[];

// TODO: Creating a Next.js API route handler.
// * This is a default export function that takes a request and a response as parameters.
// * It returns a list of users after a delay of 2 seconds.
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // * Defining a list of users.
  // * Each user is an object with an 'id' and a 'name'.
  const users = [
    { id: 1, name: "John Doe" },
    // ... more users ...
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "James Johnson" },
    { id: 4, name: "Patricia Williams" },
    { id: 5, name: "Robert Brown" },
    { id: 6, name: "Jennifer Davis" },
    { id: 7, name: "Michael Miller" },
    { id: 8, name: "Linda Wilson" },
    { id: 9, name: "William Moore" },
    { id: 10, name: "Elizabeth Taylor" },
    { id: 11, name: "David Anderson" },
    { id: 12, name: "Barbara Thomas" },
    { id: 13, name: "Richard Jackson" },
    { id: 14, name: "Susan White" },
    { id: 15, name: "Joseph Harris" },
    { id: 16, name: "Jessica Martin" },
    { id: 17, name: "Thomas Thompson" },
    { id: 18, name: "Sarah Garcia" },
    { id: 19, name: "Charles Martinez" },
    { id: 20, name: "Karen Robinson" },
  ];

  // * Using 'setTimeout' to simulate a delay.
  // * After 2 seconds, the function passed to 'setTimeout' is called.
  setTimeout(() => {
    // * Sending a response with a status of 200 and the list of users as the response data.
    // * The 'status' method sets the status code of the response, and the 'json' method sends a JSON response.
    res.status(200).json(users);
  }, 2000);
}
