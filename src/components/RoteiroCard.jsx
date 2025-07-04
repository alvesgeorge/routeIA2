// src/components/RoteiroCard.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function Atividade({ atividade }) {
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    async function buscarFoto() {
      try {
        const resp = await axios.get(`https://api.unsplash.com/search/photos`, {
          params: { query: atividade.local, per_page: 1 },
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
          }
        });
        if (resp.data.results.length > 0) {
          setFoto(resp.data.results[0].urls.small);
        }
      } catch (err) {
        console.error('Erro ao buscar imagem', err);
      }
    }
    buscarFoto();
  }, [atividade.local]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      {foto && (
        <img src={foto} alt={atividade.local} className="w-full md:w-48 h-48 object-cover" />
      )}
      <div className="p-4 flex-1">
        <h3 className="text-xl font-bold">{atividade.hora} - {atividade.local}</h3>
        <p className="mt-1">{atividade.descricao}</p>
        <p className="text-sm mt-2">💰 {atividade.custo} | 🚗 {atividade.transporte} | 🍴 {atividade.restauranteProximo}</p>
      </div>
    </div>
  );
}

export default function RoteiroCard({ data, atividades }) {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-3">📅 {data}</h2>
      <div className="space-y-4">
        {atividades.map((atividade, i) => (
          <Atividade key={i} atividade={atividade} />
        ))}
      </div>
    </div>
  );
}
