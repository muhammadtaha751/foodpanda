import Navbar from "../../component/Navbar/Navbar"
import Header from "../../component/Header/Header"
import TextSection from "../../component/TextSection/TextSection"
import Footer from "../../component/FooterOne/Footer"
import Footer_three from "../../component/FooterThree/Footer_three"
import SectionOne from "../../component/ContentSection/SectionOne"
import City from "../../component/City/City"

export default function LandingPage() {
 
  return (
    <div className="landing">
      <Navbar />
      <Header />
      <SectionOne />
      <City />
      <TextSection />
      <Footer />
      <Footer_three />
    </div>

  )
}