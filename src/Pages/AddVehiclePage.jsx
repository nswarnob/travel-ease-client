import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";

const AddVehicleForm = () => {
  const { user } = useContext(AuthContext); // logged-in user info (displayName, email, etc.)

  const [formData, setFormData] = useState({
    vehicleName: "",
    ownerName: "",
    category: "",
    pricePerDay: "",
    location: "",
    availability: "available",
    description: "",
    coverImage: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please log in to add a vehicle.");

    const vehicleData = {
      ...formData,
      pricePerDay: parseFloat(formData.pricePerDay),
      userEmail: user.email, // auto-filled from auth
      createdAt: new Date().toISOString(),
    };

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/all-vehicles", vehicleData);
      if (res.status === 201) {
        alert("✅ Vehicle added successfully!");
        setFormData({
          vehicleName: "",
          ownerName: "",
          category: "",
          pricePerDay: "",
          location: "",
          availability: "available",
          description: "",
          coverImage: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add vehicle. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Vehicle</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="vehicleName"
          value={formData.vehicleName}
          onChange={handleChange}
          placeholder="Vehicle Name"
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          placeholder="Owner Name"
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category (e.g., Sedan, SUV)"
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="pricePerDay"
          value={formData.pricePerDay}
          onChange={handleChange}
          placeholder="Price Per Day"
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          required
          className="w-full border p-2 rounded"
        />

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="w-full border p-2 rounded"
        ></textarea>

        <input
          type="text"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          placeholder="Cover Image URL"
          required
          className="w-full border p-2 rounded"
        />

        <div className="text-sm text-gray-600">
          <strong>User Email:</strong> {user?.email || "Not logged in"}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          {loading ? "Saving..." : "Add Vehicle"}
        </button>
      </form>
    </div>
  );
};

export default AddVehicleForm;
