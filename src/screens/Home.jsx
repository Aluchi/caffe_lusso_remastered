import React from "react";
import CardsSlider from "../components/CardsSlider";
import Recommendations from "../components/Recommendations";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <main>
      <Helmet>
        <title>Home | Caffé Lusso</title>
      </Helmet>
      <section className="relative w-full bg-cover bg-center hero-section">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-5">
          <h1 className="relative text-3xl lg:text-5xl font-bold mb-4 uppercase tracking-wide">
            Have a warm coffee at Caffé Lusso
          </h1>
          <p className="text-lg lg:text-xl italic">
            "Elevating Your Coffee Experience, One Sip at a Time"
          </p>
        </div>
      </section>
      <div className="wrapper">
        <section className="py-24">
          <h2 className="sections-center-title">Today's disccounts</h2>
          <CardsSlider />
        </section>
        <section>
          <h2 className="sections-center-title">
            <span className="font-bold">The best:</span> Especiality of the
            house
          </h2>
          <Recommendations />
        </section>
      </div>
    </main>
  );
}

export default Home;
