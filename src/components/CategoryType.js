import React from 'react'
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';



const CategoryType = ({ img, id }) => {
    const useStyles = makeStyles((theme) => ({

        root: {
            marginTop: 10
        },
        fondo:{
            backgroundImage: `url(${img})`,
            backgroundSize:'cover',
            backgroundPositionY:'center',
            borderRadius: 50,
            width:'100%',
            height:300,
            marginTop: 10
        }


    }));

    const classes = useStyles();
    return (
        <NavLink to={{ pathname: "/category/" + id }}>
            <div className={classes.fondo}>
            </div>
            {/*<img src={img} alt="Category" className={classes.root} width={800} height={350} />*/}
        </NavLink>
    )
}

export default CategoryType
