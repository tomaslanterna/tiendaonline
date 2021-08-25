import React from 'react'
import { NavLink } from 'react-router-dom'

function CategoryType({SportWear,id}) {
    return (
        <div>
            <p>Categoria para elegir</p>
            <NavLink to={{pathname:"/category/"+id}}><img src={SportWear} alt="Category"/></NavLink>
        </div>
    )
}

export default CategoryType
