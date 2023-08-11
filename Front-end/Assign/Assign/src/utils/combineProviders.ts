//* Importing React along with some specific types from "react".
//* 'ComponentType' is a utility type used for class components or functional components.
//* 'ReactNode' is a type used for children props and anything that can be rendered in JSX.
import React, { ComponentType, ReactNode } from "react";

//* Define a TypeScript interface for the props that the 'combineProviders' function expects.
interface ProvidersProps {
  //* An array of React component providers. The eslint-disable line disables TypeScript's no-explicit-any rule, allowing the use of the 'any' type.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  providers: ComponentType<any>[];

  //* The 'children' prop allows other elements to be passed into our component.
  children: ReactNode;
}

//* The 'combineProviders' function receives an object that fits the 'ProvidersProps' interface.
//* It returns a 'ReactNode' which represents a piece of the React component tree.
const combineProviders = ({
  providers,
  children,
}: ProvidersProps): ReactNode => {
  //* 'reduceRight' is used to apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
  //* This creates a new provider that contains all other providers with the 'children' inside.
  return providers.reduceRight(
    (children, CurrentProvider) =>
      //* 'React.createElement' creates a new React element of a given type.
      //* The type argument can be either a tag name string (such as 'div' or 'span'), a React component type (a class or a function), or a React fragment type.
      React.createElement(CurrentProvider, {}, children),
    children,
  );
};

//* Export the 'combineProviders' function as the default export of this module.
export default combineProviders;
