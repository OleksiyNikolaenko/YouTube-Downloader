import { Card, CardContent, CardHeader, SearchBar } from '@/components';

export default function Home() {
  return (
    <section className="container mx-auto flex h-screen items-center justify-center px-2">
      <Card className="h-[500px] w-[800px]">
        <CardHeader className="text-center">
          <h1 className="text-3xl text-red-700">YouTube Video Downloader</h1>
        </CardHeader>
        <CardContent>
          <SearchBar />
        </CardContent>
      </Card>
    </section>
  );
}
