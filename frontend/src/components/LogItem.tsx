import React from 'react';
import { Log } from '../types/log';


const LogItem: React.FC<Log> = ({ type, missionName, timestamp }) => {
  return (
    <li>
      <strong>{type}</strong> — <em>{missionName}</em> — {new Date(timestamp).toLocaleString()}
    </li>
  );
};

export default LogItem;
