import React, { useState } from "react";

interface Props {
    onAddMission: (mission: { name: string; startDate: string; goal: string; crew: string[] }) => void;
}

const MissionForm: React.FC<Props> = ({ onAddMission }) => {
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [goal, setGoal] = useState("");
    const [crew, setCrew] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddMission({ name, startDate, goal, crew: crew.split(",") });
        setName("");
        setStartDate("");
        setGoal("");
        setCrew("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Название миссии" value={name} onChange={e => setName(e.target.value)} required />
            <input placeholder="Дата начала" value={startDate} onChange={e => setStartDate(e.target.value)} type="date" required />
            <input placeholder="Цель" value={goal} onChange={e => setGoal(e.target.value)} required />
            <input placeholder="Экипаж (через запятую)" value={crew} onChange={e => setCrew(e.target.value)} required />
            <button type="submit">Добавить миссию</button>
        </form>
    );
};

export default MissionForm;
