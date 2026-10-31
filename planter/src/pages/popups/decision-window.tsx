"use client";

export default function DecisionWindow({ message, onYes, onNo }) {
  return (
    <div className="popup-shadow">
      <div className="popup-window">
        <p>{message}</p>
        <button onClick={onYes}>Tak</button>
        <button onClick={onNo}>Nie</button>
      </div>
    </div>
  );
}
