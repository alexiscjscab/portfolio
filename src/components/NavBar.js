import React, { useState } from 'react';

import {
  makeStyles,
  AppBar,
  Toolbar,
  List,
  IconButton,
  Drawer,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';

// Iconos
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

// Link react scroll
import { Link } from 'react-scroll';
import { items } from '../array';

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [heightChange, setHeightChange] = useState(false);

  const changeColorNavBar = () => {
    if (window.scrollY >= 400) setHeightChange(true);
    else setHeightChange(false);
  };

  window.addEventListener('scroll', changeColorNavBar);

  return (
    <AppBar
      className={classes.root}
      style={{
        height: heightChange ? '60px' : '72px',
        background: 'rgba(0,0,0,0.9)'
      }}
    >
      <Toolbar className={classes.toolbar}>
        <List className={classes.menu}>
          {items.map(({ id, text }, i) => (
            <Link
              key={i}
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass='active'
            >
              {text}
            </Link>
          ))}
        </List>

        <IconButton
          edge='end'
          className={classes.menuButton}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon fontSize='large' />
        </IconButton>
      </Toolbar>
      {/* Menu despleglable */}
      <Drawer anchor='right' open={open} onClose={() => setOpen(false)} >
        <div className={classes.drawer}>
          <div className={classes.iconButton}>
            <IconButton onClick={() => setOpen(false)}>
              <CancelIcon fontSize='large' className={classes.cancelIcon} />
            </IconButton>
          </div>
          <div className={classes.background}>
            {items.map(({ id, text, icon }, i) => (
              <Link
                key={i}
                to={id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass='active'
                className={classes.sidebar}
              >
                <ListItem component='h5'>
                  <ListItemIcon
                    style={{
                      color: '#fff',
                      position: 'relative',
                      bottom: '4px',
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <span>{text}</span>
                </ListItem>
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Josefin Sans', sans-serif",
    position: 'sticky',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '& a': {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      '&:hover': {
        cursor: 'pointer',
        color: '#2082d8',
        borderBottom: '3px solid #2082d8',
      },
    },
  },
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      color: '#2082d8',
      position: 'absolute',
      top: 0,
      right: 10
    },
  },
  drawer: {
    fontFamily: "'Josefin Sans', sans-serif",
    background: '#2082d8',
    position: 'relative',
    minHeight: '100%'
  },
  background: {
    // minHeight: '100vh',
  },
  sidebar: {
    '& h5': {
      margin: theme.spacing(8, 0, 0, 0),
      fontSize: '1.4rem',
      fontWeight: 'bold',
      transition: theme.transitions.create(['all'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      '&:hover': {
        cursor: 'pointer',
        '& span': {
          borderBottom: '3px solid #000',
        },
      },
    },
  },
  cancelIcon: {
    color: '#fff',
    '&:hover': {
      color: '#000',
    },
  },
  iconButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    background: 'rgba(230,230,230,0.1)',
  },
}));
