'use client';

import { ChangeEvent, createContext } from 'react';

interface Context {
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: Error | null;
}

export const SearchContext = createContext<Context | null>(null);
