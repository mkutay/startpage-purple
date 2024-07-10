import DateAndTime from "@/components/dateAndTime";
import SearchInput from "@/components/searchInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main className="my-8 flex flex-col gap-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-5 gap-4">
        <Card className="bg-secondary shadow-lg grow col-span-2">
          <CardHeader>
            <CardTitle>YouTube</CardTitle>
          </CardHeader>
        </Card>
        <div className="grid gap-4 grid-rows-2">
          <Card className="bg-secondary shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-secondary shadow-lg grow">
            <CardHeader>
              <CardTitle>Discord</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="grid gap-4 grid-rows-2">
          <Card className="bg-secondary shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-secondary shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="grid gap-4 grid-rows-4">
          <Card className="bg-secondary shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-secondary shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-secondary shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-secondary shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center grow">
        <div className="mr-auto">
          <DateAndTime/>
        </div>
        <div className="ml-auto grow">
          <SearchInput/>
        </div>
      </div>
    </main>
  );
}
