import React from "react";

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Paradise Nursery</h2>

        <p>
          Paradise Nursery is an online destination for beautiful,
          healthy and easy-to-care-for houseplants.
        </p>

        <p>
          We believe that plants can transform indoor spaces into
          peaceful, refreshing and welcoming environments.
        </p>

        <p>
          Our collection includes low-light favorites, medicinal
          plants and aromatic herbs carefully selected for plant
          lovers of all experience levels.
        </p>

        <div className="about-features">
          <div>
            <h3>🌱 Quality Plants</h3>
            <p>Healthy plants selected for indoor environments.</p>
          </div>

          <div>
            <h3>🚚 Easy Shopping</h3>
            <p>Browse our collection and add your favorites to your cart.</p>
          </div>

          <div>
            <h3>💚 Plant Lovers</h3>
            <p>Helping you create a greener and happier home.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
