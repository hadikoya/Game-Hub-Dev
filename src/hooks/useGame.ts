import { useEffect, useState } from 'react';
import appClient from '../services/api-clinte';
import apiClinte from '../services/api-clinte';
import { CanceledError } from 'axios';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const contller = new AbortController();
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
useEffect(()=>{
    apiClinte.get<FetchGamesResponse>('/games', { signal: contller.signal })
    .then((res) => {setGames(res.data.results);
    })
    .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
    });
},[]);
  return { games, error };
};

export default useGame;