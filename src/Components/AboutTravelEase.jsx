import React from "react";

const AboutTravelEase = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-base-content mb-6">About TravelEase</h2>
        <p className="text-lg text-base-content/80 leading-relaxed mb-10">
          <span className="font-semibold text-secondary">TravelEase</span> is a modern car rental
          platform that connects travelers with trusted vehicle owners. Whether you need a car for a
          road trip, a business visit, or a weekend getaway — we make it easy, secure, and
          affordable.
        </p>

        <div className="flex justify-center">
          <div className="stats shadow-md shadow-accent">
            <div className="stat">
              <div className="stat-title">Verified Owners</div>
              <div className="stat-value text-primary">1.2k+</div>
            </div>
            <div className="stat">
              <div className="stat-title">Active Rentals</div>
              <div className="stat-value text-secondary">3.8k+</div>
            </div>
            <div className="stat">
              <div className="stat-title">Cities Covered</div>
              <div className="stat-value text-accent">45+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTravelEase;
