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
  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? allData.filter((car) => car?.vehicleName.toLowerCase().includes(term))
    : allData;

  if (!allData) {
    return <Loader></Loader>;
  }

  const sortedVehicles = () => {
    if (sortOrder === "none") {
      return allData;
    }

    const sorted = [...allData];
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

  return (
    <div className="my-10 max-w-100 md:max-w-3xl lg:max-w-6xl mx-auto">
      <h1 className="font-bold text-3xl text-base-content text-center mb-15">
        All Vehicles
      </h1>
      <div className="flex items-center justify-between px-2 mb-4">
        <h3 className="font-semibold">({allData.length}) Vehicles</h3>
        <div>
          <label className="input w-60 focus:outline-0 border-none outline-none ">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              value={search}
              required
              placeholder="Search"
              className="focus:outline-none"
            />
          </label>
        </div>
        <div className="filter">
          <input
            className="btn filter-reset"
            onChange={handleSortChange}
            checked={sortOrder === "none"}
            type="radio"
            name="metaframeworks"
            value={"none"}
            aria-label="All"
          />
          <input
            className="btn"
            type="radio"
            onChange={handleSortChange}
            checked={sortOrder === "price-asc"}
            name="metaframeworks"
            value={"price-asc"}
            aria-label="Lowest $"
          />
          <input
            className="btn"
            type="radio"
            onChange={handleSortChange}
            checked={sortOrder === "price-desc"}
            name="metaframeworks"
            value={"price-desc"}
            aria-label="Highest $"
          />
          <input
            className="btn"
            type="radio"
            onChange={handleSortChange}
            checked={sortOrder === "default"}
            name="metaframeworks"
            value={"default"}
            aria-label="Free"
          />
        </div>
      </div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(searchedApps && searchedApps.length > 0
            ? searchedApps
            : sortedVehicles()
          ).map((car) => (
            <ScaleUp>
              {" "}
              <CarCard key={car._id} car={car}></CarCard>
            </ScaleUp>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVehiclesPage;
