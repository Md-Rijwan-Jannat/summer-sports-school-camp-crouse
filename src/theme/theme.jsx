import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#94B49F",
    },
    secondary: {
      main: "#ECB390",
    },

    customColor: {
      light: "#CEE5D0",
      buttonBg: "#CEE5D0",
      main: "#F44336",
      dark: "#B71C1C",
      white: "#fff",
      black: "#000",
    },
    font: {
      product: { title: "#444", price: "#66b180" },
      primary: "#fff",
      secondary: "#000",
      olive: "#94B49F",
    },
  },
});

export default theme;
