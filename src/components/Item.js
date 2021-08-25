import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PS5 from '../images/PS5.jpg';
import ItemCount from './ItemCount';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: 900,
    height:150
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

function Item({ item }) {
  const classes = useStyles();
  

  return (

    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Precio : {item.price}
          </Typography>
        {/*<ItemCount stock="4" initial="2"/>*/}
        </CardContent>
        <CardMedia
        className={classes.cover}
        image={item.url}
        title="Product"/>
      </div>
      

    </Card>

  );
}

export default Item
