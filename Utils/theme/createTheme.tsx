import { IThemeProps } from "./themeProps";


export const createTheme = <T extends IThemeProps>(themeObject: T): T => themeObject;