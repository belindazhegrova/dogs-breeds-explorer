import "./App.css";
import Navigation from "./navigation";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NotificationComponent from "./utils/Notifications";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <NotificationComponent />
    </ThemeProvider>
  );
}

export default App;
