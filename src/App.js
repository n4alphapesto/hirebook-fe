import "./App.css";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";

import configStore from "./mainStore";
import Routes from "./Routes";

// Added Lato fonts as default Font
const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={4}>
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
