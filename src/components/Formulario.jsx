import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaMoneyBillWave, FaExclamationTriangle, FaList } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Formulario() {
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFim, setDataFim] = useState(null);
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);
  const [preferencias, setPreferencias] = useState([]);
  const [restricoes, setRestricoes] = useState([]);

  const perfis = ['Família', 'Casal', 'Aventura', 'Gastronomia', 'Cultural'];

  const opcoesPreferencias = ['Museus', 'Natureza', 'Comida', 'Noite', 'Compras'];
  const opcoesRestricoes = ['Vegetariano', 'Mobilidade reduzida', 'Baixo custo', 'Pet Friendly'];

  const toggleSelecionado = (item, lista, setLista) => {
    setLista(lista.includes(item) ? lista.filter(i => i !== item) : [...lista, item]);
  };

  const gerarRoteiro = async () => {
    const dados = {
      dataInicio,
      dataFim,
      perfil: perfilSelecionado,
      preferencias,
      restricoes
    };

    const resposta = await fetch('/api/gerar-roteiro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();
    console.log(resultado);
  };

  return (
    <div className="glass p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><FaList /> Gerar Roteiro</h2>

      {/* Datas */}
      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Data de Início</label>
        <div className="flex items-center border rounded-lg px-3 bg-white">
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <DatePicker
            selected={dataInicio}
            onChange={setDataInicio}
            dateFormat="dd/MM/yyyy"
            className="w-full py-2 outline-none"
            placeholderText="Selecione a data"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Data de Fim</label>
        <div className="flex items-center border rounded-lg px-3 bg-white">
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <DatePicker
            selected={dataFim}
            onChange={setDataFim}
            dateFormat="dd/MM/yyyy"
            className="w-full py-2 outline-none"
            placeholderText="Selecione a data"
          />
        </div>
      </div>

      {/* Perfil */}
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700">Perfil do Viajante</label>
        <div className="flex flex-wrap gap-2">
          {perfis.map((p, i) => (
            <button
              key={i}
              onClick={() => setPerfilSelecionado(p)}
              className={`px-4 py-2 rounded-full border ${perfilSelecionado === p ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-gray-800 border-gray-300'}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Preferências */}
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700">Preferências</label>
        <div className="flex flex-wrap gap-2">
          {opcoesPreferencias.map((pref, i) => (
            <button
              key={i}
              onClick={() => toggleSelecionado(pref, preferencias, setPreferencias)}
              className={`px-4 py-2 rounded-full border ${preferencias.includes(pref) ? 'bg-green-500 text-white border-green-500' : 'bg-gray-100 text-gray-800 border-gray-300'}`}
            >
              {pref}
            </button>
          ))}
        </div>
      </div>

      {/* Restrições */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Restrições</label>
        <div className="flex flex-wrap gap-2">
          {opcoesRestricoes.map((rest, i) => (
            <button
              key={i}
              onClick={() => toggleSelecionado(rest, restricoes, setRestricoes)}
              className={`px-4 py-2 rounded-full border ${restricoes.includes(rest) ? 'bg-red-500 text-white border-red-500' : 'bg-gray-100 text-gray-800 border-gray-300'}`}
            >
              {rest}
            </button>
          ))}
        </div>
      </div>

      {/* Botão */}
      <button
        onClick={gerarRoteiro}
        className="btn-enviar text-white font-semibold"
      >
        Gerar Roteiro Turístico
      </button>
    </div>
  );
}
