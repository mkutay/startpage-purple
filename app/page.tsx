import DateAndTime from "@/components/dateAndTime";
import { DiscordIcon, GithubIcon, InstagramIcon, LinkedinIcon, RedditIcon, YoutubeIcon } from "@/components/icons";
import SearchInput from "@/components/searchInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from "next/link";

export default function Home() {
  return (
    <main className="my-8 flex flex-col gap-4 lg:max-w-6xl mx-auto max-w-xs">
      <div className="grid gap-4 lg:grid-cols-9 lg:grid-rows-none grid-rows-9">
        <Card className="shadow-lg grow lg:col-span-4 lg:row-span-1 row-span-4">
          <CardHeader>
            <CardTitle>To Do List</CardTitle>
          </CardHeader>
        </Card>
        <div className="grid gap-4 lg:grid-rows-2 lg:col-span-2 lg:row-span-1 lg:grid-cols-none row-span-2 grid-cols-2">
          <Card className="shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
          <Card className="shadow-lg grow">
            <CardHeader>
              <CardTitle>Discord</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="grid gap-4 lg:grid-rows-2 lg:col-span-2 lg:grid-cols-none lg:row-span-1 grid-cols-2 row-span-2">
          <Card className="shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
          <Card className="shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="grid gap-4 lg:grid-rows-4 grid-cols-4 lg:grid-cols-none">
          <Link href="https://youtube.com">
            <Card className="shadow-lg grow hover:bg-accent transition-colors duration-400">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <YoutubeIcon/>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link href="https://reddit.com">
            <Card className="shadow-lg grow hover:bg-accent transition-colors duration-400">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <RedditIcon/>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link href="https://github.com/mkutay">
            <Card className="shadow-lg grow hover:bg-accent transition-colors duration-400">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <GithubIcon/>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link href="https://discord.com/channels/1038152436906459167/1112343532427026474">
            <Card className="shadow-lg grow hover:bg-accent transition-colors duration-400">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <DiscordIcon/>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 lg:items-center grow">
        <div className="lg:mr-auto mx-auto">
          <DateAndTime/>
        </div>
        <div className="lg:ml-auto grow">
          <SearchInput/>
        </div>
      </div>
    </main>
  );
}
