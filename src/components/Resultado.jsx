
import React from 'react';

export default function Resultado({ roteiro }) {
  if (!roteiro || roteiro.length === 0) {
    return null;
  }

  return (
    <div className="resultado-container">
      {roteiro.map((dia, index) => (
        <div key={index} className="dia-card">
          <h2 className="data">{new Date(dia.data).toLocaleDateString('pt-BR')}</h2>
          {dia.atividades.map((atividade, idx) => (
            <div key={idx} className="atividade-card">
              <h3>{atividade.hora} - {atividade.local}</h3>
              <p>{atividade.descricao}</p>
              <div className="detalhes">
                <span><strong>Transporte:</strong> {atividade.transporte}</span>
                <span><strong>Custo:</strong> R$ {atividade.custo}</span>
                <span><strong>Restaurante próximo:</strong> {atividade.restauranteProximo}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
