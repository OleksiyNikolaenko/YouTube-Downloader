'use client';

import { useSearch } from '@/hooks';
import { Quality } from '@/types';
import Image from 'next/image';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { ScrollArea } from '../ui/scroll-area';

interface Props {
  data: Quality[] | undefined;
}

export const QualityDropdown = ({ data }: Props) => {
  const { quality, setQuality } = useSearch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="font-manrope flex w-full flex-1 items-center px-3 py-2 text-center text-lg lg:px-4 lg:py-6">
          Якість
          <Image
            src="/down-arrow.svg"
            alt="select icon"
            width={25}
            height={25}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="2xl:w-[300px]">
        <ScrollArea>
          <ul>
            {data
              ?.filter((item) => item.type === 'video')
              .map((item, idx) => (
                <li
                  className={`${quality === item.id ? 'border-primary rounded-md border' : ''} cursor-pointer px-2 py-2 transition-all duration-150 ease-in-out hover:opacity-30`}
                  onClick={() => setQuality(item.id)}
                  key={idx}>
                  <span>{item.quality}</span>
                </li>
              ))}
          </ul>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
