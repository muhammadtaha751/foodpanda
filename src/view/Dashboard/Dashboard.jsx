import Navbar from "../../component/Navbar/Navbar"
import Dashboard_text from "../../component/DashboardText/Dashboard_text"
import Restaurant from '../../component/Restaurant/Restaurant'
import Footer from "../../component/FooterOne/Footer"
import Footer_two from "../../component/FooterTwo/Footer_two"
import Footer_three from "../../component/FooterThree/Footer_three"
import Banner from '../../component/Banner/Banner'
import Cart from '../../view/Cart/CartPage'

export default function Dashboard() {
    return (
        <div className="landing">
            <Navbar />
            <Cart/>
            <Banner />
            <Restaurant />
            <Dashboard_text />
            <Footer />
            <Footer_two />
            <Footer_three />
        </div>
    )
}