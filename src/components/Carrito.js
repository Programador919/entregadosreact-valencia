import React, { useEffect, useState } from 'react'
import ItemsCarrito from './ItemsCarrito';

const Carrito = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    const handleOnComprar = () => {
        localStorage.clear()
        window.location.reload()
    }

    var cartItems = []
    Object.keys(localStorage).forEach(function(key){
        let a = key
        cartItems.push(a)
    });

    const getData = async () => {
        try {
            const data = await fetch("/db.json");
            const res = await data.json();
            setData(res);
            setLoader(false);
            return res;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    let item = []
    const items = () => {
        for (let i = 0; i< localStorage.length; i++) {
            item.push(data.find((ele) => ele.id == cartItems[i]))
        }
    }
    items()

    return (
        <div className='Categorias'>
        {loader ? "cargando" : <ItemsCarrito data={item} />}
        <button onClick={() => handleOnComprar()} >Comprar</button>
        </div>
    )
}

export default Carrito
