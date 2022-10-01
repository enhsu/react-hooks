# useContext

[Go back to root README](/README.md)

[Reference: React useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

Purpose: App that can change the theme based on the context value

1. Creating the Provider
   [Implement code](/src/context/themeContext.tsx)

   1. Create the ThemeContext

   ```typescript
   // /src/context/themeContext.tsx
   import { createContext } from "react";

   interface ThemeContextType {
     isDarkTheme: boolean;
     toogleTheme: () => void;
   }

   const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
   ```

   1. Based on ThemeContext, we create a component which will be the wrapper for App's root component, or some component we want

   ```typescript
   // /src/context/themeContext.tsx
   interface PropsType {
     children: React.ReactNode;
   }

   const ThemeProvider = ({ children }: PropsType) => {
     return (
       <ThemeContext.Provider value={{} as ThemeContextType}>
         {children}
       </ThemeContext.Provider>
     );
   };

   export default ThemeProvider;
   ```

   1. Add the value for the provider

   ```typescript
   import { useState } from "react";

   const ThemeProvider = ({ children }: PropsType) => {
     const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
     const toggleTheme = () => {
       setIsDarkTheme((prevTheme) => !prevTheme);
     };

     return (
       <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
         {children}
       </ThemeContext.Provider>
     );
   };

   export default ThemeProvider;
   ```

   1. Create a custom hook for use ThemeContext

   ```typescript
   import { useContext } from "react";

   export function useTheme() {
     return useContext(ThemeContext) as ThemeContextType;
   }
   ```

1. Wrapping the component we want
   Usually we'll wrap the `_app.tsx`, cause we want the value globally

   [Implement code](/src/pages/useContext/index.tsx)

   ```typescript
   // /src/pages/_app.tsx
   import type { AppProps } from "next/app";
   import ThemeProvider from "/src/context/themeContext";

   function MyApp({ Component, pageProps }: AppProps) {
     return (
       <ThemeProvider>
         <Component {...pageProps} />
       </ThemeProvider>
     );
   }

   export default MyApp;
   ```

1. Use the context in the child component
   [Implement code](/src/components/useContext/childComponent.tsx)

   ```typescript
   import { useTheme } from "/src/context/themeContext";

   const SomeChildComponent = () => {
     const { isDarkTheme, toggleTheme } = useTheme();

     return (
       <div>
         <button onClick={() => toggleTheme()}>toggle theme</button>
         <p>Current theme is {isDarkTheme ? "dark" : "white"}</p>
       </div>
     );
   };
   ```

[Go back to root README](/README.md)
