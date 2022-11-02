import React from "react";

// This context set the light / dark theme context
export const ThemeContext = React.createContext({
  theme: true,
  setTheme: () => {},
});
