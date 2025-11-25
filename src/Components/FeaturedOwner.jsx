import React from "react";

const FeaturedOwner = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-base-content mb-8">🌟 Featured Owner</h2>
        <div className="card bg-accent shadow-xl md:flex-row flex-col items-center md:items-start p-6 md:p-8">
          <img
            src="https://pbs.twimg.com/profile_images/1974781768302780416/NTdxBs9l_400x400.jpg"
            alt="Featured Owner"
            className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-md"
          />
          <div className="md:ml-8 mt-6 md:mt-0 text-left">
            <h3 className="text-2xl font-bold  mb-2">John Mitchell</h3>
            <p className="text-base-content/80 mb-4">
              One of TravelEase’s most trusted hosts — with over{" "}
              <strong>120 successful rentals</strong> and a perfect 5-star rating. John believes in
              smooth rides and happy travelers!
            </p>
            <p className="text-sm text-info italic">
              “TravelEase has made hosting effortless — I love connecting with travelers!”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOwner;
