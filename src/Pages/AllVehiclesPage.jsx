import React from 'react'
import { useLoaderData } from 'react-router'
import CarCard from '../Components/CarCard';

const AllVehiclesPage = () => {
const allData = useLoaderData();


  return (
  <div className='my-10 max-w-100 md:max-w-4xl mx-auto'>
        <h1 className='font-bold text-3xl text-secondary-content text-center mb-15' >All Vehicles</h1>
        <div className='grid md:grid-cols-3 gap-5'>
          {
            allData.map(car => <CarCard key={car._id} car={car}  ></CarCard>)
          }
        </div>
      </div>
  )
}

export default AllVehiclesPage