import React, { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState(null);

  const calcularIMC = () => {
    const alturaMetros = altura / 100; // Convertendo altura para metros
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));
  };

  const getClassificacao = () => {
    if (imc < 18.5) return "Magreza";
    if (imc >= 18.5 && imc < 24.9) return "Normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    if (imc >= 30 && imc < 39.9) return "Obesidade";
    return "Obesidade Grave";
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <label>
        Altura (cm):
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </label>
      <br />
      <label>
        Peso (kg):
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc !== null && (
        <div>
          <h2>Resultado:</h2>
          <p>IMC: {imc}</p>
          <p>Classificação: {getClassificacao()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
