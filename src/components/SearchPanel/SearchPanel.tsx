import { QualityList, SearchForm } from '@/components';
import { Card, CardContent, CardHeader } from '../ui/card';

export const SearchPanel = () => {
  return (
    <Card className="h-[500px] w-[800px]">
      <CardHeader className="text-center">
        <h1 className="text-3xl text-red-700">YouTube Video Downloader</h1>
      </CardHeader>
      <CardContent>
        <SearchForm />
        <QualityList />
      </CardContent>
    </Card>
  );
};
