import { ThemeProvider } from "@mui/material";
import Router from "./router";


const App = () => {
  return (
    <ThemeProvider >
      <Router />
    </ThemeProvider>
  );
};

export default App;