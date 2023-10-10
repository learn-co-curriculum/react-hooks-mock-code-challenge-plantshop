import PlantCard from "./PlantCard";

const PlantList = ({ allPlants, searchTxt }) => {
  const plantCards = allPlants
    .filter(
      (plant) =>
        searchTxt === "" ||
        plant.name.toLowerCase().startsWith(searchTxt.toLowerCase())
    )
    .map((plant) => <PlantCard key={plant.id} {...plant} />);

  return <ul className="cards">{plantCards}</ul>;
};

export default PlantList;
