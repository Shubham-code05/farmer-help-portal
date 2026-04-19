import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to Farmer Help Portal</h1>
        <p>Weather, Mandi Price, Government Schemes and Crop Suggestions</p>
      </div>
    </div>
  );
}

export default Home;