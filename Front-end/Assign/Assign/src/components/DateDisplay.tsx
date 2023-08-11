// Import the React library.
import React from "react";

// Import the 'formatDate' utility function.
import { formatDate } from "@/utils/formatDate";

// Define the type of props that the 'DateDisplay' component expects.
interface DateDisplayProps {
  // The 'date' prop should be a string.
  date: string;
}

// Define 'DateDisplay' as a Functional Component that accepts 'DateDisplayProps' as props.
const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  // Return a paragraph element with the formatted date.
  return <p>{formatDate(date)}</p>;
};

// Export the 'DateDisplay' component as the default export.
// This allows the component to be imported with the name 'DateDisplay' from this file.
export default DateDisplay;
