import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Dashboard RH</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          <h3 className="text-lg font-medium">Entradas em 2025</h3>
          <p className="text-2xl">12</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          <h3 className="text-lg font-medium">Saídas em 2025</h3>
          <p className="text-2xl">5</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          <h3 className="text-lg font-medium">Total Lisboa</h3>
          <p className="text-2xl">68</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          <h3 className="text-lg font-medium">Total Porto</h3>
          <p className="text-2xl">32</p>
        </div>
      </div>
    </div>
  );
}