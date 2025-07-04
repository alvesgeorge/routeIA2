import { FaGlobeAmericas } from 'react-icons/fa'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <FaGlobeAmericas size={28} color="#3b82f6" />
        <span>TuristicRoute</span>
      </div>
      <p>
        Planeje sua viagem com ajuda da IA e descubra o melhor de cada destino.
      </p>
    </aside>
  )
}
