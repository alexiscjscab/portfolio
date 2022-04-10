import React, { useState } from 'react';

import {
  makeStyles,
  AppBar,
  Toolbar,
  List,
  IconButton,
  Drawer,
  Divider,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';

// Iconos
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

// Link react scroll
import { Link } from 'react-scroll';

const items = [
  {
    id: 'about',
    text: 'About Me',
    icon: <InfoTwoToneIcon fontSize='large' />,
  },

  {
    id: 'skills',
    text: 'Skills',
    icon: <EmojiObjectsTwoToneIcon fontSize='large' />,
  },

  {
    id: 'work',
    text: 'My Work',
    icon: <BuildTwoToneIcon fontSize='large' />,
  },

  {
    id: 'contact',
    text: 'Contact',
    icon: <ContactMailTwoToneIcon fontSize='large' />,
  },
];

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [colorChange, setColorChange] = useState(false);

  const changeColorNavBar = () => {
    if(window.scrollY >= 800) setColorChange(true)
    else setColorChange(false)
  }

  window.addEventListener('scroll', changeColorNavBar);

  
  return (
    <AppBar  className={classes.root} style={{backgroundColor: colorChange ? '#000' : 'rgba(230,230,230,0.88)', color: colorChange ? '#fff' : '#000'}}>
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
      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <div className={classes.drawer}>
          <div className={classes.iconButton}>
            <IconButton onClick={() => setOpen(false)}>
              <CancelIcon fontSize='large' className={classes.cancelIcon} />
            </IconButton>
          </div>
          <Divider className={classes.divider} />
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
                  style={{ color: '#fff', position: 'relative', bottom: '4px' }}
                >
                  {icon}
                </ListItemIcon>
                <span>{text}</span>
              </ListItem>
            </Link>
          ))}
        </div>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;

const useStyles = makeStyles((theme) => ({
  root: {    
    fontFamily: "'Josefin Sans', sans-serif",
  },
  toolbar: {
    position: 'sticky',
    top: '0',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '& a': {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      marginLeft: theme.spacing(3),
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
      right: 12,
    },
  },
  drawer: {
    background: '#2082d8',
    height: '130%',
    fontFamily: "'Josefin Sans', sans-serif",
  },
  sidebar: {
    [theme.breakpoints.down('sm')]: {
      width: '40vw',
    },
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
  },
}));
