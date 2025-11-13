import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';
import Loader from '../Components/Loader';
import ErrorPage from './ErrorPage';
import ScaleUp from '../Animations/ScaleUp';
import Swal from 'sweetalert2';

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


  const handleRemoveBooking = async (bookingId)=>{
      
   const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
     if (!result.isConfirmed) return;

    try{
       axios.delete(`http://localhost:3000/car-bookings/${bookingId}`);

       const removed= bookings.filter(booking => booking._id !== bookingId);
       setBookings(removed);
       Swal.fire({
             title: "Deleted!",
             text: "Your file has been deleted.",
             icon: "success"
           });


    }catch(err){
       console.log(err)
   Swal.fire({
           position: "center",
           icon: "error",
           title: `Vehicle deleted Failed. Because of ${err}`,
           showConfirmButton: false,
           timer: 1500,
         });
    }
 

  }




  return (

    <div className='max-w-100 md:max-w-3xl lg:max-w-6xl mx-auto' >
      {
        !bookings.length ? <ErrorPage></ErrorPage> : (<div>
          {
            loading ? <Loader></Loader> : <div className="max-w-3xl mx-auto my-10">
             <div className='flex text-base-content justify-between items-center ' >
               <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
              <p> <strong>Total:</strong> {bookings.length}</p>
             </div>
              <div className="grid gap-4 text-primary-content">
                {bookings.map((b) => (
                  <ScaleUp><div key={b._id} className="hover:bg-accent transition-transform duration-300 hover:scale-105 hover:shadow-primary hover:shadow-lg bg-info flex justify-between items-center p-4  rounded-lg shadow-sm shadow-primary">
                    <div><h3 className="font-semibold text-lg">{b.car_name}</h3>
                    <p>Booking Date: {new Date(b.booking_date).toLocaleString()}</p>
                    <p>Price: ${b.pricePerDay || "N/A"}</p></div>
                    <div>
                      <button onClick={()=>handleRemoveBooking(b._id)} className='btn bg-primary hover:bg-info text-white font-extrabold shadow-sm hover:scale-104 hover:shadow-lg hover:shadow-primary border-none rounded-full'>X</button>
                    </div>
                  </div></ScaleUp>
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