import React from 'react';
import PropTypes from 'prop-types';

import { Hidden, AppBar, Toolbar, Box, Link, IconButton, Menu, MenuItem, makeStyles } from '@material-ui/core';
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
        '& > *': {
            margin: '20px',
            padding: '20px 10px',
            '&:hover': {
                //backgroundColor: '#3590fd',
                color: 'black', 
                borderBottom: '2px solid red' 
            }

        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
    
}));







const Navbar = ({children, ...restOfProps}) => {
    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.content}>
                <Link href="/" className={classes.logo}>
                    <Image src={logo} width={164}/>
                </Link>
            
                <Hidden mdDown>
                    <Box className={classes.navlinks} aria-label={`navbar `}>
                        {children}
                        {/*
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
                            */}
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
                        {children.map((el, i) => <MenuItem key={i} onClick={handleClose}>{el}</MenuItem>)}
                        {/*
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
                        */}
                        
                    </Menu>
                
                </Hidden>
                
            
            
            
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


