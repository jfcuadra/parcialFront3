import { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import "./App.css"; 

function App() {
  const [formData, setFormData] = useState(null); 

  const handleFormSubmit = (data) => {
    setFormData(data); 
  };

  return (
    <div className="App">
      <h1>Elige una marca de moto y Color</h1>
      <Form onSubmit={handleFormSubmit} />
      {formData && <Card marca={formData.marca} color={formData.color} />}
    </div>
  );
}

export default App;
