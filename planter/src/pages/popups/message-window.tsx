"use client";

export default function MessageWindow({ message, onClose }) {
  return (
    <div className="popup-shadow">
      <div className="popup-window">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
