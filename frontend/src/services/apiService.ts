import { Mission } from "../types/mission";

const API_URL = "http://localhost:5000/missions";

export async function fetchMissions(): Promise<Mission[]> {
    const response = await fetch(API_URL);
    return response.json();
}

export async function addMission(mission: Omit<Mission, "id">): Promise<Mission> {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mission),
    });
    return response.json();
}

export async function deleteMission(id: number): Promise<void> {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
