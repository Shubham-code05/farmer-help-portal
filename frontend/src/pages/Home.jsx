import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "green",
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Welcome to Farmer Help Portal
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#555",
            marginBottom: "40px",
          }}
        >
          Get Weather Updates, Mandi Prices, Crop Suggestions and Government
          Schemes for Farmers.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Link to="/signup">
            <button
              style={{
                padding: "12px 25px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button
              style={{
                padding: "12px 25px",
                backgroundColor: "white",
                color: "green",
                border: "2px solid green",
                borderRadius: "8px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </Link>
        </div>

        <div
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            padding: "0 50px",
          }}
        >
          <div
            style={{
              backgroundColor: "#e8f5e9",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h2>🌦 Weather Updates</h2>
            <p>Live weather details for your city and farming needs.</p>
          </div>

          <div
            style={{
              backgroundColor: "#fff3e0",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h2>💰 Mandi Prices</h2>
            <p>Check latest mandi prices for wheat, rice, potato and more.</p>
          </div>

          <div
            style={{
              backgroundColor: "#e3f2fd",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h2>🌱 Crop Suggestions</h2>
            <p>Get best crop recommendations according to season.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;