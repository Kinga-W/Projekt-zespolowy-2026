import PlantWindow from "./catalog/PlantWindow";
import PlantSearch from "./catalog/PlantSearch";
import PlantFilter from "./catalog/PlantFilter";
import usePlantSimple from '../hooks/usePlantWindowData';
import useTypes from '../hooks/useTypes';
import { useState, useEffect } from 'react';
import getPlantsFromDB from '../hooks/usePlants';
import "../styles/catalog-style.css";
import usePlants from "../hooks/usePlants";



export default function Catalog() {
  const { plants, error, loading } = usePlants();

  if (loading) console.log('Ładowanie roślin...');
  if (error) console.error(error);

  const [keyword, setKeyword] = useState("");

  const { types, error: typeError, loading: typeLoading } = useTypes();
  
  if (loading) console.log('Ładowanie typów...');
  if (error) console.error(error);

  console.log(types);


  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(keyword.toLowerCase()) ||
    plant.name_lac.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="catalog">
      <h2>Katalog roślin</h2>
      <div className="search-container">
        <div className="searchbar">
          <PlantSearch placeholder="Szukaj..." keyword={keyword} setKeyword={setKeyword}></PlantSearch>
        </div>
      </div>
      <div className="plant-container">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <PlantWindow key={plant.id} plant={plant} />
          ))
        ):(
          <p>Poszukiwanej rośliny nie ma w katalogu.</p>
        )}
      </div>
    </div>
  )
}
