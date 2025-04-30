import React from 'react';

interface MissionStatusProps {
  status: 'Запланировано' | 'В подготовке' | 'В процессе' | 'Завершено';
}

const MissionStatus: React.FC<MissionStatusProps> = ({ status }) => {
    const statuses = [
        { name: 'Запланировано', color: '#FFA500' }, // оранжевый
        { name: 'В подготовке', color: '#FFFF00' },  // желтый
        { name: 'В процессе', color: '#1E90FF' },    // голубой
        { name: 'Завершено', color: '#32CD32' }     // зеленый
      ];
      
      const currentIndex = statuses.findIndex(item => item.name === status);
    
      return (
        <div style={statusContainer}>
          <div style={statusLineContainer}>
            {statuses.map((statusItem, index) => (
              <React.Fragment key={index}>
                <div
                  style={{
                    ...statusPoint,
                    backgroundColor: index <= currentIndex ? statusItem.color : '#ccc',
                  }}
                />
                {index < statuses.length - 1 && (
                  <div
                    style={{
                      ...statusLine,
                      backgroundColor: index < currentIndex ? statuses[index + 1].color : '#ccc',
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <div style={statusLabelsContainer}>
            {statuses.map((statusItem, index) => (
              <span 
                key={index}
                style={{
                  ...statusLabel,
                  color: index <= currentIndex ? statusItem.color : '#ccc',
                  fontWeight: index === currentIndex ? 'bold' : 'normal'
                }}
              >
                {statusItem.name}
              </span>
            ))}
          </div>
        </div>
      );
    };

const statusContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '10px',
    };
    
const statusLineContainer: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    };
    
    const statusPoint: React.CSSProperties = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    transition: 'background-color 0.3s ease',
    zIndex: 2,
    };
    
    const statusLine: React.CSSProperties = {
    flex: 1,
    height: '4px',
    backgroundColor: '#ccc',
    transition: 'background-color 0.3s ease',
    };
    
    const statusLabelsContainer: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '8px',
    };
    
    const statusLabel: React.CSSProperties = {
    fontSize: '12px',
    textAlign: 'center',
    flex: 1,
    transition: 'color 0.3s ease',
    };

export default MissionStatus;
