// * Importing necessary hooks from the 'react' library.
import { useReducer, useEffect } from "react";

// * Importing a utility function 'fetchData' from a local file.
// * This function is used to fetch data from a given URL.
import { fetchData } from "@/lib/fetchData";

// ! Defining the shape of the state using TypeScript's 'interface' keyword.
// ? 'data' is either of type T (a generic type) or null.
// ? 'loading' is a boolean indicating if data is being fetched.
// ? 'error' is either an Error object or null.
interface State<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

// ! Defining the shape of the actions using TypeScript's 'type' keyword.
// * An action can be one of three types: 'FETCH_INIT', 'FETCH_SUCCESS', or 'FETCH_FAILURE'.
// * 'FETCH_SUCCESS' and 'FETCH_FAILURE' actions have a 'payload' property.
type Action<T> =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: T }
  | { type: "FETCH_FAILURE"; payload: Error };

// TODO: Creating a reducer function.
// * This function takes the current state and an action, and returns the new state.
// * It uses a switch statement to handle different action types.
function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error();
  }
}

// TODO: Creating a custom hook to fetch data.
// * This hook takes a URL and initial data, and returns the state of the fetch operation.
// * It uses the 'useReducer' and 'useEffect' hooks from React.
const useFetch = <T>(url: string, initialData: T): State<T> => {
  // * Defining the initial state.
  const initialState: State<T> = {
    data: initialData,
    loading: false,
    error: null,
  };

  // * Using the 'useReducer' hook to manage state.
  // * The 'useReducer' hook takes a reducer function and the initial state, and returns the current state and a dispatch function.
  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(
    reducer,
    initialState,
  );

  // * Using the 'useEffect' hook to fetch data when the URL changes.
  // * The 'useEffect' hook takes a function and an array of dependencies, and runs the function whenever any of the dependencies change.
  useEffect(() => {
    const fetchDataFromUrl = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const data = await fetchData<T>(url);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: error as Error });
      }
    };

    fetchDataFromUrl();
  }, [url]);

  // * Returning the current state.
  return state;
};

// * Exporting the custom hook.
export default useFetch;
