import React, { useState } from 'react';
import Formulario from './components/Formulario';
import RoteiroCard from './components/RoteiroCard';

export default function App() {
  const [roteiro, setRoteiro] = useState([]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Gerador de Roteiro Turístico com IA</h1>
      <Formulario onResultado={setRoteiro} />
      <div className="mt-10 space-y-8">
        {roteiro.length > 0 &&
          roteiro.map((dia, index) => (
            <RoteiroCard key={index} data={dia.data} atividades={dia.atividades} />
          ))}
      </div>
    </div>
  );
}
