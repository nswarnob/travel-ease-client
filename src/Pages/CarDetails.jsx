import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Loader from "../Components/Loader";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  console.log(user);

  const allData = useLoaderData();

  useEffect(() => {
    setLoading(true);
    if (allData) {
      const foundCar = allData.find((car) => car._id === id);
      setCar(foundCar);
    }
    setLoading(false);
  }, [allData, id, loading]);



  //storing booking data
  const handleBook = async () => {
    if(!user){
     return alert("Plese log in to book a car!")
    }
    setLoading(true);
   try{
     const bookingData = {
      displayName: user?.displayName,
      email: user?.email,
      booking_id: car?._id,
      car_name: car?.vehicleName,
      pricePerDay:car?.pricePerDay,
      booking_date: new Date().toISOString(),
    };
    const res = await axios.post("http://localhost:3000/car-bookings", bookingData);
    if (res.status === 201) {
      alert("✅ Booking successful!");
    } else if (res.status === 409) {
      alert("⚠️ You’ve already booked this car.");
    } else {
      alert(res.data?.message || "Something went wrong. Try again.");
    }
    console.log('booking saved', res.data)
   } catch(err){
    console.log(err);
   } finally {
    setLoading(false)
   }
  };

  return (
    <div className="max-w-[1000px] mx-auto my-15">
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img src={car?.coverImage} alt="Movie" />
          </figure>
          <div className="card-body">
            <div>
              {" "}
              <h2 className="card-title"> {car?.vehicleName} </h2>
              <p>{car?.pricePerDay} $ </p>
              <p>{car?.availability}</p>
            </div>

            <div>
              <p>
                {" "}
                <span>Driver:</span> {car?.owner}{" "}
              </p>
              <p>
                {" "}
                <span>Email:</span> {car?.userEmail}{" "}
              </p>
            </div>
            <p> {car?.description} </p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleBook}>
                Book
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
