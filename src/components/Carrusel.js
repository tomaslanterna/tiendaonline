import {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PS5 from '../images/PS5.jpg';
import PS4 from '../images/PS4.jpg';
import PS3 from '../images/PS3.jpg';
import PS2 from '../images/PS2.jpg';
import PS1 from '../images/PS1.jpg';


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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


function Carrusel() {
  const classes = useStyles();
  const [itemData,setItemData]=useState([]);

  useEffect(()=>{

    const task = new Promise((resolve, reject) => {
        /*setLoading(true);*/

        const fetchits={
            data:[
                {title:'Play Station 5',id:5,price:1200,url:PS5},
                {title:'Play Station 4',id:4,price:400,url:PS4},
                {title:'Play Station 3',id:3,price:200,url:PS3},
                {title:'Play Station 2',id:2,price:100,url:PS2},
                {title:'Play Station 1',id:1,price:50,url:PS1},
                {title:'Play Station 5',id:5,price:1200,url:PS5},
                {title:'Play Station 4',id:4,price:400,url:PS4},
                {title:'Play Station 3',id:3,price:200,url:PS3},
                {title:'Play Station 2',id:2,price:100,url:PS2},
                {title:'Play Station 1',id:1,price:50,url:PS1},
                {title:'Play Station 5',id:5,price:1200,url:PS5},
                {title:'Play Station 4',id:4,price:400,url:PS4},
                {title:'Play Station 3',id:3,price:200,url:PS3},
                {title:'Play Station 2',id:2,price:100,url:PS2},
                {title:'Play Station 1',id:1,price:50,url:PS1}
            ],
            status:200
        };
        
        if(fetchits.status==200){
            setTimeout(() => (fetchits), 2000);
            setItemData(fetchits.data);
            resolve(fetchits.data);
        }else{
            reject("No se encontro los productos");
        }
    });
    /*task.then((fetchitsResponse)=>{Esto seria cuando utilicemos el fetch verdadero
        console.log();
        setLoading(false);
        setItems(fetchitsResponse);
    }).catch((error)=>console.log("error",error));*/
},[])

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={3.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Carrusel