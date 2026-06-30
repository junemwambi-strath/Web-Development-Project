import { Link } from "react-router-dom";
import heroImage from "../assets/hero.svg";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">

        <div className="hero-text">

          <span className="tag">
            Trusted Local Professionals
          </span>

          <h1>
            Hire Skilled Fundis
            <br />
            With Confidence
          </h1>

          <p>
            QuickFundi helps you connect with trusted plumbers,
            electricians, carpenters, painters, mechanics and
            other skilled professionals near you. Fast, reliable
            and hassle-free.
          </p>

          <div className="hero-buttons">

            <Link to="/workers">
              <button className="primary-btn">
                Find a Fundi
              </button>
            </Link>

            <button 
            className="secondary-btn"
            onClick={() => navigate("/become-fundi")}
            >
              Become a Fundi
            </button>

          </div>

          <div className="trust">

            <span>✔ Verified Professionals</span>

            <span>✔ Trusted Reviews</span>

            <span>✔ Easy Booking</span>

          </div>

        </div>

        <div className="hero-image">

          <img
            src={heroImage}
            alt="Illustration of skilled professionals"
          />

        </div>

      </section>

      <section className="features">

        <div className="feature-card">

          <div className="feature-icon">🛠</div>

          <h3>Verified Fundis</h3>

          <p>
            Browse skilled professionals with verified profiles and trusted experience.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">⭐</div>

          <h3>Customer Reviews</h3>

          <p>
            Read genuine ratings before hiring with confidence.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">📍</div>

          <h3>Nearby Services</h3>

          <p>
            Discover trusted professionals available in your location.
          </p>

        </div>

      </section>
    </>
  );
}