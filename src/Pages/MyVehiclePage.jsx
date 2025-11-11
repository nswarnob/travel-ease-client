import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import axios from 'axios';
import Loader from '../Components/Loader';
import CarCard from '../Components/CarCard';

const MyVehiclePage = () => {
const {user} = useContext(AuthContext);
  const [myVehicles, setMyVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    const fetchData = async () => {
      console.log("Sending request for email:", user.email);

      if (!user?.email) return;
      try {
        const res = await axios.get(`http://localhost:3000/my-vehicles?email=${user.email}`)
        setMyVehicles(res.data);
      }
      catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [user]);

console.log(myVehicles)

  return (
    <div>
       <h1 className='text-center'>My Vehicles</h1>

        {
          loading?<Loader></Loader> : <div className='grid grid-cols-3 gap-4'>
            {
              myVehicles.map(car=> <CarCard key={car._id} car={car}  showUpdateButton={true} >  </CarCard> )
            }
          </div>
        }

    </div>
  )
}

export default MyVehiclePage