import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';
import Loader from '../Components/Loader';
import ErrorPage from './ErrorPage';

const MyBookingPage = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) return;
      try {
        const res = await axios.get(`http://localhost:3000/car-bookings?email=${user.email}`)
        setBookings(res.data);
      }
      catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [user]);





  return (

    <div className='max-w-100 md:max-w-3xl lg:max-w-6xl mx-auto' >
      {
        !bookings.length ? <ErrorPage></ErrorPage> : (<div>
          {
            loading ? <Loader></Loader> : <div className="max-w-3xl mx-auto my-10">
             <div className='flex text-secondary-content justify-between items-center ' >
               <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
              <p> <strong>Total:</strong> {bookings.length}</p>
             </div>
              <div className="grid gap-4 text-primary-content">
                {bookings.map((b) => (
                  <div key={b._id} className=" bg-info flex justify-between items-center p-4  rounded-lg shadow-md shadow-primary">
                    <div><h3 className="font-semibold text-lg">{b.car_name}</h3>
                    <p>Booking Date: {new Date(b.booking_date).toLocaleString()}</p>
                    <p>Price: ${b.pricePerDay || "N/A"}</p></div>
                    <div>
                      <button className='btn bg-primary text-white font-extrabold shadow-md border-none rounded-full'>X</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }

        </div>

        )}
    </div >

  )
}

export default MyBookingPage