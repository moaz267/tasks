import React from 'react'
import "../../styles/components/banner/banner.css"
export default function Banner() {
  return (
      <section className="banner_section">
<header class="hero">
        <nav class="navbar">
            <div class="logo">TRAVALO</div>
            <ul class="nav-links">
                <li><a href="#">DESTINATION</a></li>
                <li><a href="#">OUR ACTIVITY</a></li>
                <li><a href="#">TRIPS</a></li>
                <li><a href="#">WHO WE ARE?</a></li>
            </ul>
        </nav>
        <div class="hero-content">
            <h1>Explore Beautiful</h1>
            <h2>HIMCHAL</h2>
            <div class="carousel">
                <span class='active'>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
            </div>
        </div>
    </header>

      </section>
  );
}
