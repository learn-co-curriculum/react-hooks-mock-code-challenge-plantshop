import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const url = "http://localhost:6001/plants";
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
      });
  }, []);

  const renderPlants = () =>
    plants.map((plant) => <PlantCard key={plant.id} plant={plant} />);

  return <ul className="cards">{renderPlants()}</ul>;
}

export default PlantList;
