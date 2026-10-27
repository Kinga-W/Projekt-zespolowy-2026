import PlantWindow from "./catalog/PlantWindow";
import "@/styles/catalog-style.css";

export default function Catalog() {
  return (
    <div className="catalog">
      <h2>Katalog roślin</h2>
      <div className="search"></div>
      <div className="plant-container">
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
      </div>
    </div>
  )
}