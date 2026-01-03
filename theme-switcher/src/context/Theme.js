import React from "react";
import { createContext , useContext} from "react";

export const ThemeContext = createContext(
    { theme: "light", toggleTheme: () => {} }
);

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}