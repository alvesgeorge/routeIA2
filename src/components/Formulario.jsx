import './Formulario.css';
import React, { useState } from 'react';
import { FaUserFriends, FaPlane, FaMapMarkedAlt, FaMoneyBillWave, FaTags } from 'react-icons/fa';

export default function Formulario() {
  const [formData, setFormData] = useState({
    destino: '',
    dataInicio: '',
    dataFim: '',
    tipoRoteiro: '',
    perfil: '',
    preferencias: [],
    orcamento: '',
    restricoes: ''
  });

  const tiposRoteiro = ['Cultural', 'Gastronômico', 'Natureza', 'Romântico'];
  const perfis = ['Família', 'Casal', 'Sozinho', 'Melhor idade'];
  const orcamentos = ['Econômico', 'Médio', 'Alto'];
  const tagsPreferencias = ['Museus', 'Trilhas', 'Praia', 'Gastronomia'];

  function togglePreferencia(item) {
    setFormData(prev => {
      const already = prev.preferencias.includes(item);
      const newPrefs = already ? prev.preferencias.filter(i => i !== item) : [...prev.preferencias, item];
      return { ...prev, preferencias: newPrefs };
    });
  }

  return (
    <div className="form-container">
      <h2><FaPlane /> Gerador de Roteiros com IA</h2>
      <div className="form-card">
        <label>Destino:</label>
        <input type="text" placeholder="Digite o destino" />
      </div>

      <div className="form-card">
        <label>Data de Início:</label>
        <input type="date" />
        <label>Data de Fim:</label>
        <input type="date" />
      </div>

      <div className="form-card">
        <label><FaMapMarkedAlt /> Tipo de Roteiro:</label>
        <div className="select-group">
          {tiposRoteiro.map(tipo => (
            <button key={tipo} className="card-btn">{tipo}</button>
          ))}
        </div>
      </div>

      <div className="form-card">
        <label><FaUserFriends /> Perfil dos Viajantes:</label>
        <div className="select-group">
          {perfis.map(p => (
            <button key={p} className="card-btn">{p}</button>
          ))}
        </div>
      </div>

      <div className="form-card">
        <label><FaTags /> Preferências:</label>
        <div className="select-group">
          {tagsPreferencias.map(p => (
            <button key={p} className="tag-btn" onClick={() => togglePreferencia(p)}>{p}</button>
          ))}
        </div>
      </div>

      <div className="form-card">
        <label><FaMoneyBillWave /> Orçamento:</label>
        <div className="select-group">
          {orcamentos.map(o => (
            <button key={o} className="card-btn">{o}</button>
          ))}
        </div>
      </div>

      <div className="form-card">
        <label>Restrições:</label>
        <input type="text" placeholder="Ex: Evitar trilhas, Sem carne vermelha..." />
      </div>

      <button className="btn-enviar">✈️ Gerar Roteiro</button>
    </div>
  );
}
