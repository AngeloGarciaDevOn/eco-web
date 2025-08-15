import React, { useState } from "react";

function EcoPontos() {
  const [ecoPontos, setEcoPontos] = useState([
    { token: "A1B2C3D4E5F6", location: "Downtown Recycling Center", type: "Recycling", status: "Active", updated: "2024-01-15 10:00 AM" },
    { token: "G7H8I9J0K1L2", location: "Uptown Composting Facility", type: "Composting", status: "Inactive", updated: "2023-12-20 02:30 PM" },
    { token: "M3N4O5P6Q7R8", location: "Industrial Park Waste Station", type: "General Waste", status: "Active", updated: "2024-02-01 09:15 AM" },
  ]);

  const [filters, setFilters] = useState({ location: "", type: "", status: "" });

  const [formData, setFormData] = useState({
    token: "",
    location: "",
    type: "",
    status: "Active",
  });

  // Atualiza o valor de um campo do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Adiciona novo Eco Ponto
  const handleAddEcoPonto = () => {
    if (!formData.token || !formData.location || !formData.type) {
      alert("Preencha todos os campos!");
      return;
    }
    const newEcoPonto = {
      ...formData,
      updated: new Date().toLocaleString(),
    };
    setEcoPontos((prev) => [...prev, newEcoPonto]);
    setFormData({ token: "", location: "", type: "", status: "Active" });
  };

  // Aplica filtros
  const filteredEcoPontos = ecoPontos.filter((ponto) => {
    return (
      (filters.location ? ponto.location.includes(filters.location) : true) &&
      (filters.type ? ponto.type === filters.type : true) &&
      (filters.status ? ponto.status === filters.status : true)
    );
  });

  return (
    <div className="px-10 flex flex-col py-5 text-white">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center p-4">
        <h1 className="text-[32px] font-bold">Eco Pontos</h1>
      </div>

      {/* Filtros */}
      <div className="flex gap-3 p-3 flex-wrap">
        <select
          className="bg-[#293238] rounded-lg p-2"
          value={filters.location}
          onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
        >
          <option value="">Filtrar por Local</option>
          {ecoPontos.map((p) => (
            <option key={p.token} value={p.location}>
              {p.location}
            </option>
          ))}
        </select>

        <select
          className="bg-[#293238] rounded-lg p-2"
          value={filters.type}
          onChange={(e) => setFilters((prev) => ({ ...prev, type: e.target.value }))}
        >
          <option value="">Filtrar por Tipo</option>
          <option value="Recycling">Recycling</option>
          <option value="Composting">Composting</option>
          <option value="General Waste">General Waste</option>
        </select>

        <select
          className="bg-[#293238] rounded-lg p-2"
          value={filters.status}
          onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
        >
          <option value="">Filtrar por Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Tabela */}
      <div className="overflow-hidden rounded-lg border border-[#3c4a53]">
        <table className="w-full">
          <thead>
            <tr className="bg-[#1c2226]">
              <th className="p-3 text-left">Token</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {filteredEcoPontos.map((ponto, index) => (
              <tr key={index} className="border-t border-[#3c4a53]">
                <td className="p-3">{ponto.token}</td>
                <td className="p-3">{ponto.location}</td>
                <td className="p-3">{ponto.type}</td>
                <td className="p-3">{ponto.status}</td>
                <td className="p-3">{ponto.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formulário */}
      <h2 className="mt-6 text-xl font-bold">Add New Eco Point</h2>
      <div className="flex flex-wrap gap-4 mt-3">
        <input
          name="token"
          placeholder="Token"
          value={formData.token}
          onChange={handleChange}
          className="bg-[#293238] p-3 rounded-lg"
        />
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="bg-[#293238] p-3 rounded-lg"
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="bg-[#293238] p-3 rounded-lg"
        >
          <option value="">Select Type</option>
          <option value="Recycling">Recycling</option>
          <option value="Composting">Composting</option>
          <option value="General Waste">General Waste</option>
        </select>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="bg-[#293238] p-3 rounded-lg"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          onClick={handleAddEcoPonto}
          className="bg-[#1993e5] text-white p-3 rounded-lg font-bold"
        >
          Add Eco Point
        </button>
      </div>
    </div>
  );
}

export default EcoPontos;
