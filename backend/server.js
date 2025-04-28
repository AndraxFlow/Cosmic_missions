const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const filePath = __dirname + '/missions.json';

// Получить все миссии
app.get('/missions', (req, res) => {
    const data = JSON.parse(fs.readFileSync(filePath));
    res.json(data);
});

// Создать новую миссию
app.post('/missions', (req, res) => {
    const newMission = req.body;
    const data = JSON.parse(fs.readFileSync(filePath));
    newMission.id = Date.now();
    data.push(newMission);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.status(201).json(newMission);
});

// Удалить миссию
app.delete('/missions/:id', (req, res) => {
    const id = Number(req.params.id);
    let data = JSON.parse(fs.readFileSync(filePath));
    data = data.filter(mission => mission.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.status(200).json({ message: "Mission deleted" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
