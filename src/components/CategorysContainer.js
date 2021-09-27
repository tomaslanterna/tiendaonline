import React from 'react';
import CategoryType from './CategoryType';
import { Grid } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles((theme)=>({
root:{
    justifyContent:'center'
}
}));

const CategorysContainer=()=>{
    const classes=useStyles();
    return (
        <div>
            <Grid container className={classes.root}>
                <Grid xs={8}><CategoryType img={"https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/TECNOLOGIA.jpg?alt=media&token=1a838246-875c-4bfb-8308-511356046e84"} id={"1"}/></Grid>
                <Grid xs={8}><CategoryType img={"https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/SportWear.jpg?alt=media&token=2b0f0782-e229-4560-8746-3f369db36cfa"} id={"2"}/></Grid>
                <Grid xs={8}><CategoryType img={"https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/UrbanWear.jpg?alt=media&token=68ada30b-fd17-4e5f-987a-81ec8d8e6c98"} id={"3"}/></Grid>
            </Grid>
        </div>
    )
}

export default CategorysContainer
