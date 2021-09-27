import {useEffect,useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root:{
        alignContent:'center',
        margin:250
    }
}));

const Load=({condition})=>{
    return (
        <>
        {condition!==false ? <CircularProgress/> : <h2>No cargado</h2>}
        </>
    );
} 
const Loader=({loading})=>{

    const [load, setLoad] = useState(false);
    const classes=useStyles();

    useEffect(() => {
        setTimeout(()=>{
            setLoad(true);
        },3000)
    }, [])


    return (
        <div className={classes.root}>
            <Load loading={load}/>
        </div>
    )
}

export default Loader
