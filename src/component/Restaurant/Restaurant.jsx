import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getRestaurants } from '../../config/firebase'
import './Restaurant.css'
import ResCards from '../RestaurantCard/ResCards'

export default function Restaurant() {
    const [restroData, setRestroData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const data = await getRestaurants()
        console.log('data -->', data)
        setRestroData(data)
    }

    if (!restroData) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div className='container'>
            <h1>All Restaurants</h1>
            <div className='restaurant '>
                {restroData.map(item => {
                    { console.log('item..', item) }

                    return <ResCards data={item} image={item.image_url} onClick={() => navigate(`/resdetail/${item.id}`)} />
                })}
            </div>
        </div>
    )
}