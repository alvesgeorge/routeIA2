import { useState } from 'react'
import { FaMapMarkerAlt, FaUsers, FaHeart, FaBan, FaMoneyBillAlt, FaCalendarAlt } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Formulario() {
  const [dataInicio, setDataInicio] = useState(null)
  const [dataFim, setDataFim] = useState(null)

  return (
    <div className="form-container glass">
      <h1>Gerador de Roteiro Turístico com IA</h1>
      <form className="formulario">
        <label>
          <FaMapMarkerAlt /> Destino:
          <input type="text" placeholder="Ex: Santiago, Chile" />
        </label>

        <label>
          <FaCalendarAlt /> Data de Início:
          <DatePicker selected={dataInicio} onChange={(date) => setDataInicio(date)} dateFormat="dd/MM/yyyy" />
        </label>

        <label>
          <FaCalendarAlt /> Data de Fim:
          <DatePicker selected={dataFim} onChange={(date) => setDataFim(date)} dateFormat="dd/MM/yyyy" />
        </label>
       
 <label>
          <FaUsers /> Perfil dos viajantes:
          <div className="perfil-opcoes">
            {['Casal', 'Família', 'Sozinho', 'Amigos', 'Sênior'].map((p) => (
              <button type="button" className="perfil-btn" key={p}>
                {p}
              </button>
            ))}
          </div>
        </label>

        <label>
          <FaHeart /> Preferências:
          <div className="icone-selecao">
            {['Cultura', 'Natureza', 'Gastronomia', 'Aventura', 'Relaxamento'].map((item) => (
              <button type="button" className="icone-btn" key={item}>
                {item}
              </button>
            ))}
          </div>
        </label>

        <label>
          <FaBan /> Restrições:
          <div className="icone-selecao">
            {['Acessibilidade', 'Vegetariano', 'Sem glúten', 'Pet-friendly'].map((item) => (
              <button type="button" className="icone-btn restricao" key={item}>
                {item}
              </button>
            ))}
          </div>
        </label>

        <label>
          <FaMoneyBillAlt /> Orçamento:
          <select>
            <option value="baixo">Baixo</option>
            <option value="médio">Médio</option>
            <option value="alto">Alto</option>
          </select>
        </label>

        <button type="submit" className="btn-enviar">Gerar Roteiro</button>
      </form>
    </div>
  )
}
