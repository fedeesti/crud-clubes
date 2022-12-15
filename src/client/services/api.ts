import axios from 'axios';
import { Team } from '../types/Team';

export async function getTeamList(): Promise<Team[]> {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/teams');
    return response.data;
  } catch (err) {
    throw new Error('No se pudo cargar el listado de equipos');
  }
}
