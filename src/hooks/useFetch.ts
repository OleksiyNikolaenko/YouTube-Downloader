import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string, id: string | null) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const abort = new AbortController();
    const getQualities = async () => {
      try {
        setLoading(true);

        const response = await fetch(url as string, {
          headers: {
            'x-rapidapi-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
          },
          signal: abort.signal,
        });
        const data = await response.json();

        console.log('Fetched data:', data);

        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    getQualities();

    return () => {
      abort.abort();
    };
  }, [url, id]);

  return { data, isLoading, error };
};
