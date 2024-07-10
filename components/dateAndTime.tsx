'use client';

import { useState } from "react";

export default function DateAndTime() {
  const [date, setDate] = useState(new Date());

  const setSetDate = () => {
    const now = new Date();
    setDate(now);
  };

  const convertSeconds = () => {
    const seconds = date.getSeconds();
    return seconds;
  };

  setInterval(setSetDate, 400);

  return (
    <span suppressHydrationWarning>
      <span suppressHydrationWarning>
        {~~(date.getDay() / 10) == 0 ? `0${date.getDay()}` : date.getDay()}
      </span>
      <span className="mx-1 text-secondary font-black">
        /
      </span>
      <span suppressHydrationWarning>
        {~~(date.getMonth() / 10) == 0 ? `0${date.getMonth()}` : date.getMonth()}
      </span>
      <span className="mx-1 text-secondary font-black">
        /
      </span>
      <span className="mr-2" suppressHydrationWarning>
        {date.getFullYear()}
      </span>
      <span className="ml-2" suppressHydrationWarning>
        {~~(date.getHours() / 10) == 0 ? `0${date.getHours()}` : date.getHours()}
      </span>
      <span className="mx-1 text-secondary font-black">
        :
      </span>
      <span suppressHydrationWarning>
        {~~(date.getMinutes() / 10) == 0 ? `0${date.getMinutes()}` : date.getMinutes()}
      </span>
      <span className="mx-1 text-secondary font-black">
        :
      </span>
      <span suppressHydrationWarning>
        {~~(convertSeconds() / 10) == 0 ? `0${convertSeconds()}` : convertSeconds()}
      </span>
    </span>
  );
}