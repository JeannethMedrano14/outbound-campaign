import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { mes: "Enero", entregados: 400, noEntregados: 240 },
  { mes: "Febrero", entregados: 300, noEntregados: 456 },
  { mes: "Marzo", entregados: 500, noEntregados: 600 },
];

const GraficoBarrasHorizontales = () => {
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="mes" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="entregados" fill="#8884d8" />
      <Bar dataKey="noEntregados" fill="#82ca9d" />
    </BarChart>
  );
};

export default GraficoBarrasHorizontales;
