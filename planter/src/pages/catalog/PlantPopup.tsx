import { useState, useEffect, useRef } from 'react'
import type { Plant } from '@/hooks/usePlantWindowData';
import PlantIcons from './PlantIcons';

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
      <div className="plant-info-card">
        <div className="title-popup">
          <div>
            <h3>{plant.name}</h3>
            <h4>łac. {plant.name_lac}</h4>
            <h5>rodzina: {plant.type}</h5>
          </div>
          <button className="popup-close" onClick={onClose}>X</button>
        </div>
        <div className="infos">
          <h4 className="desc">{plant.desc}</h4>
          <section>
            <h3>Warunki i zapotrzebowanie</h3>
            <ul>
              <li><strong>Nasłonecznienie:</strong> {plant.light_alt}</li>
              <li><strong>Nawodnienie:</strong> {plant.water_alt}</li>
              <li><strong>Gleba:</strong> {plant.soil.map(s => s.name).join(', ')}</li>
              <li><strong>Temperatura:</strong> {plant.temp_min} - {plant.temp_max} °C</li>
              <li><strong>pH gleby:</strong> {plant.ph_min} - {plant.ph_max}</li>
            </ul>
          </section>
          <section>
            <h3>Uprawa i wzrost</h3>
            <ul>
              <li><strong>Trudność dbania:</strong> {plant.care_diff}/5</li>
              <li><strong>Okres siania:</strong> {plant.planting_time}</li>
              <li><strong>Długość wzrostu:</strong> {plant.growing_time}</li>
            </ul>
          </section>
          <section>
            <h3>Pielęgnacja</h3>
            <p><strong>Nawożenie:</strong> {plant.fert}</p>
            <p><strong>Dbanie:</strong> {plant.care_desc}</p>
          </section>
        </div>
      </div>
    </dialog>
  )
}