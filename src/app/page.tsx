import { Card, CardContent, CardHeader, SearchBar } from '@/components';

export default function Home() {
  return (
    <section className="container mx-auto flex h-screen items-center justify-center px-2">
      <Card className="h-[300px] w-[800px]">
        <CardHeader className="text-center">
          <h1>
            Для того щоб завантажити відео, будь ласка, додайте URL-адресу в
            поле:
          </h1>
        </CardHeader>
        <CardContent>
          <SearchBar />
        </CardContent>
      </Card>
    </section>
  );
}
