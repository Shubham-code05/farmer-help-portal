function MandiPriceCard() {
  const mandiData = [
    {
      crop: "Wheat",
      price: "₹2200 / क्विंटल",
    },
    {
      crop: "Rice",
      price: "₹1800 / क्विंटल",
    },
    {
      crop: "Potato",
      price: "₹1200 / क्विंटल",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#fff3e0",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>💰 Mandi Price</h2>

      {mandiData.map((item, index) => (
        <div key={index} style={{ marginTop: "10px" }}>
          <p>
            <strong>{item.crop}:</strong> {item.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MandiPriceCard;