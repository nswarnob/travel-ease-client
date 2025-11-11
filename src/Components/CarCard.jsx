import React from 'react';
import { Link } from 'react-router';



const CarCard = ({ car,  showUpdateButton }) => {

  
  console.log(car)
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={car.coverImage}
          alt="car" className='h-60 w-80 object-cover' />
      </figure>
      <div className='card-body'>   <div className="flex justify-between items-center">
        <div className='card-content'>  <h2 className="card-title">{car.vehicleName}</h2>
          <p className=' text-center bg-warning rounded-full' > {car?.availability} </p>
        </div>

        <Link to={showUpdateButton? `/update-vehicle/${car._id}`:`/car-details/${car._id}`} className="btn btn-primary rounded-full"> {showUpdateButton?"Update Details":"View Details"} </Link>

      </div></div>
    </div>
  );
}



export default CarCard;
