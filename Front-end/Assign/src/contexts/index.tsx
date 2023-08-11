// * Importing necessary modules from the 'react' library.
// * ReactNode is a TypeScript type that can represent any valid React child elements.
import React, { ReactNode } from "react";

// * Importing a utility function 'combineProviders' from a local file.
// * This function is used to combine multiple context providers into a single provider.
import combineProviders from "@/utils/combineProviders";

// * Importing a context provider 'UserListProvider' from a local file.
// * This provider will be included in the global provider.
import { UserListProvider } from "@/contexts/UserContext";

// ! Defining the shape of the props for the global provider component.
// ? 'children' is of type 'ReactNode', which can represent any valid React child elements.
interface GlobalProviderProps {
  children: ReactNode;
}

// TODO: Creating a global provider component.
// * This is a functional component that takes 'GlobalProviderProps' as its props.
// * It includes 'UserListProvider' in the array of providers, meaning the user list data will be available to all components wrapped by the 'GlobalProvider'.
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  // * Defining an array of providers.
  const providers = [UserListProvider];

  // * Returning the combined providers with the children.
  // * The 'combineProviders' function is used here. It takes an object with 'providers' and 'children' properties.
  // * The 'providers' property is an array of providers, and the 'children' property is the children to be rendered inside the providers.
  return combineProviders({ providers, children });
};
