'use client';

import { useSearch } from '@/hooks';
import { useFetch } from '@/hooks/useFetch';
import { ScrollArea } from '../ui/scroll-area';
import { Spinner } from '../ui/spinner';

interface Quality {
  id: number;
  type: string;
  quality: string;
  bitrate: number;
  size: string;
  mime: string;
}

export const QualityList = () => {
  const { id, quality, setQuality, inputValue } = useSearch();
  const { data, isLoading } = useFetch<Quality[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/get_available_quality/${id}`,
    id,
  );

  if (!inputValue || !id) return null;

  return (
    <div className="h-56">
      {isLoading && (
        <Spinner className="flex h-full items-center justify-center" />
      )}
      {data && (
        <>
          <h2 className="my-4">
            Виберіть, з якою якістю ви хочете завантажити відео:{' '}
          </h2>
          <ScrollArea className="pr-2.5 sm:h-64 lg:h-70">
            <ul className="">
              {data
                ?.filter((item) => item.type === 'video')
                .map((item) => {
                  return (
                    <li
                      className={`my-1 flex cursor-pointer justify-between rounded-md border px-3 py-2 transition-all duration-150 ease-in-out empty:hidden hover:opacity-50 ${quality === item.id ? 'border-primary' : ''}`}
                      key={item.size}
                      onClick={() => setQuality(item.id)}>
                      <span className="text-xl">{item.quality}</span>
                    </li>
                  );
                })}
            </ul>
          </ScrollArea>
        </>
      )}
    </div>
  );
};
