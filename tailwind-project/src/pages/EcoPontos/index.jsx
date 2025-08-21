import React, { useState } from "react";

function EcoPontos() {
  const [ecoPoints, setEcoPoints] = useState([]); // lista inicialmente vazia
  const [showModal, setShowModal] = useState(false); // controla modal
  const [newEcoPoint, setNewEcoPoint] = useState({ id: "", location: "" });

  const handleAddEcoPoint = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    setNewEcoPoint({ ...newEcoPoint, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newEcoPoint.id || !newEcoPoint.location) return;

    const newPoint = {
      id: newEcoPoint.id,
      location: newEcoPoint.location,
      status: "Empty",
      capacity: "0%",
      updated: new Date().toLocaleString(),
    };

    setEcoPoints([...ecoPoints, newPoint]);
    setNewEcoPoint({ id: "", location: "" });
    setShowModal(false);
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#0e1b14] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Eco Points
          </p>
          <button
            onClick={handleAddEcoPoint}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7f3ed] text-[#0e1b14] text-sm font-medium leading-normal"
          >
            <span className="truncate">Add Eco Point</span>
          </button>
        </div>

        {/* Tabela só aparece se houver dados */}
        {ecoPoints.length > 0 && (
          <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-lg border border-[#d0e7db] bg-[#f8fcfa]">
              <table className="flex-1">
                <thead>
                  <tr className="bg-[#f8fcfa]">
                    <th className="px-4 py-3 text-left text-[#0e1b14] w-[200px] text-sm font-medium">
                      Eco Point ID
                    </th>
                    <th className="px-4 py-3 text-left text-[#0e1b14] w-[400px] text-sm font-medium">
                      Location
                    </th>
                    <th className="px-4 py-3 text-left text-[#0e1b14] w-40 text-sm font-medium">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-[#0e1b14] w-40 text-sm font-medium">
                      Capacity
                    </th>
                    <th className="px-4 py-3 text-left text-[#0e1b14] w-[250px] text-sm font-medium">
                      Last Updated
                    </th>
                    <th className="px-4 py-3 text-left text-[#4e9773] w-40 text-sm font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ecoPoints.map((point) => (
                    <tr key={point.id} className="border-t border-t-[#d0e7db]">
                      <td className="px-4 py-2">{point.id}</td>
                      <td className="px-4 py-2 text-[#4e9773]">
                        {point.location}
                      </td>
                      <td className="px-4 py-2">
                        <button className="w-full h-8 px-4 rounded-lg bg-[#e7f3ed] text-sm font-medium">
                          {point.status}
                        </button>
                      </td>
                      <td className="px-4 py-2">{point.capacity}</td>
                      <td className="px-4 py-2">{point.updated}</td>
                      <td className="px-4 py-2 text-[#4e9773] font-bold">
                        View Details
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
              <h2 className="text-xl font-bold mb-4">Add Eco Point</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="id"
                  placeholder="Eco Point ID"
                  value={newEcoPoint.id}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={newEcoPoint.location}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2"
                />
                <div className="flex justify-end gap-2 mt-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-green-600 text-white"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EcoPontos;
