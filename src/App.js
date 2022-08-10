import { AuthProvider } from "./context";
import { ThemeProvider } from "@mui/material";
import Router from "./router";
import theme from "./theme";
const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
