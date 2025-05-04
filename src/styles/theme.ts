import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#8d5be9",
      contrastText: "#fff",
    },
    secondary: {
      main: "#5e3ca6",
    },
    background: {
      default: "#fff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#333",
      secondary: "#888",
    },
  },
  typography: {
    fontFamily: `'Nunito', 'Quicksand', 'Arial Rounded MT Bold', Arial, sans-serif`,
    h1: { fontWeight: 900, fontSize: "2.7rem" },
    h2: { fontWeight: 700, fontSize: "2rem" },
    subtitle1: { fontWeight: 600, fontSize: "1.2rem" },
    body1: { fontWeight: 400, fontSize: "1rem" },
  },
});
