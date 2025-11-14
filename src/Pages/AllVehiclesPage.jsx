import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CarCard from "../Components/CarCard";
import Loader from "../Components/Loader";
import ScaleUp from "../Animations/ScaleUp";

const AllVehiclesPage = () => {
  const allData = useLoaderData();
  const [sortOrder, setSortOrder] = useState("none");
  const [loading, setLoading] = useState(false);
   const [search, setSearch] = useState("");



   if (!allData) {
    return <Loader></Loader>;
  }


 
 

  const displayVehicles = () => {

    const term = search.trim().toLowerCase();
  const flexData = term
    ? allData.filter((car) => car?.vehicleName.toLowerCase().includes(term))
    : allData;



      //sorting
    if (sortOrder === "none") {
      return allData;
    }

    const sorted = [...flexData ];
    if (sortOrder === "price-asc") {
      return sorted.sort((a, b) => a.pricePerDay - b.pricePerDay);
    }
    if (sortOrder === "price-desc") {
      return sorted.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }
    if (sortOrder === "default") {
      return sorted.filter((car) => car.availability === "Available");
    }
  };

  const handleSortChange = (e) => {
    setLoading(true);
    setSortOrder(e.target.value);

    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  const handleSearchChange = (e)=>{
    setLoading(true);
    setSearch(e.target.value)

      setTimeout(() => {
      setLoading(false);
    }, 400);
  }

  const finalData = displayVehicles();

  return (
    <div className="my-10 max-w-100 md:max-w-3xl lg:max-w-6xl mx-auto">
      <div className="text-base-content text-center mb-15 space-y-3">
        <h1 className="font-bold text-3xl">
          All Vehicles
        </h1>
        <p className="text-base-content/80 lg:px-50 px-0 md:px-50">We are the best vehicle service in this world. Keep trusting on us, we will make your life more easier than you think. Travel anywhere you want with full of relax and ease.</p>
      </div>

      <div className="flex items-center justify-between px-2 mb-4">
        <h3 className="font-semibold">({finalData.length}) Vehicles</h3>
        <div>
          <label className="input bg-base-300 rounded-full w-60 focus:outline-0 border-none outline-none ">
            <input
              onChange={handleSearchChange}
              type="search"
              value={search}
              required
              placeholder="Search Your Vehicle"
              className="focus:outline-none placeholder:text-center"
            />
          </label>
        </div>
        <div className="filter">
          <input
            className="btn bg-base-300 rounded-full filter-reset"
            onChange={handleSortChange}
            checked={sortOrder === "none"}
            type="radio"
            name="metaframeworks"
            value={"none"}
            aria-label="All"

          />
          <input
            className="btn bg-base-300 rounded-full"
            type="radio"
            onChange={handleSortChange}
            checked={sortOrder === "price-asc"}
            name="metaframeworks"
            value={"price-asc"}
            aria-label="Lowest $"
          />
          <input
            className="btn bg-base-300 rounded-full"
            type="radio"
            onChange={handleSortChange}
            checked={sortOrder === "price-desc"}
            name="metaframeworks"
            value={"price-desc"}
            aria-label="Highest $"
          />
          <input
            className="btn bg-base-300 rounded-full"
            type="radio"
            onChange={handleSortChange}
            checked={sortOrder === "default"}
            name="metaframeworks"
            value={"default"}
            aria-label="Free"
          />
        </div>
      </div>
      <hr className="text-base-300 my-3" />
     {loading ? (
        <Loader></Loader>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {finalData.map((car) => (
            <ScaleUp key={car._id}>
              <CarCard car={car}></CarCard>
            </ScaleUp>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVehiclesPage;
