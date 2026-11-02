import { useState, useEffect } from 'react'
import potatopic from "@/assets/placeholder.png";
import type { Plant } from '@/hooks/usePlantWindowData';
import sun1 from '/catalog-icons/sun1.png';
import sun2 from '/catalog-icons/sun2.png';
import sun3 from '/catalog-icons/sun3.png';
import sun4 from '/catalog-icons/sun4.png';
import water1 from '/catalog-icons/water1.png';
import water2 from '/catalog-icons/water2.png';
import water3 from '/catalog-icons/water3.png';
import soil1 from '/catalog-icons/soil1.png';
import soil2 from '/catalog-icons/soil2.png';
import soil3 from '/catalog-icons/soil3.png';
import soil4 from '/catalog-icons/soil4.png';
import soil5 from '/catalog-icons/soil5.png';
import soil6 from '/catalog-icons/soil6.png';
import soil7 from '/catalog-icons/soil7.png';

export default function PlantWindow({ plant }: { plant: Plant }) {
  const sunImages: Record<number, string> = {1:sun1, 2:sun2, 3:sun3, 4:sun4};
  const waterImages: Record<number, string> = {1:water1, 2:water2, 3:water3};
  const soilImages: Record<number, string> = {1:soil1, 2:soil2, 3:soil3, 4:soil4, 5:soil5, 6:soil6, 7:soil7};
  
  const [lightURL, setLightURL] = useState(sunImages[plant.light]);
  const [waterURL, setWaterURL] = useState(waterImages[plant.water]);
  const [soilURL, setSoilURL] = useState(soilImages[plant.soil[0].id]);
  const path = "/catalog-photos/";

  return (
    <div className="plant-window">
      <div className="plant-photo">
        <img src={path + plant.url}></img>
        <button className="btn-fav">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
      </div>
      <div className="title">
        <h3>{plant.name}</h3>
        <h4>łac. {plant.name_lac}</h4>
        <h5>rodzina: {plant.type}</h5>
      </div>
      <div className="info">
        <img src={lightURL} title={plant.light_alt}></img>
        <img src={waterURL} title={plant.water_alt}></img>
        <img src={soilURL} title={plant.soil.map(s => s.name).join(', ')}></img>
      </div>
      <div className="button">
        <button className="btn-more">WIĘCEJ INFORMACJI</button>
      </div>
    </div>
  )
}