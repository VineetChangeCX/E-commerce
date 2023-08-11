// Import the React library.
import React from "react";

// Import the 'UserList' component.
import UserList from "@/components/UserList";

// Define 'Home' as a Functional Component using React.FC (Function Component)
// This component doesn't take any props.
const Home: React.FC = () => {
  // Return the JSX to render for this component.
  return (
    // Use a div as the root element of the component.
    <div>
      {/* Render the UserList component. */}
      <UserList />
    </div>
  );
};

// Export the 'Home' component as the default export.
// This allows the component to be imported with the name 'Home' from this file.
export default Home;
