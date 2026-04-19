import { useState } from "react";

function CropSuggestionCard() {
  const [season, setSeason] = useState("Winter");

  const getCrop = () => {
    if (season === "Winter") return "Wheat";
    if (season === "Summer") return "Rice";
    if (season === "Rainy") return "Maize";
  };

  return (
    <div
      style={{
        backgroundColor: "#e3f2fd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>🌱 Crop Suggestion</h2>

      <select
        value={season}
        onChange={(e) => setSeason(e.target.value)}
        style={{
          padding: "10px",
          marginTop: "10px",
          width: "100%",
        }}
      >
        <option value="Winter">Winter</option>
        <option value="Summer">Summer</option>
        <option value="Rainy">Rainy</option>
      </select>

      <p style={{ marginTop: "20px" }}>
        Best Crop: <strong>{getCrop()}</strong>
      </p>

      <p>Season: {season}</p>
    </div>
  );
}

export default CropSuggestionCard;