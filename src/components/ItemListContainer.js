import { Divider, List, ListItem } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from './ItemList';
import Carrusel from './Carrusel';

function ItemListContainer({itemData}) {

    
    return (
            <ItemList Items={itemData}/> 
    )
}

export default ItemListContainer
