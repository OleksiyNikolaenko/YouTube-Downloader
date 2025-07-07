'use client';

import { useSearch } from '@/hooks';
import { useFetch } from '@/hooks/useFetch';
import { QualityListItem } from '../QualityListItem/QualityListItem';
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
  const { id, inputValue } = useSearch();
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
                    <QualityListItem
                      key={item.size}
                      id={item.id}
                      alias={item.quality}
                      bitrate={item.bitrate}
                    />
                  );
                })}
            </ul>
          </ScrollArea>
        </>
      )}
    </div>
  );
};
