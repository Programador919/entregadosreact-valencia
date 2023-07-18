import React from 'react'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({data}) => {

  const navegate = useNavigate()

  const handleAddToCart = (id) => {
    localStorage.setItem(id, id)
    window.dispatchEvent(new Event("storage"))
    navegate('/carrito')
  }



  return (
    <div className='itemDetail-card'>
        <img src={data.img} alt={`imagen de ${data.title}`} />
        <div>
            <div>
                <h2>{data.title}</h2>
                <p>{data.description1}</p>
            </div>
            <div>
                <p>Categoria: {data.category}</p>
                <p>Precio: {data.price} Dolares</p>
                <p>Stock: {data.stock} Botellas</p>
            </div>
            <button onClick={(e) => handleAddToCart(data.id)} >Agregar Al Carrito</button>
        </div>
    </div>
  )
}

export default ItemDetail