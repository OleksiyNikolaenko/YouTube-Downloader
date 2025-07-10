'use client';

import { useSearch } from '@/hooks';
import { Input } from '../ui/input';

export const SearchForm = () => {
  const { handleChange, inputValue, error } = useSearch();

  return (
    <>
      <div className="flex flex-col items-center gap-2 md:flex-row lg:gap-1">
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder="URL-адреса"
          className="px-4 py-6 placeholder:text-base sm:text-lg lg:text-xl lg:placeholder:text-xl"
        />
      </div>
      {error && (
        <span className="mt-2 block text-center text-red-800">
          {error.message}
        </span>
      )}
    </>
  );
};
