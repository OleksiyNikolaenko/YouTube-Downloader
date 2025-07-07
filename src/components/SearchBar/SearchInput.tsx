'use client';

import { useSearch } from '@/hooks';
import { useRouter } from 'next/navigation';
import { IoArrowDownSharp } from 'react-icons/io5';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const SearchInput = () => {
  const { handleChange, inputValue, error, id, quality } = useSearch();

  const { push } = useRouter();
  const getVideo = async () => {
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
  };

  return (
    <>
      <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-1">
        <Input value={inputValue} onChange={handleChange} />
        <Button onClick={() => getVideo()} className="w-full lg:w-auto">
          Завантажити <IoArrowDownSharp />
        </Button>
      </div>
      {error && (
        <span className="mt-2 block text-center text-red-800">
          {error.message}
        </span>
      )}
    </>
  );
};
