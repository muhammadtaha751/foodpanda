import { useState } from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/FooterOne/Footer"


export default function CartPage() {
  const [showCart, setShowCart] = useState(false)
  const cart = useSelector(state => state.cart)
  const navigate = useNavigate()

  let totalPrice = 0
  cart.map(item => {
    totalPrice += item.price
  })

  const handleCartIconClick = () => {
    navigate('/Cart');
};

  return (
    <div>
  
    </div>
  )
}