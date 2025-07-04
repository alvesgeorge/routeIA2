import React, { useState } from 'react'
import { GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import {
  FaUserFriends,
  FaPlane,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaTags,
  FaCalendarAlt,
  FaMapPin
} from 'react-icons/fa'
import './Formulario.css'

export default function Formulario() {
  const [destino, setDestino] = useState('')
  const [dataInicio, setDataInicio] = useState('')
  const [dataFim, setDataFim] = useState('')
  const [tipoRoteiro, setTipoRoteiro] = useState('Cultural')
  const [perfil, setPerfil] = useState('')
  const [orcamento, setOrcamento] = useState('Médio')
  const [preferencias, setPreferencias] = useState([])
  const [restricoes, setRestricoes] = useState('')
  const [resultado, setResultado] = useState(null)
  const [carregando, setCarregando] = useState(false)

  const tiposRoteiro = ['Cultural', 'Gastronômico', 'Natureza', 'Romântico']
  const perfis = ['Família', 'Casal', 'Solo', 'Melhor Idade']
  const orcamentos = ['Econômico', 'Médio', 'Alto']
  const tagsPreferencias = ['Museus', 'Trilhas', 'Praia', 'Gastronomia']

  function togglePreferencia(item) {
    setPreferencias(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!destino) {
      alert('Selecione um destino.')
      return
    }
    setCarregando(true)
    const dados = {
      destino,
      dataInicio,
      dataFim,
      tipoRoteiro,
      perfil,
      preferencias,
      orcamento,
      restricoes
    }
    try {
      const res = await fetch('/api/gerarRoteiro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      })
      const json = await res.json()
      setResultado(json)
    } catch (err) {
      alert('Erro ao gerar roteiro')
      console.error(err)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2><FaPlane /> Gerador de Roteiros com IA</h2>

      <div className="form-card">
        <label><FaMapPin /> Destino:</label>
        <GeoapifyGeocoderAutocomplete
          placeholder="Digite o destino"
          apiKey={VITE_GEOAPIFY_KEY}
          placeSelect={v => setDestino(v?.properties?.formatted || '')}
          type="city"
          lang="pt"
          className="autocomplete-cidade"
        />
      </div>

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

      <div className="form-card">
        <label><FaMapMarkedAlt /> Tipo de Roteiro:</label>
        <div className="select-group">
          {tiposRoteiro.map(t => (
            <button
              key={t}
              type="button"
              className={`card-btn${tipoRoteiro === t ? ' ativo' : ''}`}
              onClick={e => { e.preventDefault(); setTipoRoteiro(t) }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="form-card">
        <label><FaUserFriends /> Perfil:</label>
        <div className="select-group">
          {perfis.map(p => (
            <button
              key={p}
              type="button"
              className={`card-btn${perfil === p ? ' ativo' : ''}`}
              onClick={e => { e.preventDefault(); setPerfil(p) }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="form-card">
        <label><FaTags /> Preferências:</label>
        <div className="select-group">
          {tagsPreferencias.map(tag => (
            <button
              key={tag}
              type="button"
              className={`tag-btn${preferencias.includes(tag) ? ' ativo' : ''}`}
              onClick={e => { e.preventDefault(); togglePreferencia(tag) }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="form-card">
        <label><FaMoneyBillWave /> Orçamento:</label>
        <div className="select-group">
          {orcamentos.map(o => (
            <button
              key={o}
              type="button"
              className={`card-btn${orcamento === o ? ' ativo' : ''}`}
              onClick={e => { e.preventDefault(); setOrcamento(o) }}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      <div className="form-card">
        <label>Restrições:</label>
        <input
          type="text"
          placeholder="Ex: acessibilidade, alimentação..."
          value={restricoes}
          onChange={e => setRestricoes(e.target.value)}
        />
      </div>

      <button className="btn-enviar" type="submit" disabled={carregando}>
        {carregando ? 'Gerando Roteiro...' : '✈️ Gerar Roteiro'}
      </button>

      {resultado && (
        <div style={{ marginTop: 32 }}>
          <pre>{JSON.stringify(resultado, null, 2)}</pre>
        </div>
      )}
    </form>
  )
}
