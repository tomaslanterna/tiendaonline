import {useEffect,useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function Load({condition}){
    return (
        <>
        {condition!==false ? <CircularProgress/> : <h2>No cargado</h2>}
        </>
    );
} 
function Loader({loading}) {

    const [load, setLoad] = useState(initialState)

    useEffect(() => {
        setTimeout(()=>{
            setLoad(false);
        },3000)
    }, [])


    return (
        <div>
            <Load loading={load}/>
        </div>
    )
}

export default Loader
