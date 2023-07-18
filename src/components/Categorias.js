import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const Categorias = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    const itemParam = useParams();

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
    const item = data.filter((ele) => ele.category == itemParam.categoria);

    return (
        <div className='Categorias'>
        {loader ? "cargando" : <ItemList data={item} />}
        </div>
    )
}

export default Categorias

