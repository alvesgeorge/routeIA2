import React, { useState } from 'react';
import Formulario from './components/Formulario';
import RoteiroCard from './components/RoteiroCard';

export default function App() {
  const [resultado, setResultado] = useState(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">🌍 TuristicRoute</h1>
        <p className="text-sm text-gray-600">Planeje sua viagem com ajuda de IA e descubra o melhor de cada destino.</p>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 flex flex-col items-center justify-start">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Gerador de Roteiro Turístico com IA
        </h2>

        <div className="w-full max-w-2xl">
          <Formulario onResultado={setResultado} />
        </div>

        {resultado && (
          <div className="mt-10 w-full max-w-4xl space-y-4">
            {resultado.map((dia, idx) => (
              <RoteiroCard key={idx} data={dia.data} atividades={dia.atividades} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
