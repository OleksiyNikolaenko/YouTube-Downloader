import { GuidePannel, SearchPanel } from '@/components';

export default function Home() {
  return (
    <div className="font-manrope container mx-auto flex h-auto flex-col items-center justify-center px-2">
      <SearchPanel />
      <GuidePannel />
    </div>
  );
}
