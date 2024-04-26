import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getSingleRestaurant } from '../../config/firebase'

import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/FooterOne/Footer'
import Menu from '../../component/Menu/Menu'
import Timing from '../../component/Timing/Timing'
import Cart from '../../view/Cart/CartPage'

function ResDetail() {
    const { resdetai_id } = useParams()
    const [restroData, setRestroData] = useState()
    const navigate = useNavigate()

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

    const { restaurant_name, } = restroData

    function home() {
        navigate('/LandingPage')
    }

    return (
        <div>
            <Navbar />
            <Cart/>
            <div>
                <div className="adBar">
                    <a href="#">
                        <p onClick={home}>Homepage</p>
                    </a>
                </div>
                <div className='heading'>
                    <h1>{restaurant_name}</h1>
                </div>
            </div>
            <Menu />
            <Timing />
            <Footer />
        </div>
    )
}

export default ResDetail