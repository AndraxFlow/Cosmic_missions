// CustomLegend.tsx
import React from 'react';

interface LegendProps {
  payload?: any[];
}

const CustomLegend: React.FC<LegendProps> = ({ payload }) => {
  return (
    <ul className="custom-legend">
      {payload?.map((entry, index) => (
        <li key={`item-${index}`} className="custom-legend-item">
          <span
            className="custom-legend-icon"
            style={{ backgroundColor: entry.color }}
          ></span>
          <span className="custom-legend-text">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default CustomLegend;
