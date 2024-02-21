import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { mes: "Campaña_3", entregados: 400, noEntregados: 140 },
  { mes: "Campaña_2", entregados: 300, noEntregados: 56 },
  { mes: "Campaña_1", entregados: 500, noEntregados: 70 },
];

const GraficoBarrasVerticales = () => {
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mes" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="entregados" fill="#8884d8" />
      <Bar dataKey="noEntregados" fill="#82ca9d" />
    </BarChart>
  );
};

export default GraficoBarrasVerticales;
