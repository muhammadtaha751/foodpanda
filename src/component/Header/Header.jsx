import './Header.css'
import Input from '../InputSection/Input'

export default function Header(){
    return(
        <div className="header">
        <div className="header_one">
            <h1>It's the food and groceries you love,<br /> delivered</h1>
            <Input />
        </div>
        <div className="header_img">
            <img src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-pk.png?width=1264" />
        </div>
     </div>
    )
}