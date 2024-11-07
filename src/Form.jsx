import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    marca: "",
    color: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (
      formData.marca.trim().length >= 3 && 
      !formData.marca.startsWith(" ") && 
      formData.color.trim().length >= 6 
    ) {
      setError(false);
      onSubmit(formData); 
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label>Marca de Moto: </label>
      <input
        type="text"
        name="marca"
        value={formData.marca}
        onChange={handleChange}
        placeholder="Ingresa la marca de tu moto"
        required
      />
      <label>Color: </label>
      <input
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange}
        placeholder="Ingresa el color deseado"
        required
      />
      <button type="submit">Enviar</button>
      {error && (
        <h4 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta.
        </h4>
      )}
    </form>
  );
};

export default Form;
