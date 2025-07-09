'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CgClose, CgMenu } from 'react-icons/cg';
import { Button } from '../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';

export const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="z-50 sm:hidden">
      <Drawer open={isOpen} onOpenChange={setOpen} direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon">
            <CgMenu />
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader className="sr-only">
            <DrawerTitle>Burger menu</DrawerTitle>
            <DrawerDescription>Burger menu</DrawerDescription>
          </DrawerHeader>

          <DrawerClose asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4"
              aria-label="Закрити меню">
              <CgClose />
            </Button>
          </DrawerClose>

          <ul className="flex h-full flex-col items-center justify-center">
            <li
              onClick={() => setOpen((prev) => !prev)}
              className="hover:text-primary rounded-md p-2">
              <Link href="#how-it-work">Як це працює</Link>
            </li>
            <li
              onClick={() => setOpen((prev) => !prev)}
              className="hover:text-primary rounded-md p-2">
              <Link href="#features">Особливості</Link>
            </li>
            <li
              onClick={() => setOpen((prev) => !prev)}
              className="hover:text-primary rounded-md p-2">
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
