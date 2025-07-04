import React from 'react'

export default function Resultado({ resultado }) {
  if (!resultado) return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <code>Clique em "Gerar Roteiro" para começar.</code>
    </div>
  )

  if (resultado.loading) return <p style={{ textAlign: 'center' }}>Gerando roteiro...</p>
  if (resultado.error) return <p style={{ color: 'red' }}>{resultado.error}</p>

  return (
    <div style={{ marginTop: '30px', padding: '20px', whiteSpace: 'pre-wrap', fontFamily: 'monospace', background: '#fff', borderRadius: '10px' }}>
      {JSON.stringify(resultado.data, null, 2)}
    </div>
  )
}
