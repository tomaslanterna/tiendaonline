import PS5 from './images/PS5.jpg';
import PS4 from './images/PS4.jpg';
import PS3 from './images/PS3.jpg';
import PS2 from './images/PS2.jpg';
import PS1 from './images/PS1.jpg';
import MJ23 from './images/MJ23.jpg';
import MG20 from './images/MG20.jpg';
import MessiPSG from './images/MessiPSG.jpg';
import CR7Juve from './images/CR7Juve.jpg';
import NAC from './images/NACIONAL.jpg';
import ARG from './images/ARG.jpg';
import UY from './images/UY.jpg';
import DRIFIT from './images/DRIFIT.jpg';
import TIEMPONIKE from './images/TIEMPONIKE.jpg';
import NIKEDEPOR from './images/NIKEDEPOR.jpg';
import NIKEAIR from './images/NIKEAIR.jpg';


const productosJson =
{
    categorias: [

        {
            productos: [
                { title: 'Play Station 5', id: "5", price: 1200, url: PS5, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Play Station 4', id: "4", price: 400, url: PS4, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Play Station 3', id: "3", price: 200, url: PS3, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Play Station 2', id: "2", price: 100, url: PS2, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Play Station 1', id: "1", price: 50, url: PS1, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Notebook hp', id: "6", price: 1200, url: PS5, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Notebook Acer', id: "7", price: 400, url: PS4, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Notebook ASUS', id: "8", price: 200, url: PS3, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Notebook Toshiba', id: "9", price: 100, url: PS2, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Teclado Dell', id: "10", price: 50, url: PS1, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Mouse Logitech', id: "11", price: 1200, url: PS5, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Auriculares JBL', id: "12", price: 400, url: PS4, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'AirPods', id: "13", price: 200, url: PS3, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Macbook Pro', id: "14", price: 100, url: PS2, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"},
                { title: 'Xbox ONE', id: "15", price: 50, url: PS1, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"1"}
            ],
            id: "1"
        },
        {
            productos: [
                { title: 'Camiseta MJ Chicago BULLS', id: "1", price: 1200, url: MJ23, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"2"},
                { title: 'Camiseta MG San Antonio SPURS', id: "2", price: 400, url: MG20, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"2"},
                { title: 'Camiseta Messi PSG', id: "3", price: 200, url: MessiPSG, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"2"},
                { title: 'Camiseta CR7 JUVE', id: "4", price: 100, url: CR7Juve, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"2"},
                { title: 'Camiseta Nacional MI71CA GANADORA', id: "5", price: 50, url: NAC, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"2"},
                { title: 'Camiseta Arg ADIDAS', id: "6", price: 1200, url: ARG, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"2"},
                { title: 'Camiseta Uy PUMA', id: "7", price: 400, url: UY, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"2"},
                { title: 'Zapatillas Nike Air', id: "8", price: 200, url: NIKEAIR, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"2"},
                { title: 'Zapatillas Nike TIEMPO', id: "9", price: 100, url: TIEMPONIKE, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"2"},
                { title: 'Short dry fit', id: "10", price: 50, url: DRIFIT, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"2"},
                { title: 'Camiseta deportiva', id: "11", price: 1200, url: NIKEDEPOR, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k",categoryId:"2"}
            ],
            id: "2"
        },
        {
            productos: [
                { title: 'Camiseta color negro', id: "1", price: 1200, url: PS5, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k" },
                { title: 'Pantalon Jean negro', id: "2", price: 400, url: PS4, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k" },
                { title: 'Zapatillas skate Nike', id: "3", price: 200, url: PS3, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k" },
                { title: 'Gorro Snapback Nike', id: "4", price: 100, url: PS2, details: "Increible Video consola para jugar con la banda unos fifas y unas nba 2k" }

            ],
            id: "3"
        },

    ]

}

export default productosJson