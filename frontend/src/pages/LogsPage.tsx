import React, { useEffect, useState } from 'react';
import LogList from '../components/LogList';
import { fetchLogs } from '../services/apiService';

interface Log {
  id: number;
  type: string;
  missionName: string;
  timestamp: string;
}

const LogsPage: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    fetchLogs().then(setLogs);
  }, []);

  return (
    <div className="card">
      <h1>Журнал действий</h1>
      <LogList logs={logs} />
    </div>
  );
};

export default LogsPage;
