import React from "react";

const colaboradores = [
  {
    nome: "Joana Silva",
    idade: 34,
    email: "joana.silva@empresa.pt",
    telefone: "912345678",
    direcao: "Subscrição",
    departamento: "Técnico",
    localizacao: "Lisboa"
  },
  {
    nome: "Carlos Ferreira",
    idade: 41,
    email: "carlos.ferreira@empresa.pt",
    telefone: "919876543",
    direcao: "Comercial",
    departamento: "Vendas Diretas",
    localizacao: "Porto"
  }
];

export default function Employees() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Lista de Colaboradores</h2>
      <table className="min-w-full table-auto border">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-2">Nome</th>
            <th className="p-2">Idade</th>
            <th className="p-2">Email</th>
            <th className="p-2">Telefone</th>
            <th className="p-2">Direção</th>
            <th className="p-2">Departamento</th>
            <th className="p-2">Localização</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colab, idx) => (
            <tr key={idx} className="border-t dark:border-gray-700">
              <td className="p-2">{colab.nome}</td>
              <td className="p-2">{colab.idade}</td>
              <td className="p-2">{colab.email}</td>
              <td className="p-2">{colab.telefone}</td>
              <td className="p-2">{colab.direcao}</td>
              <td className="p-2">{colab.departamento}</td>
              <td className="p-2">{colab.localizacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}