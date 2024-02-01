import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IThemeProps } from "./themeProps";
import { darkTheme, lightTheme } from "./defaultTheme";
import { useColorScheme } from "react-native";
import { setBackgroundColorAsync } from "expo-system-ui";
import { ColorValue } from "react-native/Libraries/StyleSheet/StyleSheet";
type TContextProps = {
  theme: IThemeProps;
  changeMode: () => void;
};

const contextValue: TContextProps = {
  theme: lightTheme,
  changeMode: () => {},
};

const ThemeContext = createContext(contextValue);

type TThemeProviderProps = {
  children: ReactNode;
  defaultThemeMode?: "LIGHT" | "DARK" | "SYSTEM";
};

export const useTheme = () => {
  const t = useContext(ThemeContext);
  const { changeMode, theme } = t;
  return { changeMode, theme };
};

const ThemeProvider = ({
  children,
  defaultThemeMode = "SYSTEM",
}: TThemeProviderProps) => {
  const [theme, setTheme] = useState<IThemeProps>(lightTheme);
  const changeMode = () => {
    setTheme(theme == lightTheme ? darkTheme : lightTheme);
  };

  const colorScheme = useColorScheme();

  useEffect(() => {
    let theme: IThemeProps = lightTheme;

    if (defaultThemeMode == "DARK") {
      theme = darkTheme;
    } else if (defaultThemeMode == "LIGHT") {
      theme = lightTheme;
    } else if (defaultThemeMode == "SYSTEM") {
      theme = colorScheme == "dark" ? darkTheme : lightTheme;
    }
    setTheme(theme);
    
  }, []);

  useEffect(() => {
    if (defaultThemeMode == "SYSTEM") {
      const theme = colorScheme == "dark" ? darkTheme : lightTheme;
      setTheme(theme);
      // console.log("callll")
      setBackgroundColorAsync(theme.colors?.background as ColorValue);
    }
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeMode: changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
