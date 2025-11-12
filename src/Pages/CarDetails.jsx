import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Loader from "../Components/Loader";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);


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
     return toast.warning("Please login to book.")
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
      Swal.fire({
  position: "center",
  icon: "success",
  title: "Your Booking has been done.",
  showConfirmButton: false,
  timer: 1500
});
    } else if (res.status === 409) {
      Swal.fire({
  position: "center",
  icon: "warning",
  title: "You already booked this car.",
  showConfirmButton: false,
  timer: 1500
});
    } else {
      Swal.fire({
  position: "center",
  icon: "error",
  title: "Something is wrong.",
  showConfirmButton: false,
  timer: 1500
});
    }
   } catch(err){
    console.log(err);
   } finally {
    setLoading(false)
   }
  };

  return (
    <div className="w-100 lg:w-[1200px] md:w-[800px] mx-auto my-15">
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="card lg:card-side md:card-side bg-info text-white shadow-sm">
          <figure >
            <img src={car?.coverImage} className="object-cover" alt="car" />
          </figure>
          <div className="card-body max-w-100">
            <div className="flex justify-between items-center gap-8 mb-5">
              {" "}
              <p className="card-title">{car?.pricePerDay} $ </p>
              <h2 className="card-title"> {car?.vehicleName} </h2>
              
              <p className="text-center text-black bg-warning rounded-full px-3 mt-2">{car?.availability}</p>
            </div>
            <div>
              <p> {car?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum reiciendis architecto repellendus minima temporibus dignissimos numquam totam, labore velit qui exercitationem atque eos consequatur dolorem ipsa! Neque provident doloribus, quod, debitis fugit quia quaerat illo labore sed et, nam voluptatem nemo. Doloremque distinctio nostrum, perferendis quam ipsam sit ex, qui beatae assumenda enim reprehenderit natus repellendus. Repellat, voluptatum error? </p>
            </div>

          <div className="flex items-center justify-between mt-10">
              <div className="text-base-300">
              <p>
                {" "}
                <span>Driver:</span > {car?.owner}{" "}
              </p>
              <p>
                {" "}
                <span>Email:</span> {car?.userEmail}{" "}
              </p>
            </div>
            
            <div>
              <button className="btn text-white rounded-3xl btn-primary shadow-md" onClick={handleBook}>
                Book
              </button>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
