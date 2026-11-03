import { useState, useEffect } from 'react'
import type { Plant } from '@/hooks/usePlantWindowData';
import PlantIcons from './PlantIcons';

export default function PlantWindow({ plant, onExpand}) {
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
      <PlantIcons key={plant.id} plant={plant}></PlantIcons>
      <div className="button">
        <button className="btn-more" onClick={onExpand}>WIĘCEJ INFORMACJI</button>
      </div>
    </div>
  )
}