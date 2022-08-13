import { AuthProvider } from "./context";
import { ThemeProvider } from "@mui/material";
import Router from "./router";
import theme from "./theme";
import { Footer } from "./pages";
const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router />
<Footer/>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
