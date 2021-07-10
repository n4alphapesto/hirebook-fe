import './App.css';
import { Provider } from 'react-redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import store from './redux/store';
import Routes from './Routes';

// Added Lato fonts as default Font
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
