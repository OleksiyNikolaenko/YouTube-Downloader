'use client';
import { useSearch } from '@/hooks';
import { useFetch } from '@/hooks/useFetch';
import { VideoInfo } from '@/types';
import Link from 'next/link';
import { DownloadButton } from '../DownloadButton/DownloadButton';
import { QualityDropdown } from '../QualityDropdown/QualityDropdown';
import { Card, CardContent } from '../ui/card';
import { Spinner } from '../ui/spinner';

export const VideoDetailsPanel = () => {
  const { id } = useSearch();
  const { data, isLoading } = useFetch<VideoInfo>(
    `${process.env.NEXT_PUBLIC_API_URL}/get-video-info/${id}`,
    id,
  );

  return (
    <>
      {id && (
        <Card className="mt-4 h-[320px]">
          {isLoading ? (
            <Spinner className="flex h-full items-center justify-center" />
          ) : (
            <CardContent className="flex h-full flex-col items-center justify-center gap-4 sm:flex-row">
              <iframe
                className="w-[200px] md:h-[150px] md:w-[200px] lg:h-[300px] lg:w-[400px] 2xl:w-[600px]"
                src={data?.embed.iframeUrl}
              />
              <div className="flex flex-col gap-5">
                {data?.canonicalUrl && (
                  <Link
                    className="hover:text-primary line-clamp-2 transition-colors duration-150 ease-in-out"
                    href={data.canonicalUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    {data.title}
                  </Link>
                )}
                <div className="flex gap-4">
                  <QualityDropdown data={data?.availableQuality} />
                  <DownloadButton />
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  );
};
