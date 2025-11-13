import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import Loader from "../Components/Loader";
import CarCard from "../Components/CarCard";
import Swal from "sweetalert2";
import ScaleUp from "../Animations/ScaleUp";

const MyVehiclePage = () => {
  const { user } = useContext(AuthContext);
  const [myVehicles, setMyVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) return;
      setLoading(true)
      try {
        const res = await axios.get(
          `http://localhost:3000/my-vehicles?email=${user.email}`
        );
        setMyVehicles(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  //remove vehicle
  const handleRemove = async (id) => {
    
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

    try {
      const res = await axios.delete(
        `http://localhost:3000/all-vehicles/${id}`
      );
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Vehicle deleted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setMyVehicles((prev) => prev.filter((v) => v._id !== id));
      }
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Vehicle deleted Failed. Because of ${err}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  return (
    <div className="my-10 max-w-100 md:max-w-4xl mx-auto">
      <h1 className="text-center text-3xl font-bold mb-10 text-base-content ">
        My Vehicles
      </h1>

      {loading ? (
        <Loader></Loader>
      ) : (
        <div> {
          myVehicles.length===0 ? <div className="flex justify-center items-center"> <span className="skeleton skeleton-text">Its looks like you didn't add any vehicles, please aff first to see here your vehicle lists...</span></div> : <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
            {myVehicles.map((car) => (
             <ScaleUp><CarCard
                key={car._id}
                car={car}
                handleRemove={() => handleRemove(car._id)}
                showUpdateButton={true}
              >
                {" "}
              </CarCard></ScaleUp>
            ))}
          </div> } </div>
      )}
    </div>
  );
};

export default MyVehiclePage;
