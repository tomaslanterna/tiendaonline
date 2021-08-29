import React from 'react';
import CategoryType from './CategoryType';
import SportWear from '../images/SportWear.jpg';
import Tecnology from '../images/TECNOLOGIA.jpg';

function CategorysContainer() {
    return (
        <div>
            <CategoryType img={Tecnology} id={"1"}/>
            <CategoryType img={SportWear} id={"2"}/>
        </div>
    )
}

export default CategorysContainer
