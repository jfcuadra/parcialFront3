import React from "react";

const Card = ({ marca, color }) => {
  return (
    <div className="card-container">
      <h3>¡Hola! Elegiste la marca {marca}</h3>
      <h4>Y tu color favorito es:</h4>
      <div
        className="color-display"
        style={{ backgroundColor: color }}
      >
        {color}
      </div>
    </div>
  );
};

export default Card;
