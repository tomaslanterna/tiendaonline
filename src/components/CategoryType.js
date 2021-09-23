import React from 'react'
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {

        borderRadius:80,
        marginTop:10

    }


}));

const CategoryType=({ img, id })=>{
    const classes = useStyles();
    return (
        <div>
            <NavLink to={{ pathname: "/category/" + id }}>         
                <img src={img} alt="Category" className={classes.root} width={800} height={350}/>                
            </NavLink>
        </div>
    )
}

export default CategoryType
