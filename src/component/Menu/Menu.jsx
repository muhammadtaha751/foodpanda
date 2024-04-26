import './Menu.css'
import { useEffect, useState } from 'react'
import { getSingleRestaurant } from '../../config/firebase'
import { useParams } from 'react-router-dom'
import { addCartToStore } from '../../store/cart'
import { useDispatch } from 'react-redux'
    
export default function Menu() {
    const [restroData, setRestroData] = useState()
    const { resdetai_id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await getSingleRestaurant(resdetai_id)
        setRestroData(data)
    }

    if (!restroData) {
        return <div>Loading...</div>
    }

    const { menu } = restroData

    const addToCart = (item) => {
        dispatch(addCartToStore(item))
    }

  return (
    <div className='menu'>
    <h3>Menu</h3>
    <ul>
        {menu.map(item => {
            return <li>{item.item} <button onClick={() => addToCart(item)}>Add to cart</button></li>
        })}
    </ul>
</div>
  );
}