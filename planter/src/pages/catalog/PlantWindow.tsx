import potatopic from "@/assets/placeholder.png";

export default function PlantWindow() {
  return (
    <div className="plant-window">
      <img className="plant-photo" src={potatopic}></img>
      <div className="title">
        <h3>Plant.name</h3>
        <h4>łac. Plant.name_lac</h4>
        <h5>Plant.type</h5>
      </div>
      <div className="info">
        <hr/>
        <p>Plant.light</p>
        <p>Plant.watering(requirement + frequency)</p>
        <p>Plant.soil(type + drainage)</p>
        <hr/>
        <p>Plant.temp(min + max)</p>
        <p>Plant.ph(min + max)</p>
        <p>Plant.care_difficulty</p>
        <p>Plant.fertalization(description)</p>
      </div>
    </div>
  )
}