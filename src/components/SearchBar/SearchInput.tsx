'use client';

import { useSearch } from '@/hooks';
import { IoArrowDownSharp } from 'react-icons/io5';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const SearchInput = () => {
  const { handleChange, inputValue, error } = useSearch();

  return (
    <>
      <div className="flex items-center gap-1">
        <Input value={inputValue} onChange={handleChange} />
        <Button>
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
