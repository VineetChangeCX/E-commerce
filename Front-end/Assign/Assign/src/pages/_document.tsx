// Importing specific components from 'next/document'.
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // Html is a custom component from 'next/document' that is a replacement for the standard <html> element in a React document.
    <Html lang="en">
      {/* 
        Head is a custom component from 'next/document' that is a replacement for the standard <head> element in a React document.
        Here you can add meta tags, link tags for fonts, and other resources for the head of your document.
      */}
      <Head />

      <body>
        {/* 
          Main is a custom component from 'next/document' that is a placeholder for where your page's content will be injected.
        */}
        <Main />

        {/* 
          NextScript is a custom component from 'next/document' that is used to inject Next.js scripts into your page.
          It includes scripts for hot module replacement in development and the scripts needed for your page to function in production.
        */}
        <NextScript />
      </body>
    </Html>
  );
}
