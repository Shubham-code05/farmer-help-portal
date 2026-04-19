import { useState } from "react";

function GovernmentSchemeCard() {
  const [farmerType, setFarmerType] = useState("Small");

  const getScheme = () => {
    if (farmerType === "Small") {
      return {
        name: "PM Kisan Yojana",
        benefit: "₹6000 yearly support",
      };
    }

    if (farmerType === "Medium") {
      return {
        name: "Kisan Credit Card",
        benefit: "Low interest farming loan",
      };
    }

    return {
      name: "PM Fasal Bima Yojana",
      benefit: "Crop insurance support",
    };
  };

  const scheme = getScheme();

  return (
    <div
      style={{
        backgroundColor: "#f3e5f5",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>📢 Government Scheme</h2>

      <select
        value={farmerType}
        onChange={(e) => setFarmerType(e.target.value)}
        style={{
          padding: "10px",
          marginTop: "10px",
          width: "100%",
        }}
      >
        <option value="Small">Small Farmer</option>
        <option value="Medium">Medium Farmer</option>
        <option value="Large">Large Farmer</option>
      </select>

      <p style={{ marginTop: "20px" }}>
        <strong>{scheme.name}</strong>
      </p>

      <p>{scheme.benefit}</p>
    </div>
  );
}

export default GovernmentSchemeCard;