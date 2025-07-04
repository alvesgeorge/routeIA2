// src/App.jsx
import React from 'react';
import Formulario from './components/Formulario';
import RoteiroCard from './components/RoteiroCard';

export default function App() {
  const [roteiro, setRoteiro] = useState([]);

  return (
    <div className="min-h-screen p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Gerador de Roteiros Turísticos com IA</h1>
      <Formulario onGerar={setRoteiro} />

      {roteiro.length > 0 && (
        <div className="mt-8 space-y-6">
          {roteiro.map((dia, index) => (
            <RoteiroCard key={index} data={dia.data} atividades={dia.atividades} />
          ))}
        </div>
      )}
    </div>
  );
}
