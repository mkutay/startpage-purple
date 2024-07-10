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
      <div className="flex flex-col gap-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <MyCard title="YouTube" className="grow col-span-2"/>
          <div className="grid gap-4 grid-rows-2">
            <MyCard title="Reddita" className="grow"/>
            <MyCard title="Discorda" className="grow"/>
          </div>
          <div className="grid gap-4 grid-rows-2">
            <MyCard title="Redditb" className="grow"/>
            <MyCard title="Discordb" className="grow"/>
          </div>
          <div className="grid gap-4 grid-rows-4">
            <MyCard title="Reddita" className="grow"/>
            <MyCard title="Discorda" className="grow"/>
            <MyCard title="Reddita" className="grow"/>
            <MyCard title="Discorda" className="grow"/>
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
