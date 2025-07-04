import React from 'react'
import './Resultado.css'

export default function Resultado({ roteiro }) {
  if (!roteiro || !Array.isArray(roteiro) || roteiro.length === 0) return null
  return (
    <div className="resultado-container">
      {roteiro.map((dia, i) => (
        <div className="dia-card" key={i}>
          <h2 className="data">{new Date(dia.data).toLocaleDateString('pt-BR')}</h2>
          {dia.atividades.map((atv, j) => (
            <div className="atividade" key={j}>
              <h3>{atv.hora} – {atv.local}</h3>
              <p>{atv.descricao}</p>
              <div className="detalhes">
                <span><strong>Transporte:</strong> {atv.transporte}</span>
                <span><strong>Custo:</strong> R$ {atv.custo}</span>
                {atv.restauranteProximo && (
                  <span><strong>Próx.:</strong> {atv.restauranteProximo}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
