import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';
import Loader from '../Components/Loader';

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

    <div>
      {
        !bookings.length ? <p>No bookings found.</p> : (<div>
          {
            loading ? <Loader></Loader> : <div className="max-w-3xl mx-auto mt-8">
              <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
              <div className="grid gap-4">
                {bookings.map((b) => (
                  <div key={b._id} className="p-4 border rounded-lg shadow">
                    <h3 className="font-semibold text-lg">{b.car_name}</h3>
                    <p>Booking Date: {new Date(b.booking_date).toLocaleString()}</p>
                    <p>Price: ${b.price || "N/A"}</p>
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