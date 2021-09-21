import {useEffect,useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Load=({condition})=>{
    return (
        <>
        {condition!==false ? <CircularProgress/> : <h2>No cargado</h2>}
        </>
    );
} 
const Loader=({loading})=>{

    const [load, setLoad] = useState(false)

    useEffect(() => {
        setTimeout(()=>{
            setLoad(true);
        },3000)
    }, [])


    return (
        <div>
            <Load loading={load}/>
        </div>
    )
}

export default Loader
