import React, { useState } from 'react';
import axios from 'axios';

export default function Formulario({ onResultado }) {
  const [form, setForm] = useState({
    destino: '',
    dataInicio: '',
    dataFim: '',
    perfil: '',
    preferencias: '',
    orcamento: 'médio',
    restricoes: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/gerar-roteiro', form);
      onResultado(response.data);
    } catch (error) {
      alert('Erro ao gerar roteiro');
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
      {[
        { label: 'Destino', id: 'destino', type: 'text' },
        { label: 'Data de Início', id: 'dataInicio', type: 'date' },
        { label: 'Data de Fim', id: 'dataFim', type: 'date' },
        { label: 'Perfil dos Viajantes', id: 'perfil', type: 'textarea' },
        { label: 'Preferências', id: 'preferencias', type: 'text' },
        { label: 'Restrições', id: 'restricoes', type: 'text' }
      ].map(({ label, id, type }) => (
        <div key={id}>
          <label className="font-semibold">{label}</label>
          {type === 'textarea' ? (
            <textarea id={id} value={form[id]} onChange={handleChange} className="w-full border p-2 rounded" />
          ) : (
            <input type={type} id={id} value={form[id]} onChange={handleChange} className="w-full border p-2 rounded" />
          )}
        </div>
      ))}

      <div>
        <label className="font-semibold">Orçamento</label>
        <select id="orcamento" value={form.orcamento} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="baixo">Baixo</option>
          <option value="médio">Médio</option>
          <option value="alto">Alto</option>
        </select>
      </div>

      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Gerar Roteiro
      </button>
    </div>
  );
}
