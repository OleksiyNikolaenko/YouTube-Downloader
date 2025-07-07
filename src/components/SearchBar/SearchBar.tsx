import { Card, CardContent, CardHeader } from '../ui/card';
import { QualityList } from './QualityList';
import { SearchInput } from './SearchInput';

export const SearchBar = () => {
  return (
    <Card className="h-[500px] w-[800px]">
      <CardHeader className="text-center">
        <h1 className="text-3xl text-red-700">YouTube Video Downloader</h1>
      </CardHeader>
      <CardContent>
        <>
          <SearchInput />
          <QualityList />
        </>
      </CardContent>
    </Card>
  );
};
