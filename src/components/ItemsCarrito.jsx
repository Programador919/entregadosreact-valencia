import React, { useEffect, useState } from 'react'
import ItemCarrito from './ItemCarrito'

const ItemsCarrito = ({ data }) => {
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    const changeCantidad = (id, newCantidad) => {
        setCantidad(newCantidad)
        console.log(newCantidad)
        data.filter((item) => {
            if (item.id == id){
                item.cantidad = newCantidad
                console.log(item)
            }
        })
    }

    useEffect(() => {
        let totArr = data.map((ele) => {
            if (ele.cantidad || ele.cantidad > 1) {
                console.log(ele.cantidad)
                return ele.price * ele.cantidad
            } else if (ele.cantidad == 0) {
                return 0
            } else {
                return ele.price
            }
        })
        let tot = totArr.reduce((a, b) => a + b ,0)
        console.log(tot)
        setTotal(tot)
    }, [data, cantidad])

    return (
        <>
            {data.map((ele) => { 
                return <ItemCarrito key={ele.id} data={ele} changeCantidad={changeCantidad} />
            })}
            <p>${total}</p>
        </>
    )
}

export default ItemsCarrito;