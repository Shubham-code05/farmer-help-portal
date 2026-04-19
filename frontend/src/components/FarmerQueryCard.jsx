import { useState } from "react";

function FarmerQueryCard() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      setMessage("Please enter your question");
      return;
    }

    setMessage("Your query has been submitted successfully!");
    setQuery("");
  };

  return (
    <div
      style={{
        backgroundColor: "#fff8e1",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>👨‍🌾 Farmer Query</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your farming question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit Query
        </button>
      </form>

      {message && (
        <p
          style={{
            marginTop: "15px",
            color: "green",
            fontWeight: "bold",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default FarmerQueryCard;