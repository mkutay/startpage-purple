import { MyCard } from "@/components/card";
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
    <main className="my-8 flex flex-col">
      <div className="flex flex-col gap-4 max-w-7xl mx-auto">
        <div className="flex flex-row gap-4">
          <MyCard title="YouTube" className="w-[400px] grow"/>
          <div className="flex flex-col gap-4">
            <MyCard title="Reddit" className="grow w-[200px]"/>
            <MyCard title="Discord" className="grow w-[200px]"/>
          </div>
          <div className="flex flex-col gap-4">
            <MyCard title="Reddit" className="grow w-[200px]"/>
            <MyCard title="Discord" className="grow w-[200px]"/>
          </div>
          <div className="flex flex-col gap-4">
            <MyCard title="Reddit" className="grow w-[200px]"/>
            <MyCard title="Discord" className="grow w-[200px]"/>
            <MyCard title="Reddit" className="grow w-[200px]"/>
            <MyCard title="Discord" className="grow w-[200px]"/>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center grow">
          <div className="mr-auto">
            Date and Time
          </div>
          <div className="ml-auto grow">
            <Card>
              <p className="p-2">
                Search
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
