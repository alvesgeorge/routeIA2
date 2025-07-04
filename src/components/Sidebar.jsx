import { FaMapMarkedAlt, FaRegCalendarAlt, FaCog } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <FaMapMarkedAlt />
        TuristicRoute
      </div>
      <nav className="mt-8 flex flex-col gap-4 text-gray-700 font-medium">
        <a href="#" className="flex items-center gap-2 hover:text-blue-600">
          <FaRegCalendarAlt />
          Criar Roteiro
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-blue-600">
          <FaCog />
          Configurações
        </a>
      </nav>
    </aside>
  );
}
