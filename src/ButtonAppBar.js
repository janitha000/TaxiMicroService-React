import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
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

const ButtonAppBar = ({ props }) => {
    return <Appbar />
}

const Appbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>App</Typography>
                    <Router>
                        <Route path="/" render={(props) => <LoginButton {...props} title="Login"/>} />
                        <Button color="inherit">Signup</Button>
                    </Router>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const LoginButton = ({ title, history }) => (
    <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
)





export default ButtonAppBar;

