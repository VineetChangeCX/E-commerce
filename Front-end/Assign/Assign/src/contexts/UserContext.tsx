// * Importing necessary modules from the 'react' library.
// * ReactNode is a TypeScript type that can represent any valid React child elements.
import React, { createContext, useContext, ReactNode } from "react";

// * Importing a custom hook 'useFetch' from a local file.
// * Hooks are a feature in React that lets you use state and other React features without writing a class.
import useFetch from "@/hooks/useFetch";

// * Importing a 'User' type from a local file.
// * TypeScript allows us to define custom types for more complex data structures.
import { User } from "@/types/index";

// ! Defining the shape of the context data using TypeScript's 'interface' keyword.
// ? 'userList' is either an array of User objects or null.
// ? 'loading' is a boolean indicating if data is being fetched.
// ? 'error' is either an Error object or null.
interface UserListContextProps {
  userList: User[] | null;
  loading: boolean;
  error: Error | null;
}

// * Creating a context with the defined shape, initially undefined.
// * The 'createContext' function from React is used here. It creates a new context with the shape defined by 'UserListContextProps'.
const UserListContext = createContext<UserListContextProps | undefined>(
  undefined,
);

// ! Defining the shape of the props for the context provider component.
// ? 'children' is of type 'ReactNode', which can represent any valid React child elements.
interface UserListProviderProps {
  children: ReactNode;
}

// TODO: Creating a context provider component.
// * This is a functional component that takes 'UserListProviderProps' as its props.
// * It uses the custom 'useFetch' hook to fetch user data, and then provides that data through the context.
export const UserListProvider: React.FC<UserListProviderProps> = ({
  children,
}) => {
  // * Using the custom 'useFetch' hook to fetch user data.
  // * The 'useFetch' hook returns an object with three properties: 'data', 'loading', and 'error'.
  // * 'data' is renamed to 'userList' using JavaScript's destructuring assignment syntax.
  const {
    data: userList,
    loading,
    error,
  } = useFetch<User[]>("/api/users", [] as User[]);

  // * Returning the context provider with the fetched data.
  // * The 'UserListContext.Provider' component is returned. It takes a 'value' prop, which is the data that will be provided through the context.
  // * Any child components will be able to access this data using the 'useContext' hook.
  return (
    <UserListContext.Provider value={{ userList, loading, error }}>
      {children}
    </UserListContext.Provider>
  );
};

// TODO: Creating a custom hook to access the 'userList' from the context.
// * This hook calls 'useContext' with 'UserListContext' to get the current context value, then returns the 'userList' property.
// * If the context is undefined (which means this hook was called outside of a 'UserListProvider'), it throws an error.
const useUserList = () => {
  const context = useContext(UserListContext);
  if (context === undefined) {
    throw new Error("useUserList must be used within a UserListProvider");
  }
  return context.userList;
};

// TODO: Creating a custom hook to access the 'loading' state from the context.
// * This is similar to 'useUserList', but it returns the 'loading' property instead.
const useLoading = () => {
  const context = useContext(UserListContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a UserListProvider");
  }
  return context.loading;
};

// TODO: Creating a custom hook to access the 'error' state from the context.
// * This is similar to 'useUserList' and 'useLoading', but it returns the 'error' property instead.
const useError = () => {
  const context = useContext(UserListContext);
  if (context === undefined) {
    throw new Error("useError must be used within a UserListProvider");
  }
  return context.error;
};

// TODO: Creating a custom hook to access all data from the context.
// * This hook calls the previous three hooks and returns an object containing all of their return values.
// * This allows a component to get all of the context data in a single line by calling 'useUserListData'.
export const useUserListData = () => {
  const userList = useUserList();
  const loading = useLoading();
  const error = useError();

  return { userList, loading, error };
};
