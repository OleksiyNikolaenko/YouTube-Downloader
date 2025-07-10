'use client';

import { useSearch } from '@/hooks';
import { useState } from 'react';
import { IoArrowDownSharp } from 'react-icons/io5';
import { Button } from '../ui/button';

export const DownloadButton = () => {
  const [isLoading, setLoading] = useState(false);
  const { id, quality } = useSearch();

  const getVideo = async () => {
    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/download_video/${id}?quality=${quality}`,
      {
        headers: {
          'x-rapidapi-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      },
    );

    const data = await res.json();

    if (data?.file) {
      window.location.href = data.file;
    }

    setLoading(false);
  };

  return (
    <Button
      disabled={isLoading}
      onClick={() => getVideo()}
      className="font-manrope flex items-center px-2 py-2 text-lg lg:px-4 lg:py-6">
      <IoArrowDownSharp /> <p className="hidden sm:block">Завантажити</p>
    </Button>
  );
};
