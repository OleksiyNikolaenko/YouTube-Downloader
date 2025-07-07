'use client';

import { useSearch } from '@/hooks';

export const QualityListItem = ({
  id,
  alias,
  bitrate,
}: {
  id: number;
  alias: string;
  bitrate: number;
}) => {
  const { quality, setQuality } = useSearch();

  return (
    <li
      className={`my-1 flex cursor-pointer justify-between rounded-md border px-3 py-2 transition-all duration-150 ease-in-out empty:hidden hover:opacity-50 ${quality === id ? 'border-primary' : ''}`}
      onClick={() => setQuality(id)}>
      <span className="text-xl">
        {alias} - bitrate:{bitrate}
      </span>
    </li>
  );
};
