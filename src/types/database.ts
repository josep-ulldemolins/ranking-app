export interface Profile {
  id: string;
  name: string;
  role: 'user' | 'admin';
}

export interface Action {
  id: string;
  category_id: string;
  name: string;
  points: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  total_points: number;
}