// types/mission.ts

export interface Mission {
    id: number;
    name: string;
    date: string;
    target: string;
    status: 'Запланировано' | 'В подготовке' | 'В процессе' | 'Завершено';  
  }
  