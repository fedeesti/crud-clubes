export interface Team {
  id: number;
  area: Area;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address?: string;
  phone?: string;
  website?: string;
  email?: string;
  founded?: number;
  clubColors: string;
  venue?: string;
  lastUpdated: Date;
}

interface Area {
  id: number;
  name: string;
}

export type TeamPreview = Pick<Team, 'area' | 'name' | 'id'>;
