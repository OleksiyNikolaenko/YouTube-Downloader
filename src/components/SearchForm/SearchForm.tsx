'use client';

import { DownloadButton } from '@/components';
import { useSearch } from '@/hooks';
import { Input } from '../ui/input';

export const SearchForm = () => {
  const { handleChange, inputValue, error } = useSearch();

  return (
    <>
      <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-1">
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder="URL-адреса"
        />
        <DownloadButton />
      </div>
      {error && (
        <span className="mt-2 block text-center text-red-800">
          {error.message}
        </span>
      )}
    </>
  );
};
