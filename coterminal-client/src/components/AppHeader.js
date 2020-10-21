import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import{Link}from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
    button:{
      
        marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
    
  }));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{background: '#455a64'}} position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            CoTerminal
          </Typography>
          <Button component={Link}to="/SignUp" color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}