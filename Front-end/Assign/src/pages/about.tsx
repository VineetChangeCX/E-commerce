// Importing React from "react". Required to write components in React.
import React from "react";

// Importing the About component from "@/components/About".
// The '@' alias usually points to the 'src' or 'source' directory in your project structure.
import About from "@/components/About";

// Declaring the AboutPage component as a functional component (React.FC) with TypeScript.
// React.FC stands for Functional Component, it's a type provided by React for functional components.
const AboutPage: React.FC = () => {
  // The component returns the About component as its output.
  return <About />;
};

// Exporting AboutPage as the default export of this module.
// This allows us to import AboutPage using a simpler syntax in other parts of our application.
export default AboutPage;
