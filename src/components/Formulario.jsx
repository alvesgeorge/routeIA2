import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaList, FaMoneyBillAlt, FaHeartBroken } from 'react-icons/fa';

export default function Formulario() {
  const [inicio, setInicio] = useState(null);
  const [fim, setFim] = useState(null);
  const [perfilSelecionado, setPerfilSelecionado] = useState('');
  const [preferencias, setPreferencias] = useState([]);
  const [restricoes, setRestricoes] = useState([]);

  const opcoesPerfil = ['Família', 'Casal', 'Sozinho', 'Amigos'];
  const opcoesPreferencias = ['Cultura', 'Natureza', 'Gastronomia', 'Compras'];
  const opcoesRestricoes = ['Acessibilidade', 'Alimentar', 'Mobilidade'];

  const toggleSelecionado = (valor, lista, setLista) => {
    setLista(prev =>
      prev.includes(valor) ? prev.filter(v => v !== valor) : [...prev, valor]
    );
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl p-8 rounded-xl w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        🌍 Gerador de Roteiros com IA
      </h2>

      {/* Destino */}
      <div className="mb-4">
        <label className="block mb-1 font-medium flex items-center gap-2">
          <FaMapMarkerAlt /> Destino:
        </label>
        <input type="text" placeholder="Digite o destino" className="w-full p-2 border rounded" />
      </div>

      {/* Data de Início */}
      <div className="mb-4">
        <label className="block mb-1 font-medium flex items-center gap-2">
          <FaCalendarAlt /> Data de Início:
        </label>
        <DatePicker
          selected={inicio}
          onChange={date => setInicio(date)}
          dateFormat="dd/MM/yyyy"
          className="w-full p-2 border rounded"
          placeholderText="dd/mm/aaaa"
        />
      </div>

      {/* Data de Fim */}
      <div className="mb-4">
        <label className="block mb-1 font-medium flex items-center gap-2">
          <FaCalendarAlt /> Data de Fim:
        </label>
        <DatePicker
          selected={fim}
          onChange={date => setFim(date)}
          dateFormat="dd/MM/yyyy"
          className="w-full p-2 border rounded"
          placeholderText="dd/mm/aaaa"
        />
      </div>

      {/* Tipo de Roteiro */}
      <div className="mb-4">
        <label className="block mb-1 font-medium flex items-center gap-2">
          <FaList /> Tipo de Roteiro:
        </label>
        <select className="w-full p-2 border rounded">
          <option value="cultural">Cultural</option>
          <option value="aventura">Aventura</option>
          <option value="gastronomico">Gastronômico</option>
          <option value="romantico">Romântico</option>
        </select>
      </div>

      {/* Perfil dos Viajantes */}
      <div className="mb-4">
        <label className="block mb-1 font-medium flex items-center gap-2">
          <FaUserFriends /> Perfil dos Viajantes:
        </label>
        <div className="flex flex-wrap gap-2">
          {opcoesPerfil.map(p => (
            <button
              key={p}
              onClick={() => setPerfilSelecionado(p)}
              className={`px-3 py-1 rounded-full border ${
                perfilSelecionado === p ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Preferências */}
      <div className="mb-4">
        <label className="block mb-1 font-medium flex items-center gap-2">
          <FaHeartBroken /> Preferências:
        </label>
        <div className="flex flex-wrap gap-2">
          {opcoesPreferencias.map(p => (
            <button
              key={p}
              onClick={() => toggleSelecionado(p, preferencias, setPreferencias)}
              className={`px-3 py-1 rounded-full border ${
                preferencias.includes(p) ? 'bg-green-600 text-white' : 'bg-white text-gray-700'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Restrições */}
      <div className="mb-4">
        <label className="block mb-1 font-medium flex items-center gap-2">
          <FaHeartBroken /> Restrições:
        </label>
        <div className="flex flex-wrap gap-2">
          {opcoesRestricoes.map(r => (
            <button
              key={r}
              onClick={() => toggleSelecionado(r, restricoes, setRestricoes)}
              className={`px-3 py-1 rounded-full border ${
                restricoes.includes(r) ? 'bg-red-600 text-white' : 'bg-white text-gray-700'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Orçamento */}
      <div className="mb-6">
        <label className="block mb-1 font-medium flex items-center gap-2">
          <FaMoneyBillAlt /> Orçamento:
        </label>
        <select className="w-full p-2 border rounded">
          <option value="baixo">Baixo</option>
          <option value="médio">Médio</option>
          <option value="alto">Alto</option>
        </select>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold transition">
        Gerar Roteiro
      </button>
    </div>
  );
}
