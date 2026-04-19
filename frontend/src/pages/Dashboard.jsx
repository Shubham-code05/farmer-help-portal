import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import MandiPriceCard from "../components/MandiPriceCard";
import CropSuggestionCard from "../components/CropSuggestionCard";
import GovernmentSchemeCard from "../components/GovernmentSchemeCard";
import FarmerQueryCard from "../components/FarmerQueryCard";

function Dashboard() {
  const userName = localStorage.getItem("userName");

  return (
    <div>
      <Navbar />

      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "green",
        }}
      >
        Welcome, {userName}
      </h1>

      <div
        style={{
          padding: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        <WeatherCard />

        <MandiPriceCard />

        <CropSuggestionCard />

        <GovernmentSchemeCard />

        <FarmerQueryCard />
      </div>
    </div>
  );
}

export default Dashboard;