import { useState, useEffect, useRef } from 'react'
import type { Plant } from '@/hooks/usePlantWindowData';
import PlantIcons from './PlantIcons';
import "@/styles/plant-popup-style.css";

export default function PlantPopup({ plant, onClose }) {
  const path = "/catalog-photos/";

  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    dialog.showModal();
    closeButtonRef.current?.focus();

    return () => {
      if (dialog.open) {
        dialog.close();
      }
    };
  }, []);

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDialogElement>
  ) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="plant-popup"
      aria-labelledby="plant-title"
      onClick={handleBackdropClick}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }} 
      >
      <div className="plant-photo-popup">
        <img src={path + plant.url}></img>
        <button className="btn-fav">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <PlantIcons key={plant.id} plant={plant}></PlantIcons>
      </div>
      <hr/>
      <div className="plant-info">
        <div className="title-popup">
          <div>
            <h3>{plant.name}</h3>
            <h4>łac. {plant.name_lac}</h4>
            <h5>rodzina: {plant.type}</h5>
          </div>
          <button className="popup-close">X</button>
        </div>
        <p>Opis {plant.desc}</p>
        <h6>Zapotrzebowanie:</h6>
        <p>Nasłonecznienie: {plant.light_alt}</p>
        <p>Nawodnienie: {plant.water_alt}</p>
        <p>Gleba: {plant.soil.map(s => s.name).join(', ')}</p>
        <p>Preferowana temperatura: {plant.temp_min} - {plant.temp_max}</p>
        <p>Preferowane ph: {plant.ph_max} - {plant.ph_min}</p>
        <p>Nawożenie: {plant.fert}</p>
        <p>Trudność dbania: {plant.diff}</p>
        <p>Okres siania: {plant.plantseason}</p>
        <p>Długość wzrostu: {plant.grow_time}</p>
        <p>Dbanie: {plant.care_desc}</p>
      </div>
    </dialog>
  )
}