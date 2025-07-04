import React, { useEffect, useState } from 'react';

export default function RoteiroCard({ data, atividades }) {
  const [imagens, setImagens] = useState({});

  useEffect(() => {
    async function buscarImagens() {
      const novasImagens = {};
      for (const atv of atividades) {
        try {
          const res = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(atv.local)}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
          const data = await res.json();
          novasImagens[atv.local] = data.results[0]?.urls?.small || '';
        } catch {
          novasImagens[atv.local] = '';
        }
      }
      setImagens(novasImagens);
    }

    buscarImagens();
  }, [atividades]);

  return (
    <div className="bg-white/70 backdrop-blur shadow-md rounded-xl p-5 space-y-4">
      <h3 className="text-xl font-bold text-blue-700">📅 {data}</h3>
      {atividades.map((atv, idx) => (
        <div key={idx} className="flex gap-4 bg-white/80 p-4 rounded-lg shadow-sm">
          {imagens[atv.local] && (
            <img src={imagens[atv.local]} alt={atv.local} className="w-24 h-24 object-cover rounded-md" />
          )}
          <div>
            <p className="font-semibold text-lg">{atv.local}</p>
            <p className="text-sm text-gray-600">{atv.descricao}</p>
            <p className="text-sm mt-1">🕒 {atv.hora} | 🚗 {atv.transporte} | 💵 R$ {atv.custo}</p>
            {atv.restauranteProximo && (
              <p className="text-sm mt-1">🍽️ Próximo: {atv.restauranteProximo}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
