import React, { useEffect, useState } from 'react'

const CartWidget = () => {
    const [cartNum, setCartNum] = useState(0)
    
    useEffect(() => {
        window.addEventListener('storage', () => {
            setCartNum(localStorage.length)
        })
    }, [cartNum])


    return (
        <div className='NavBar-CartWidget'>
            <i className="fa-solid fa-cart-shopping" ></i>
            <div>{cartNum}</div>
        </div>
    )
}

export default CartWidget