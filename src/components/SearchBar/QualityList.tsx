'use client';

import { useSearch } from '@/hooks';
import { useFetch } from '@/hooks/useFetch';

interface Quality {
  id: number;
  type: string;
  quality: string;
  bitrate: number;
  size: string;
  mime: string;
}

export const QualityList = () => {
  const { id } = useSearch();
  const { data, error, isLoading } = useFetch<Quality[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/get_available_quality/${id}`,
    id,
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <ul className="mt-4 h-[400px] overflow-y-auto">
        {data?.map((item) => {
          return (
            <li className="flex justify-between" key={item.size}>
              {item.quality}
              {item.bitrate}
            </li>
          );
        })}
      </ul>
    </>
  );
};

//найти ебаную ошибку
