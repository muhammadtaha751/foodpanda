import './City.css'
import { useNavigate } from "react-router-dom"
import Abottabad from '../../Asset/Abottabad.jpg'

export default function City(){
    const navigate = useNavigate()
    return(
        <div className="city container">
        <section className="partners cities">
        <div className="max-w-xl">
          <h1 className="backdrop-text">Find us in these cities and many more!</h1>
          <div className="grid container">
            {/* <!-- Row 1 --> */}
            <div onClick={()=>{navigate('/dashboard')}} class="card">
              <img
                src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Karachi.jpg?width=400&height=400"
                alt=""
              />
              <p>Karachi</p>
            </div>

            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Lahore.jpg?width=400&height=400"
                alt=""
              />
              <p>Lahore</p>
            </div>

            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Islamabad.jpg?width=400&height=400"
                alt=""
              />
              <p>Islamabad</p>
            </div>

            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Rawalpindi.jpg?width=400&height=400"
                alt=""
              />
              <p>Rawalpindi</p>
            </div>

            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Faisalabad.jpg?width=400&height=400"
                alt=""
              />
              <p>Faisalabad</p>
            </div>

            {/* <!-- Row 2 --> */}
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Multan.jpg?width=400&height=400"
                alt=""
              />
              <p>Multan</p>
            </div>

            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Hyderabad.jpg?width=400&height=400"
                alt=""
              />
              <p>Hyderabad</p>
            </div>

            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Sialkot.jpg?width=400&height=400"
                alt=""
              />
              <p>Sialkot</p>
            </div>

            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Peshawar.jpg?width=400&height=400"
                alt=""
              />
              <p>Peshawar</p>
            </div>

            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Sukkur.jpg?width=400&height=400"
                alt=""
              />
              <p>Sukkur</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Abottabad.jpg?width=720"
                alt=""
                
              />
              <p>Abbotabad</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-DeraGhaziKhan.jpg?width=720"
                alt=""
              />
              <p>Dera Ghazi Khan</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Bahawalpur.jpg?width=720"
                alt=""
              />
              <p>Bhawalpur</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Gujrat.jpg.jpg?width=720"
                alt=""
              />
              <p>Gujrat</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Mardan.jpg?width=720"
                alt=""
              />
              <p>Mardan</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Jhelum.jpg?width=720"
                alt=""
              />
              <p>Jhelum</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Gujranwala.jpg?width=720"
                alt=""
              />
              <p>Gujranwala</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Larkana.jpg?width=720"
                alt=""
              />
              <p>Larkana</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Okara.jpg?width=720"
                alt=""
              />
              <p>Okara</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Mangla.jpg?width=720"
                alt=""
              />
              <p>Mangla</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Murree.jpg?width=720"
                alt=""
              />
              <p>Murree</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Sheikhupura.jpg.jpg?width=720"
                alt=""
              />
              <p>Sheikhupura</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-Sadiqabad.jpg?width=720"
                alt=""
              />
              <p>Sadiqabad</p>
            </div>
            
            <div class="card">
              <img
                src="https://images.deliveryhero.io/image/fd-pk/city-tile/city-tile-RahimYarKhan.jpg?width=720"
                alt=""
              />
              <p>Rahim Yar Khan</p>
            </div>

          </div>
        </div>
      </section>
        </div>
    )
}