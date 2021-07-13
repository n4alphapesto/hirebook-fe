import React from 'react';
import PropTypes from 'prop-types';

import { Hidden, AppBar, Toolbar, Box, Link, IconButton, Menu, MenuItem, makeStyles, Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../assets/svg/logo.svg';
import Image from './Image';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#79d4fd',  
    },
    content: {
        display: 'flex', 
        justifyContent: 'space-between',
    }, 
    logo: {
        paddingLeft: theme.spacing(10),
    },
    navlinks: {
        paddingRight: theme.spacing(10),
    },
    navlink: { 
        margin: '20px',
        padding: '20px 10px',
        '&:hover': {
        //    backgroundColor: '#3590fd',
            color: 'black', 
            borderBottom: '2px solid red' 
        }
        

    }
}));


const PopUpForm = ({openPopUp, handlePopUpClose}) => {
    
    return (
        <Dialog
            open={openPopUp}
            onClose={handlePopUpClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Login/SignUp</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Form comes here
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
    
}


const Navbar = ({navItems, ...restOfProps}) => {
    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const [openPopUp, setOpenPopUp] = React.useState(false);

    const handlePopUpOpen = () => {
        setOpenPopUp(true);
    };

    const handlePopUpClose = () => {
        setOpenPopUp(false);
    };


    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.content}>
                <Link href="/" className={classes.logo}>
                    <Image src={logo} width={164}/>
                </Link>
            
                <Hidden mdDown>
                    <Box className={classes.navlinks} aria-label={`navbar for ${navItems}`}>
                        {
                            navItems.map((el, i) => (
                                <Link 
                                    key={i}
                                    className={classes.navlink}  
                                    underline='none'
                                    //href={`${el}`}
                                    onClick={handlePopUpOpen}
                                >{el.toUpperCase()}</Link>
                                )
                            )
                        }
                    </Box>
                </Hidden>

                <Hidden mdUp>
                    <IconButton
                        color="default"
                        aria-label="open drawer....."
                        edge="end"
                        onClick={handleClick}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {
                            navItems.map((el, i) => (
                                <MenuItem key={i} >
                                    <Link   
                                        underline='none'
                                        //href={`${el}`}
                                        onClick={handlePopUpOpen} 
                                    >{el.toUpperCase()}</Link>
                                </MenuItem>
                                
                                )
                            )
                        }
                        
                    </Menu>
                
                </Hidden>
                <PopUpForm openPopUp={openPopUp} handlePopUpClose={handlePopUpClose}/>
            
            
            
            </Toolbar>
        </AppBar>
    )
}

Navbar.defaultProps = {
    navItems: ['login', 'signup']

}

Navbar.propTypes = {
    navItems: PropTypes.array,
    
 
}

export default Navbar;

