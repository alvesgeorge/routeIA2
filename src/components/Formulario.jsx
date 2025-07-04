import React, { useState } from 'react';
import { FaUserFriends, FaPlane, FaMapMarkedAlt, FaMoneyBillWave, FaTags, FaCalendarAlt, FaMapPin } from 'react-icons/fa';
import './Formulario.css';

export default function Formulario() {
  const [destino, setDestino] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [tipoRoteiro, setTipoRoteiro] = useState('Cultural');
  const [perfil, setPerfil] = useState('');
  const [orcamento, setOrcamento] = useState('Médio');
  const [preferencias, setPreferencias] = useState([]);
  const [restricoes, setRestricoes] = useState('');

  const tiposRoteiro = ['Cultural', 'Gastronômico', 'Natureza', 'Romântico'];
  const perfis = ['Família', 'Casal', 'Solo', 'Melhor Idade'];
  const orcamentos = ['Econômico', 'Médio', 'Alto'];
  const tagsPreferencias = ['Museus', 'Trilhas', 'Praia', 'Gastronomia'];

  function togglePreferencia(item) {
    setPreferencias(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Aqui você monta o objeto com todos os estados e envia para API normalmente
    // Exemplo: enviar { destino, dataInicio, dataFim, tipoRoteiro, perfil, preferencias, orcamento, restricoes }
    alert('Funcionalidade de envio aqui');
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2><FaPlane /> Gerador de Roteiros com IA</h2>

      {/* Destino */}
      <div className="form-card">
        <label><FaMapPin /> Destino:</label>
        <input
          type="text"
          className="input-destino"
          placeholder="Digite o destino"
          value={destino}
          onChange={e => setDestino(e.target.value)}
          required
        />
      </div>

      {/* Datas */}
      <div className="form-card">
        <label><FaCalendarAlt /> Data de Início:</label>
        <input
          type="date"
          value={dataInicio}
          onChange={e => setDataInicio(e.target.value)}
          required
        />
        <label><FaCalendarAlt /> Data de Fim:</label>
        <input
          type="date"
          value={dataFim}
          onChange={e => setDataFim(e.target.value)}
          required
        />
      </div>

      {/* Tipo de Roteiro */}
      <div className="form-card">
        <label><FaMapMarkedAlt /> Tipo de Roteiro:</label>
        <div className="select-group">
          {tiposRoteiro.map(tipo => (
            <button
              key={tipo}
              className={`card-btn${tipoRoteiro === tipo ? ' ativo' : ''}`}
              onClick={e => { e.preventDefault(); setTipoRoteiro(tipo); }}
              type="button"
            >
              {tipo}
            </button>
          ))}
        </div>
      </div>

      {/* Perfil dos Viajantes */}
      <div className="form-card">
        <label><FaUserFriends /> Perfil dos Viajantes:</label>
        <div className="select-group">
          {perfis.map(p => (
            <button
              key={p}
              className={`card-btn${perfil === p ? ' ativo' : ''}`}
              onClick={e => { e.preventDefault(); setPerfil(p); }}
              type="button"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Preferências */}
      <div className="form-card">
        <label><FaTags /> Preferências:</label>
        <div className="select-group">
          {tagsPreferencias.map(p => (
            <button
              key={p}
              className={`tag-btn${preferencias.includes(p) ? ' ativo' : ''}`}
              onClick={e => { e.preventDefault(); togglePreferencia(p); }}
              type="button"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Orçamento */}
      <div className="form-card">
        <label><FaMoneyBillWave /> Orçamento:</label>
        <div className="select-group">
          {orcamentos.map(o => (
            <button
              key={o}
              className={`card-btn${orcamento === o ? ' ativo' : ''}`}
              onClick={e => { e.preventDefault(); setOrcamento(o); }}
              type="button"
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      {/* Restrições */}
      <div className="form-card">
        <label>Restrições:</label>
        <input
          type="text"
          placeholder="Ex: acessibilidade, alimentação..."
          value={restricoes}
          onChange={e => setRestricoes(e.target.value)}
        />
      </div>

      <button className="btn-enviar" type="submit">✈️ Gerar Roteiro</button>
    </form>
  );
}
