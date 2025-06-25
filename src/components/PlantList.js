import PlantCard from "./PlantCard";

function PlantList({ plants, updatePlant, deletePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return (
          <PlantCard
            plant={plant}
            updatePlant={updatePlant}
            deletePlant={deletePlant}
            key={plant.id}
          />
        );
      })}
    </ul>
  );
}

export default PlantList;
