import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    cover: {
        fontSize: 100,
        fontFamily: 'Stick No Bills',
        justifyContent: 'center',
        padding:100
    }
}));

const NotFound = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.cover}>
            <div>
                <p>404</p>
                <p>Page Not Found</p>
            </div>
        </Grid>
    )
}

export default NotFound
