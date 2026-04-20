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
  metacritic: number;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const contller = new AbortController();
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);



useEffect(()=>{
    setIsLoading(true);
    apiClinte.get<FetchGamesResponse>('/games', { signal: contller.signal })
    .then((res) => {setGames(res.data.results);
    setIsLoading(false);
    })
    .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
    });
},[]);
  return { games, error, isLoading };
};

export default useGame;