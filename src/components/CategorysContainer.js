import React from 'react';
import CategoryType from './CategoryType';
import SportWear from '../images/SportWear.jpg';
import Tecnology from '../images/TECNOLOGIA.jpg';
import UrbanWear from '../images/UrbanWear.jpg';

function CategorysContainer() {
    return (
        <div>
            <CategoryType img={Tecnology} id={"1"}/>
            <CategoryType img={SportWear} id={"2"}/>
            <CategoryType img={UrbanWear} id={"3"}/>
        </div>
    )
}

export default CategorysContainer
