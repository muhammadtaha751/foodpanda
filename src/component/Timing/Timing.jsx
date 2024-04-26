import './Timing.css'
import { useEffect, useState } from 'react'
import { getSingleRestaurant } from '../../config/firebase'
import { useParams } from 'react-router-dom'

export default function Timing() {
    const { resdetai_id } = useParams()
    const [restroData, setRestroData] = useState()

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
    const { opening_hours, restaurant_name,  } = restroData
    const open_hrs = []

    for (let key in opening_hours) {
        open_hrs.push(`${key}: ${opening_hours[key]}`)
    }
    return (
        <div className='timing'>
        <h3>Timings</h3>
        {open_hrs.map(item => <p>{item}</p>)}
    </div>
    );
  }