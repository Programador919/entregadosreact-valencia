import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ItemCarrito = ({ data, changeCantidad }) => {

    const [count, setCount] = useState(1)
    const [total, setTotal] = useState(data.price)

    const handleSumar = () => {
        if (count < data.stock){
            setCount(count + 1)
        } else {
            setCount(count)
        }
    }

    const handleRestar = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(count)
        }
    }
    
    const navegate = useNavigate();

    const handleClick = (id) => {
        navegate(`/item-detail/${id}`);
    }

    useEffect(() => {
        setTotal(data.price * count)
        changeCantidad(data.id, count)
    }, [count, data, total, changeCantidad])


    return (
        <div className='card'>
            <img src={data.img} alt={`imagen del producto ${data.title}`} />
            <div className='card-text'>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
            <div className='card-price'>
                <p>${data.price * count}</p>
                <button onClick={handleSumar}>+</button>
                <p>{count}</p>
                <button onClick={handleRestar}>-</button>
            </div>

            <div className='card-cart'>
                <button onClick={() => handleClick(data.id)}>Ver detalles</button>
                
            </div>
        </div>
    )
}

export default ItemCarrito