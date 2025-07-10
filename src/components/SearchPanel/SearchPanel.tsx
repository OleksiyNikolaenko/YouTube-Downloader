import { SearchForm, VideoDetailsPanel } from '@/components';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '../ui/card';

export const SearchPanel = () => {
  return (
    <section>
      <Card className="max-h-[850px] w-[310px] sm:w-[550px] lg:w-[900px]">
        <CardHeader className="text-center">
          <div className="flex flex-col items-center gap-6">
            <Image src="/yt.svg" alt="you tube logo" width={100} height={100} />
            <h1 className="font-mochiy text-2xl capitalize lg:text-5xl">
              YouTube Video Downloader
            </h1>
            <p className="font-manrope text-base lg:text-xl">
              дозволяє швидко завантажувати відео YouTube на комп&apos;ютери та
              перетворювати їх у різні формати, такі як MP4, 3GP, WEBM, MP3, OGG
              та M4A без встановлення будь-якого програмного забезпечення
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <SearchForm />
          <VideoDetailsPanel />
        </CardContent>
      </Card>
    </section>
  );
};
