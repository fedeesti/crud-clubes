import { useEffect, useState } from 'react';
import { getTeamList } from '../services/api';
import { Team } from '../types/Team';

export function useFetchTeams() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchAllTeams = async () => {
      const teamList = await getTeamList();
      setTeams(teamList);
    };
    fetchAllTeams();
  }, []);

  return { teams };
}
