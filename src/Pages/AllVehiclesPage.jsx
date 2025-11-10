import React from 'react'
import { useLoaderData } from 'react-router'
import CarCard from '../Components/CarCard';

const AllVehiclesPage = () => {
const allData = useLoaderData();


  return (
  <div className='mt-10 w-[1200px] mx-auto'>
        <h1 className='font-bold text-3xl text-center mb-15' >All Vehicles</h1>
        <div className='flex flex-wrap gap-3 '>
          {
            allData.map(car => <CarCard key={car._id} car={car}  ></CarCard>)
          }
        </div>
      </div>
  )
}

export default AllVehiclesPage