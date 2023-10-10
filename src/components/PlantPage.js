import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const PlantPage = () => {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
};

export default PlantPage;
