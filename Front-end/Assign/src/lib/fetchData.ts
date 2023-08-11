// TODO: Creating an asynchronous function to fetch data.
// * This function is generic, meaning it can fetch data of any type.
// * It takes a URL as a parameter, and returns a promise that resolves with the fetched data.
export async function fetchData<T>(url: string): Promise<T> {
  // * Using the 'fetch' function to fetch data from the URL.
  // * The 'fetch' function returns a promise that resolves with the Response object representing the response to the request.
  const response = await fetch(url);

  // * Checking if the fetch operation was successful.
  // * If the 'ok' property of the Response object is false, the fetch operation failed, so an error is thrown.
  if (!response.ok) {
    throw new Error(`An error occurred: ${response.statusText}`);
  }

  // * Parsing the response data as JSON.
  // * The 'json' method of the Response object returns a promise that resolves with the result of parsing the body text as JSON.
  // * The parsed data is cast to type T using TypeScript's type assertion syntax.
  const data = (await response.json()) as T;

  // * Returning the parsed data.
  return data;
}
