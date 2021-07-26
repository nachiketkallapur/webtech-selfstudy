import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography style={{cursor:"pointer"}} variant="h6" className={classes.title} onClick={() => props.history.push('/')}>
            WebTech Self Study
          </Typography>
          <Button color="inherit" onClick={()=>props.history.push('/settings')}>Settings</Button>
          <Button color="inherit" onClick={()=>props.history.push('/socialdistance')}>Social Distance Monitoring</Button>
          <Button color="inherit" onClick={()=>window.location.href='https://nachiketkallapur.github.io/covid-19-india-tracker/'}>COVID-19 Tracker</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
