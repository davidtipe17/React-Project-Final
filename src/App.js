import { ThemeProvider } from "@mui/material";
import Router from "./router";
import theme from "./theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
