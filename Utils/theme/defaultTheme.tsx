import { createTheme } from "./createTheme";

const spacing = {
  xxs: 2,
  xs: 4,
  s: 8,
  m: 12,
  l: 18,
  xl: 24,
  xxl: 30,
};

const borderRadius = {
  xxs: 2,
  xs: 4,
  s: 8,
  m: 12,
  l: 18,
  xl: 24,
  xxl: 30,
};

export const lightTheme = createTheme({
  touchableOpacity: 0.5,
  rippleEffectColor: "#dad5d58e",
  shadowColor:"rgba(0, 0, 0, 0.5)",
  colors: {
    primary: "#229ed9",
    onPrimary: "#ffffff",
    secondry: "#22d9ca",
    onSecondry: "#fcfcfc",
    accent: "#969090",
    lightAccent: "#a7a0a013",
    background: "#fff",
    onBackground: "#000000",
    black: "#050505",
    white: "#FFF",
    leaveBalance:"#4993ef",
    leaveBalanceLight:"#4993ef05",
    leaveApprove:"#add650",
    leaveApproveLight:"#add65010",
    leavePending:"#6acdc5",
    leavePendingLight:"#6acdc505",
    leaveCancel:"#ff5e95",
    leaveCancelLight:"#ff5e9505",
  },
  spacing: spacing,
  borderRadius: borderRadius,
  textViewTheme: {
    display: {
      color: "#474545",
      fontSize: 45,
      fontWeight: "900",
    },
    heading: {
      color: "#000",
      fontSize: 35,
      fontWeight: "bold",
    },
    title: {
      color: "#000",
      fontSize: 18,
      fontWeight: "700",
    },
    body: {
      color: "#0d0d0d",
      fontSize: 14,
      fontWeight: "500",
    },
    subtitle: {
      color: "#4a4848ac",
      fontSize: 12,
      fontWeight: "500",
    },
  },

  inputTextFieldTheme: {
    placeholderTextColor: "#969090",
    variants: {
      filled: {
        backgroundColor: "#c0c0c02d",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 0,
      },
      outlined: {
        backgroundColor: "transparent",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
      },
      standerd: {
        backgroundColor: "transparent",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
      },
      none: null,
    },
  },
});

export const darkTheme = createTheme({
  touchableOpacity: 0.5,
  rippleEffectColor: "#6a636396",
  shadowColor:"rgba(241, 237, 237, 0.5)",
  colors: {
    primary: "#229ed9",
    onPrimary: "#FFF",
    secondry: "#22d9ca",
    onSecondry: "#fff",
    accent: "#f2f2f287",
    lightAccent: "#f2f2f213",
    background: "#1E232F",
    onBackground: "#FFF",
    black: "#000000",
    white: "#fff",
    leaveBalance:"#4993ef",
    leaveBalanceLight:"#4993ef10",
    leaveApprove:"#add650",
    leaveApproveLight:"#add65010",
    leavePending:"#6acdc5",
    leavePendingLight:"#6acdc510",
    leaveCancel:"#ff5e95",
    leaveCancelLight:"#ff5e9510",
  },
  spacing: spacing,
  borderRadius: borderRadius,
  textViewTheme: {
    display: {
      color: "#ffffff79",
      fontSize: 45,
      fontWeight: "900",
    },
    heading: {
      color: "#ffffff",
      fontSize: 35,
      fontWeight: "bold",
    },
    title: {
      color: "#fffefe",
      fontSize: 18,
      fontWeight: "700",
    },
    body: {
      color: "#beb8b8",
      fontSize: 14,
      fontWeight: "500",
    },
    subtitle: {
      color: "#b0a9a9",
      fontSize: 12,
      fontWeight: "500",
    },
  },
  inputTextFieldTheme: {
    placeholderTextColor: "#f2f2f287",
    variants: {
      filled: {
        backgroundColor: "#5754544f",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 0,
      },
      outlined: {
        backgroundColor: "transparent",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 0,
      },
      standerd: {
        backgroundColor: "transparent",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
      },
      none: null,
    },
  },
});
