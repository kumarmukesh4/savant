import React, { ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { RouteComponentProps } from 'react-router-dom';

import './header.scss'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);


interface IProp extends RouteComponentProps {
    children: ReactNode | Element;
}
type Props = IProp & any;

const Header = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Savant
                    </Typography>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Login</Button>
                    <Button className="active" variant="contained" color="primary">
                        SignUp
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;