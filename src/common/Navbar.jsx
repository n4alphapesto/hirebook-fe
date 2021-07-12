import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Tabs, Tab, makeStyles } from '@material-ui/core';

const Navbar = ({ navItems, ...restOfProps }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <AppBar position="relative">
            <Toolbar className={classes.root}>
                <svg className={classes.logo} width="240" height="90.34430180245384" viewBox="0 0 374.70416547671306 70.5258046093016"><defs id="SvgjsDefs1353"></defs><g id="SvgjsG1354" featurekey="nRdZyp-0" transform="matrix(0.849708489268694,0,0,0.849708489268694,-21.837508822481567,-7.2225221587838995)" fill="#111111"><path xmlns="http://www.w3.org/2000/svg" d="M28.2,73c0,0,16.9,2.9,29.7-10.4c-7,10.3-17.7,22.2-32.2,28.9c0,0,38.7-12.1,42.6-47.6  C68.3,43.9,59,65.2,28.2,73z"></path><circle xmlns="http://www.w3.org/2000/svg" cx="70.6" cy="37.7" r="3.7"></circle><path xmlns="http://www.w3.org/2000/svg" d="M64.3,47.6c0,0,4.9-8.7-2.6-39.1c0,0,2.7,22.7-0.9,33.9c0,0-9,4.1-19.3-8.3C41.5,34.1,51.8,50.4,64.3,47.6z"></path></g><g id="SvgjsG1355" featurekey="Q4qmbg-0" transform="matrix(3.963473269285952,0,0,3.963473269285952,62.03652673071405,-14.719831701352938)" fill="#111111"><path d="M10.38 14.36 l0 5.64 l-2.96 0 l0 -5.64 c0 -1.52 -0.4 -2.16 -1.56 -2.16 c-1.2 0 -1.9 0.64 -1.9 2.16 l0 5.64 l-2.96 0 l0 -14.52 l2.96 0 l0 5.74 c0.38 -1.1 1.82 -1.24 2.68 -1.24 c2.76 0 3.74 1.34 3.74 4.38 z M15.023895833333333 10.12 l0 9.88 l-2.96 0 l0 -9.88 l2.96 0 z M15.103895833333333 7.279999999999999 c0 0.84 -0.68 1.5 -1.58 1.5 c-0.86 0 -1.56 -0.66 -1.56 -1.5 c0 -0.82 0.7 -1.46 1.56 -1.46 c0.9 0 1.58 0.64 1.58 1.46 z M23.247791666666664 10.26 l-0.4 2.22 c-0.74 -0.32 -0.88 -0.26 -1.22 -0.26 c-1.2 0 -1.9 0.64 -1.9 2.22 l0 5.56 l-2.96 0 l0 -9.88 l2.96 0 l0 0.88 c0.38 -0.68 1.42 -1.02 2.08 -1.02 c0.62 0 0.98 0.02 1.44 0.28 z M33.5316875 15.08 l0 0.66 l-7.04 0 c0 1.16 1.18 1.98 2.16 1.98 c0.96 0 1.84 -0.38 2.3 -1.22 l1.98 1.82 c-0.8 1.08 -2.02 1.84 -4.28 1.84 c-3.24 0 -5.22 -2.16 -5.22 -5.08 s1.92 -5.1 5.04 -5.1 s5.06 2.14 5.06 5.1 z M26.551687499999996 13.86 l3.88 0 c-0.16 -0.94 -0.84 -1.44 -1.96 -1.44 c-1.08 0 -1.74 0.58 -1.92 1.44 z M39.99558333333333 9.98 c2.9 0 4.82 2.18 4.82 5.1 s-2.12 5.08 -5.02 5.08 c-0.64 0 -1.72 -0.36 -2.04 -0.82 l0 0.66 l-2.96 0 l0 -14.52 l2.96 0 l0 5.34 c0.34 -0.5 1.62 -0.84 2.24 -0.84 z M39.59558333333333 17.92 c1.24 0 2.26 -1.28 2.26 -2.84 c0 -1.58 -1.02 -2.86 -2.26 -2.86 c-1.36 0 -2.24 1.54 -2.24 2.86 s0.9 2.84 2.24 2.84 z M50.99947916666666 12.42 c-1.22 0 -2.24 1.08 -2.24 2.66 c0 1.56 1.02 2.64 2.24 2.64 c1.24 0 2.26 -1.08 2.26 -2.64 c0 -1.58 -1.02 -2.66 -2.26 -2.66 z M50.99947916666666 9.98 c2.9 0 5.22 2.18 5.22 5.1 s-2.32 5.08 -5.22 5.08 c-2.88 0 -5.2 -2.16 -5.2 -5.08 s2.32 -5.1 5.2 -5.1 z M62.14337499999999 12.42 c-1.22 0 -2.24 1.08 -2.24 2.66 c0 1.56 1.02 2.64 2.24 2.64 c1.24 0 2.26 -1.08 2.26 -2.64 c0 -1.58 -1.02 -2.66 -2.26 -2.66 z M62.14337499999999 9.98 c2.9 0 5.22 2.18 5.22 5.1 s-2.32 5.08 -5.22 5.08 c-2.88 0 -5.2 -2.16 -5.2 -5.08 s2.32 -5.1 5.2 -5.1 z M75.16727083333333 20 l-3.2 -4.06 c-0.08 0.08 -0.22 0.18 -0.34 0.28 l0 3.78 l-2.98 0 l0 -14.52 l2.98 0 l0 7.12 l2.84 -2.48 l4.42 0 l-4.78 4 c1.46 1.8 3.38 4.14 4.78 5.88 l-3.72 0 z"></path></g></svg>

                <Tabs
                    className={classes.navlinks}
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    {
                        navItems.map((el, i) => (
                            <Tab
                                key={i}
                                className={classes.navlink}
                                label={el}
                                onClick={() => console.log(`${el}`)}
                            />
                        )
                        )
                    }
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;

Navbar.defaultProps = {
    navItems: ['login', 'signup']
}

Navbar.propTypes = {
    navItems: PropTypes.array,
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#79d4fd',
        flexGrow: 1
    },
    logo: {
        position: 'absolute',
        left: '10%',
        padding: '0',
        margin: '0'

    },
    navlinks: {
        position: 'absolute',
        right: '10%',
        color: 'black',

    },
    navlink: {
        fontWeight: 900,
    }
}));
