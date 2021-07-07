import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </Provider>
  );
}

export default App;
