import React, { useState } from 'react';
import './Formulario.css';
import { FaUserFriends, FaPlane, FaMapMarkedAlt, FaMoneyBillWave, FaTags } from 'react-icons/fa';

export default function Formulario() {
  const [tipoRoteiro, setTipoRoteiro] = useState('Cultural');
  const [perfil, setPerfil] = useState('');
  const [orcamento, setOrcamento] = useState('Médio');
  const [preferencias, setPreferencias] = useState([]);
  const tiposRoteiro = ['Cultural', 'Gastronômico', 'Natureza', 'Romântico'];
  const perfis = ['Família', 'Casal', 'Solo', 'Melhor Idade'];
  const orcamentos = ['Econômico', 'Médio', 'Alto'];
  const tagsPreferencias = ['Museus', 'Trilhas', 'Praia', 'Gastronomia'];

  // Exemplo de seleção visual para preferências (estilo tags)
  function togglePreferencia(item) {
    setPreferencias(prev => (
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    ));
  }

  return (
    <div className="form-container">
      <h2><FaPlane /> Gerador de Roteiros com IA</h2>
      
      {/* Tipo de Roteiro */}
      <div className="form-card">
        <label><FaMapMarkedAlt /> Tipo de Roteiro:</label>
        <div className="select-group">
          {tiposRoteiro.map(tipo => (
            <button
              key={tipo}
              className={`card-btn${tipoRoteiro === tipo ? ' ativo' : ''}`}
              onClick={() => setTipoRoteiro(tipo)}
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
              onClick={() => setPerfil(p)}
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
              onClick={() => togglePreferencia(p)}
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
              onClick={() => setOrcamento(o)}
              type="button"
            >
              {o}
            </button>
          ))}
        </div>
      </div>
      
      {/* Campos tradicionais podem ser adicionados aqui */}
      {/* <button ...>Gerar Roteiro</button> */}
    </div>
  );
}
