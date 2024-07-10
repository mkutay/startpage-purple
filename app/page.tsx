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
    <main className="my-8 flex flex-col gap-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-9 gap-4">
        <Card className="bg-primary shadow-lg grow col-span-4">
          <CardHeader>
            <CardTitle>To Do List</CardTitle>
          </CardHeader>
        </Card>
        <div className="grid gap-4 grid-rows-2 col-span-2">
          <Card className="bg-primary shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-primary shadow-lg grow">
            <CardHeader>
              <CardTitle>Discord</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="grid gap-4 grid-rows-2 col-span-2">
          <Card className="bg-primary shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-primary shadow-lg grow">
            <CardHeader>
              <CardTitle>Reddit</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="grid gap-4 grid-rows-4">
          <Link href="https://youtube.com">
            <Card className="bg-primary shadow-lg grow hover:bg-accent transition-colors duration-400">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <YoutubeIcon/>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link href="https://reddit.com">
            <Card className="bg-primary shadow-lg grow hover:bg-accent transition-colors duration-400">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <RedditIcon/>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link href="https://github.com/mkutay">
            <Card className="bg-primary shadow-lg grow hover:bg-accent transition-colors duration-400">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <GithubIcon/>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link href="https://discord.com/channels/1038152436906459167/1112343532427026474">
            <Card className="bg-primary shadow-lg grow hover:bg-accent transition-colors duration-400">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <DiscordIcon/>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
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
