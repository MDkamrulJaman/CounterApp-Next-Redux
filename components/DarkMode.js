import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function DarkMode() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main></main>
    </ThemeProvider>
  );
}

export default DarkMode;
