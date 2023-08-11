//* Define a function called 'formatDate'.
//* The function receives a string argument and returns a string.
export const formatDate = (dateString: string): string => {
  //* Define 'options' for the date format. This object follows the 'Intl.DateTimeFormatOptions' interface.
  //* It specifies that the year, month, and day should be numeric and long.
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //* The function returns a formatted date string.
  //* 'new Date(dateString)' creates a new Date object from the 'dateString' argument.
  //* 'toLocaleDateString' is then used to convert this Date object to a string using the formatting options defined above.
  //* The first parameter is undefined, meaning it uses the default locale.
  return new Date(dateString).toLocaleDateString(undefined, options);
};
