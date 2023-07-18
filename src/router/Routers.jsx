import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'
import Categorias from '../components/Categorias'
import Home from '../components/home'
import Carrito from '../components/Carrito'

const Routers = () => {
  return (
  
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/productos' element={<ItemListContainer />} />
        <Route path='/categorias/:categoria' element={<Categorias/>} />
        <Route path='/item-detail/:id' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<Carrito />} />
        {<Route path='*' element={<Home />} />} 
      </Routes>
    
  )
}

export default Routers