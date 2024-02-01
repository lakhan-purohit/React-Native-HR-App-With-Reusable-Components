export interface IThemeProps {
  colors?: colors;
  spacing?: spacing;
  borderRadius?: borderRadius;
  appbar?: IAppbar;
  inputTextFieldTheme?: IInputTextFieldTheme;
  textViewTheme?: ITextViewTheme;
  touchableOpacity?: number;
  rippleEffectColor?: string;
  shadowColor?:string,
 
  [k:string]:any,
}

type modeColors<T> = {
  primary?: T;
  onPrimary?: T;
  secondry?: T;
  onSecondry?: T;
  background?: T;
  onBackground?: T;
  accent?: T;
  lightAccent?:T;
};

type colors = Record<string, string> & modeColors<string>;

type spacing = {
  xxs?: number;
  xs?: number;
  s?: number;
  m?: number;
  l?: number;
  xl?: number;
  xxl?: number;
};

type borderRadius = {
  xxs?: number;
  xs?: number;
  s?: number;
  m?: number;
  l?: number;
  xl?: number;
  xxl?: number;
};

interface IAppbar {
  background: keyof colors;
}

interface IInputTextFieldTheme {
  placeholderTextColor?: string;
  textColor?: string;
  variants?: IInputTextFieldVarients;
}

interface IInputTextFieldVarients {
  outlined?: IInputTextFieldPrps;
  filled?: IInputTextFieldPrps;
  standerd?: IInputTextFieldPrps & {
    borderTopWidth?: number;
    borderRightWidth?: number;
    borderBottomWidth?: number;
    borderLeftWidth?: number;
  };
  none?: null;
}

export type TInputTextFieldVarient = keyof IInputTextFieldVarients;

interface IInputTextFieldPrps {
  borderRadius?: number;
  borderStyle?: "solid" | "dotted" | "dashed" | undefined;
  borderWidth?: number;
  backgroundColor?: string;
}

interface ITextViewTheme {
  body?: ITextViewThemePrps;
  title?: ITextViewThemePrps;
  heading?: ITextViewThemePrps;
  display?: ITextViewThemePrps;
  subtitle?: ITextViewThemePrps;
}

export type TextViewVerients = keyof ITextViewTheme;

interface ITextViewThemePrps {
  fontSize: number;
  fontWeight:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold";
  color: string;
}


// const createTheme = <T extends IThemeProps>(themeObject: T): T => themeObject;

// const d = createTheme({colors:{red:"red"}});

// d.colors.


