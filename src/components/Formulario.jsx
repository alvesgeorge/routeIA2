import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Resultado from './Resultado'

export default function Formulario() {
  const [formulario, setFormulario] = useState({
    destino: '',
    inicio: null,
    fim: null,
    roteiro: 'Cultural',
    perfil: '',
    preferencias: '',
    restricoes: '',
    orcamento: 'Médio',
  })

  const [resultado, setResultado] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormulario((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (date, name) => {
    setFormulario((prev) => ({ ...prev, [name]: date }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setResultado({ loading: true })

    try {
      const res = await fetch('/api/gerarRoteiro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formulario),
      })

      const data = await res.json()
      setResultado({ loading: false, data })
    } catch (error) {
      console.error(error)
      setResultado({ loading: false, error: 'Erro ao gerar roteiro.' })
    }
  }

  return (
    <>
      <form className="glass" onSubmit={handleSubmit}>
        <div className="formulario">
          <label>Destino:
            <input
              type="text"
              name="destino"
              value={formulario.destino}
              onChange={handleChange}
              placeholder="Digite o destino"
              required
            />
          </label>

          <label>Data de Início:
            <DatePicker
              selected={formulario.inicio}
              onChange={(date) => handleDateChange(date, 'inicio')}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/aaaa"
            />
          </label>

          <label>Data de Fim:
            <DatePicker
              selected={formulario.fim}
              onChange={(date) => handleDateChange(date, 'fim')}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/aaaa"
            />
          </label>

          <label>Tipo de Roteiro:
            <select name="roteiro" value={formulario.roteiro} onChange={handleChange}>
              <option value="Cultural">Cultural</option>
              <option value="Aventura">Aventura</option>
              <option value="Gastronômico">Gastronômico</option>
              <option value="Romântico">Romântico</option>
              <option value="Personalizado">Personalizado</option>
            </select>
          </label>

          <label>Perfil dos Viajantes:
            <textarea
              name="perfil"
              value={formulario.perfil}
              onChange={handleChange}
              placeholder="Ex: Casal, Família, Mochileiros..."
            />
          </label>

          <label>Preferências:
            <input
              type="text"
              name="preferencias"
              value={formulario.preferencias}
              onChange={handleChange}
              placeholder="Ex: museus, trilhas, praia..."
            />
          </label>

          <label>Orçamento:
            <select name="orcamento" value={formulario.orcamento} onChange={handleChange}>
              <option value="Econômico">Econômico</option>
              <option value="Médio">Médio</option>
              <option value="Alto">Alto</option>
            </select>
          </label>

          <label>Restrições:
            <input
              type="text"
              name="restricoes"
              value={formulario.restricoes}
              onChange={handleChange}
              placeholder="Ex: acessibilidade, alimentação..."
            />
          </label>

          <button className="btn-enviar" type="submit">Gerar Roteiro</button>
        </div>
      </form>

     <Resultado roteiro={resultado?.data} />  
    </>
  )
}
