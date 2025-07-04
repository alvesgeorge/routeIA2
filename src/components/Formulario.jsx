// src/components/Formulario.jsx
import { useState } from 'react';
import axios from 'axios';

export default function Formulario({ onGerar }) {
  const [form, setForm] = useState({
    destino: '',
    dataInicio: '',
    dataFim: '',
    perfil: '',
    preferencias: '',
    orcamento: 'médio',
    restricoes: ''
  });

  const [carregando, setCarregando] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    setCarregando(true);
    try {
      const resp = await axios.post('/api/gerar-roteiro', form);
      onGerar(resp.data);
    } catch (err) {
      alert('Erro ao gerar roteiro');
    }
    setCarregando(false);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input id="destino" placeholder="Destino" value={form.destino} onChange={handleChange} className="p-2 border rounded" />
        <input id="orcamento" placeholder="Orçamento (baixo/médio/alto)" value={form.orcamento} onChange={handleChange} className="p-2 border rounded" />
        <input id="dataInicio" type="date" value={form.dataInicio} onChange={handleChange} className="p-2 border rounded" />
        <input id="dataFim" type="date" value={form.dataFim} onChange={handleChange} className="p-2 border rounded" />
      </div>
      <textarea id="perfil" placeholder="Perfil dos viajantes" value={form.perfil} onChange={handleChange} className="w-full p-2 border rounded" />
      <input id="preferencias" placeholder="Preferências" value={form.preferencias} onChange={handleChange} className="w-full p-2 border rounded" />
      <input id="restricoes" placeholder="Restrições" value={form.restricoes} onChange={handleChange} className="w-full p-2 border rounded" />

      <button onClick={handleSubmit} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        {carregando ? 'Gerando...' : 'Gerar Roteiro'}
      </button>
    </div>
  );
}
