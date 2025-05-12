const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

const filePath = path.join(__dirname, 'missions.json');

app.use(cors());
app.use(express.json());

// ✅ Проверка на наличие файла и инициализация
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([], null, 2));
}

// 🔍 Функция безопасного чтения JSON
const readMissions = () => {
  const raw = fs.readFileSync(filePath);
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error('Ошибка чтения missions.json:', e);
    return [];
  }
};

// 🔍 Функция безопасной записи
const writeMissions = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// ✅ Получить все миссии
app.get('/missions', (req, res) => {
  const missions = readMissions();
  res.json(missions);
});

// ✅ Добавить миссию
app.post('/missions', (req, res) => {
  const newMission = req.body;
  const missions = readMissions();
  newMission.id = Date.now(); // простая генерация ID
  missions.push(newMission);
  writeMissions(missions);
  res.status(201).json(newMission);
});

// ✅ Обновить статус миссии
app.put('/missions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;
  const missions = readMissions();
  const mission = missions.find((m) => m.id === id);
  if (mission) {
    mission.status = status;
    writeMissions(missions);
    res.json(mission);
  } else {
    res.status(404).send('Mission not found');
  }
});

// ✅ Удалить миссию
app.delete('/missions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let missions = readMissions();
  missions = missions.filter((m) => m.id !== id);
  writeMissions(missions);
  res.status(204).send();
});

// ✅ Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
