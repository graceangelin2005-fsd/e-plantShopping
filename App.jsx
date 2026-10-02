import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="landing-page">
      <nav className="navbar landing-navbar">
        <div className="navbar-brand">
          <Link to="/">Paradise Nursery</Link>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart</Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-tagline">
              Bring Nature Into Your Home
            </p>

            <h1>Paradise Nursery</h1>

            <p className="hero-description">
              Discover beautiful houseplants and create your own
              peaceful indoor paradise.
            </p>

            <Link to="/plants" className="get-started-button">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <AboutUs />
    </div>
  );
}

export default App;
