'use client';

import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';

export default function SearchInput() {
  const router = useRouter();

  const redirectToSearch = (search: string) => {
    console.log(search);
    const link = `https://duckduckgo.com?q=${search}`;
    router.push(link);
  };

  return (
    <Input
      type="text"
      placeholder="Search..."
      onKeyDown={(e) => e.key === 'Enter' && redirectToSearch(e.currentTarget.value)}
      id="search"
      name="search"
      autoFocus
    />
  );
}