import React from "react";
import { FunnelChart, Funnel, Tooltip, Legend, LabelList } from "recharts";

const GraficoEmbudo = () => {
  const data = [
    { stage: "Enviados", value: 1000, fill: "#8884d8" },
    { stage: "Entregados", value: 800, fill: "#82ca9d" },
    { stage: "Leídos", value: 600, fill: "#ffc658" },
  ];

  return (
    <FunnelChart width={400} height={300}>
      <Funnel
        dataKey="value"
        data={data}
        isAnimationActive
        label={<CustomLabel />}
      >
        <LabelList dataKey="stage" position="insideTop" />
        
      </Funnel>
      <Tooltip />
      <Legend />
    </FunnelChart>
  );
};

const CustomLabel = ({ x, y, width, height, value }) => {
  return (
    <g>
      <text x={x + width / 2} y={y + height / 2}>
      </text>
      <text x={x + width / 2} y={y + 40} fill="#F0F0F0" textAnchor="middle">
        {value}
      </text>
    </g>
  );
};

export default GraficoEmbudo;
