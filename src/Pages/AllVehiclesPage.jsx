import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import CarCard from '../Components/CarCard';

const AllVehiclesPage = () => {
  const allData = useLoaderData();
  const [sortOrder, setSortOrder] = useState('none');
  const [loading, setLoading] = useState(true)

  console.log(allData)

  const sortedVehicles = () => {
    if (sortOrder === 'none'){
    return allData;
    }
     const sorted = [...allData];

    if (sortOrder === 'price-asc'){
      return sorted.sort((a,b)=> a.pricePerDay - b.pricePerDay);
    } if (sortOrder === 'price-desc'){
      return sorted.sort((a,b)=> b.pricePerDay-a.pricePerDay)
    } if(sortOrder === 'default'){
      return sorted.filter(car=>car.availability === 'Available')
    }
    setLoading(false)
  }

   const handleSortChange = (e)=>{
    setSortOrder(e.target.value);
   }

  return (
    <div className='my-10 max-w-100 md:max-w-4xl lg:max-w-6xl mx-auto'>
      <h1 className='font-bold text-3xl text-secondary-content text-center mb-15' >All Vehicles</h1>
      <div className='flex items-center justify-between px-2 mb-4' >
        <h3 >{allData.length} Vehicles</h3>
        <div className="filter">
          <input className="btn filter-reset" onChange={handleSortChange} checked={sortOrder === 'none'} type="radio" name="metaframeworks" value={'none'} aria-label="All" />
          <input className="btn" type="radio" onChange={handleSortChange} checked={sortOrder === 'price-asc'} name="metaframeworks" value={'price-asc'} aria-label="Lowest $" />
          <input className="btn" type="radio" onChange={handleSortChange} checked={sortOrder === 'price-desc'} name="metaframeworks" value={'price-desc'} aria-label="Highest $" />
          <input className="btn" type="radio" onChange={handleSortChange} checked={sortOrder === 'default'} name="metaframeworks" value={'default'} aria-label="Free" />
        </div>
      </div>
    {
      loading?<Loader></Loader> :   <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          sortedVehicles().map(car => <CarCard key={car._id} car={car}  ></CarCard>)
        }
      </div>
    }
    </div>
  )
}

export default AllVehiclesPage