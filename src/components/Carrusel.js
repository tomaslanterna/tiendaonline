import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',

    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  stockTitle:{
    fontFamily:'Stick No Bills',
  }
}));


const Carrusel=({ itemData })=>{
  const classes = useStyles();
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
    <h2 className={classes.stockTitle}>Ultimos Stocks</h2>
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={3.5}>
        {(itemData === null || itemData.length === 0) ?
          <Loader condition={loading} />
          :
          itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.imgUrl} alt={item.title} />
              <NavLink to={{ pathname: "/item-details/" + item.id }}>
                <ImageListItemBar
                  title={item.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  actionIcon={
                    <IconButton aria-label={`star ${item.title}`} />
                  }
                />
              </NavLink>
            </ImageListItem>
          ))}
      </ImageList>
    </div>
    </>
  );
}

export default Carrusel