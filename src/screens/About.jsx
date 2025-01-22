import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <main>
      <Helmet>
        <title>About | Caffé Lusso</title>
      </Helmet>
      <section className="about-hero bg-cover bg-center"></section>
      <div className="wrapper py-24 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <section className="about-section">
            <i class="fa-solid fa-circle-info text-6xl"></i>
            <h3>Who We Are</h3>
            <p>
              A passionate team dedicated to delivering exceptional moments with
              friends or family. We believe in innovation, quality, and making a
              difference in every experience.
            </p>
          </section>
          <section className="about-section">
            <i class="fa-solid fa-mug-hot text-6xl"></i>
            <h3>Our Mission</h3>
            <p>
              To redefine how people enjoy coffee by combining creativity with
              excellence.
            </p>
          </section>
        </div>
      </div>
      <h4 className="text-center text-2xl mb-20">
        Let's build something extraordinary together!
      </h4>
    </main>
  );
}

export default About;
