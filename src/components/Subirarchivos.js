import { Button } from '@material-ui/core'
import React from 'react';
import { collection, addDoc, Timestamp, getDocs, query } from "firebase/firestore";
import { getData } from '../firebase';


const Subirarchivos = () => {
    const db = getData();

    const productos = [
        { title: 'Play Station 5', price: 1200, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 4 },
        { title: 'Play Station 4', price: 400, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1" , stock: 6},
        { title: 'Play Station 3', price: 200, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 7 },
        { title: 'Play Station 2', price: 100, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 9 },
        { title: 'Play Station 1', price: 50, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 10 },
        { title: 'Notebook hp', price: 1200, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 12 },
        { title: 'Notebook Acer', price: 400, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "1", stock: 5 },
        { title: 'Notebook ASUS', price: 200, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 6 },
        { title: 'Notebook Toshiba', price: 100, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 8 },
        { title: 'Teclado Dell', price: 50, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 3 },
        { title: 'Mouse Logitech', price: 1200, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 10 },
        { title: 'Auriculares JBL', price: 400, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 3 },
        { title: 'AirPods', price: 200, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 2 },
        { title: 'Macbook Pro', price: 100, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 1 },
        { title: 'Xbox ONE', price: 50, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k.", categoryId: "1", stock: 3 },
        { title: 'Camiseta MJ Chicago BULLS', price: 1200, imgUrl: "", details: "Camiseta NBA increible para jugar 3x3 o picados de basketball.", categoryId: "2", stock: 4 },
        { title: 'Camiseta MG San Antonio SPURS', price: 400, imgUrl: "", details: "Camiseta NBA increible para jugar 3x3 o picados de basketball.", categoryId: "2", stock: 6 },
        { title: 'Camiseta Messi PSG', price: 200, imgUrl: "", details: "Camiseta de D30S para convertirte en los futbol 5.", categoryId: "2", stock: 8 },
        { title: 'Camiseta CR7 JUVE', price: 100, imgUrl: "", details: "Camiseta de el Bicho CR7 para convertirte en los futbol 5.", categoryId: "2", stock: 10 },
        { title: 'Camiseta Nacional MI71CA GANADORA', price: 50, imgUrl: "", details: "Camiseta del Bolso en conmemoracion a la libertadores y mundial de clubes de 1971.", categoryId: "2", stock: 4 },
        { title: 'Camiseta Arg ADIDAS', price: 1200, imgUrl: "", details: "Camiseta de Argentina version Scaloneta vos te subis? Llevate esta increible casaca.", categoryId: "2", stock: 2 },
        { title: 'Camiseta Uy PUMA', price: 400, imgUrl: "", details: "Camiseta de la Celeste.", categoryId: "2", stock: 1 },
        { title: 'Zapatillas Nike Air', price: 200, imgUrl: "", details: "Zapatillas para jugar al basketball", categoryId: "2", stock: 9 },
        { title: 'Zapatillas Nike TIEMPO', price: 100, imgUrl: "", details: "Zapatillas para romperla en los futbol 11", categoryId: "2", stock: 4 },
        { title: 'Short dry fit', price: 50, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "2", stock: 5 },
        { title: 'Camiseta deportiva', price: 1200, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "2", stock: 9 },
        { title: 'Camiseta color negro', price: 1200, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "3", stock: 2 },
        { title: 'Pantalon Jean negro', price: 400, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "3", stock: 4 },
        { title: 'Zapatillas skate Nike', price: 200, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "3", stock: 2 },
        { title: 'Gorro Snapback Nike', price: 100, imgUrl: "", details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k", categoryId: "3", stock: 6 }
    ];

    const handleClick = () => {
        const productsCollection = collection(db, 'products');
        try {
            productos.forEach(element => {
                const productRef = addDoc(productsCollection, element);
            });
            return alert("Carga finalizada");
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <Button onClick={handleClick}>Cargar productos</Button>
        </div>
    )
}

export default Subirarchivos
