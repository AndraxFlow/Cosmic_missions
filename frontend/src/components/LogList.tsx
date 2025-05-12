import React from 'react';
import LogItem from './LogItem';

interface Log {
  id: number;
  type: string;
  missionName: string;
  timestamp: string;
}

interface LogListProps {
  logs: Log[];
}

const LogList: React.FC<LogListProps> = ({ logs }) => {
  return (
    <ul>
      {logs.map((log) => (
        <LogItem
          key={log.id}
          type={log.type}
          missionName={log.missionName}
          timestamp={log.timestamp}
        />
      ))}
    </ul>
  );
};

export default LogList;
