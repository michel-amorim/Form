import React, { useState, useCallback } from "react";

import "./App.css";

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = useCallback(
    (event: any) => {
      console.log(event);
    },
    [name, age]
  );

  return (
    <div className="container">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name..."
          className="form-control mb2"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="age"
          type="number"
          placeholder="Age..."
          className="form-control mb2"
          onChange={(e) => setAge(e.target.value)}
        />

        <button className="btn btn-primary btn-block" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
