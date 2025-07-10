import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string, id: string | null) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const abort = new AbortController();
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          headers: {
            'x-rapidapi-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
          },
          signal: abort.signal,
        });
        const data = await response.json();

        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => {
      abort.abort();
    };
  }, [url, id]);

  return { data, isLoading, error };
};
