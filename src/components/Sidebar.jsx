import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <FaMapMarkedAlt />
        <span>TuristicRoute</span>
      </div>
      <p>Planeje sua viagem com ajuda da IA e descubra o melhor de cada destino.</p>
    </div>
  )
}
