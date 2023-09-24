import { createContext, useContext, useState, FC } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  changeTheme: (theme: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  changeTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  initialTheme?: "light" | "dark";
  children?: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  initialTheme = "light",
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const changeTheme = (theme: "light" | "dark") => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
