import React from "react";

export default function HouseDetails(props) {
  const filteredHouse = props.houses.find((house) => house.Home_id === Number(props.houseId));
  const filteredImages = props.images.filter((houseImage) => {
    return Number(props.houseId) === houseImage.Home_Home_id;
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>House Details</h2>

      {filteredImages.length > 0 && (
        <div style={styles.imageContainer}>
          {filteredImages.map((image, index) => {
            const url = String.fromCharCode(...image["HomeImages_data"].data);
            return (
              <div key={index} style={styles.imageWrapper}>
                <img src={url} alt={`Image ${index}`} style={styles.image} />
              </div>
            );
          })}
        </div>
      )}

      {filteredHouse ? (
        <div>

          <div style={styles.detail}>
            <strong>City:</strong> {filteredHouse.Home_City}
          </div>
          <div style={styles.detail}>
            <strong>Governorate:</strong> {filteredHouse.Home_Governorate}
          </div>
          <div style={styles.detail}>
            <strong>Nature:</strong> {filteredHouse.Home_Nature}
          </div>
          <div style={styles.detail}>
            <strong>Type:</strong> {filteredHouse.Home_Type}
          </div>
        </div>
      ) : (
        <p style={styles.error}>No house found with the specified ID.</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px", // Set a reasonable maxWidth
    margin: "30px auto", // Center the container and add top margin
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "white",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  detail: {
    margin: "10px 0",
  },
  error: {
    color: "red",
    fontStyle: "italic",
    textAlign: "center",
  },
  imageContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px 0",
  },
  imageWrapper: {
    margin: "10px",
  },
  image: {
    width: "250px",
    height: "250px",
    objectFit: "cover",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
};
