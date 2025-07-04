import React, { useState } from 'react';

export default function Formulario({ onResultado }) {
  const [dados, setDados] = useState({
    destino: '',
    dataInicio: '',
    dataFim: '',
    perfil: '',
    preferencias: '',
    orcamento: 'médio',
    restricoes: '',
  });

  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setCarregando(true);

    try {
      const response = await fetch('/api/gerar-roteiro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });

      const res = await response.json();
      onResultado(res);
    } catch (error) {
      console.error('Erro ao gerar roteiro:', error);
    }

    setCarregando(false);
  }

  function atualizarCampo(e) {
    const { name, value } = e.target;
    setDados(prev => ({ ...prev, [name]: value }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="backdrop-blur bg-white/70 p-6 rounded-2xl shadow-xl space-y-4"
    >
      <input name="destino" placeholder="Destino" value={dados.destino} onChange={atualizarCampo} className="input" />
      <input type="date" name="dataInicio" value={dados.dataInicio} onChange={atualizarCampo} className="input" />
      <input type="date" name="dataFim" value={dados.dataFim} onChange={atualizarCampo} className="input" />
      <textarea name="perfil" placeholder="Perfil dos viajantes" value={dados.perfil} onChange={atualizarCampo} className="input" />
      <input name="preferencias" placeholder="Preferências" value={dados.preferencias} onChange={atualizarCampo} className="input" />
      <input name="restricoes" placeholder="Restrições" value={dados.restricoes} onChange={atualizarCampo} className="input" />
      <select name="orcamento" value={dados.orcamento} onChange={atualizarCampo} className="input">
        <option value="baixo">Baixo</option>
        <option value="médio">Médio</option>
        <option value="alto">Alto</option>
      </select>
      <button
        type="submit"
        disabled={carregando}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {carregando ? 'Gerando...' : 'Gerar Roteiro'}
      </button>
    </form>
  );
}
