import React from 'react';
import { Link } from 'react-router';



const CarCard = ({ car,  showUpdateButton, handleRemove }) => {

  

  return (
    <div className="card hover:bg-accent hover:shadow-info hover:shadow-lg hover:scale-104 transition-transform duration-300 bg-info text-white shadow-md shadow-accent">
   
     <figure className='relative'>
        {
          showUpdateButton &&  <button onClick={handleRemove} className='absolute bg-error btn -top-1 -left-1 text-white font-extrabold shadow-md border-none rounded-full'>X</button>}
            <Link to={`/car-details/${car._id}`} >
    <img
          src={car.coverImage}
          alt="car" className='h-60 w-100 object-cover ' />
    </Link>
      </figure>

      <div className='card-body'>   <div className="flex justify-between items-center ">
        <div className='card-content'> <h2 className="card-title">{car.vehicleName}</h2>
          <p className=' text-center text-black bg-warning rounded-full px-3 mt-2' > {car?.availability} </p>
        </div>

       <div className='space-y-2' >
        <p className='card-title ml-9 ' >{car?.pricePerDay} $</p>
         <Link to={showUpdateButton? `/update-vehicle/${car._id}`:`/car-details/${car._id}`} className="bg-primary shadow-md py-1.5 px-3 text-white font-bold rounded-full"> {showUpdateButton?"Update Details":"View Details"} </Link>
       </div>

      </div></div>
    </div>
  );
}



export default CarCard;
