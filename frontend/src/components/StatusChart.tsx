// src/components/StatusChart.tsx
import React from 'react';
import { Mission } from '../types/mission';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import CustomLegend from './CustomLegend'; // импорт кастомной легенды

interface Props {
  missions: Mission[];
}

const COLORS = ['#00d1ff', '#00e676', '#ff5252', '#ffca28'];

const StatusChart: React.FC<Props> = ({ missions }) => {
  const statusCounts = missions.reduce((acc, m) => {
    acc[m.status] = (acc[m.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(statusCounts).map(([status, count]) => ({
    name: status,
    value: count,
  }));

  return (
    <div className="chart-container">
      <PieChart width={300} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label
          outerRadius={100}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend content={<CustomLegend />} />
      </PieChart>
    </div>
  );
};

export default StatusChart;

