import { SearchContext } from '@/context';
import { useContext } from 'react';

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) throw new Error('Component must be wrapped in SearchProvider');

  return context;
};
