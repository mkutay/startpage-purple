import { ModeToggle } from '@/components/themeSwitch';

export default function Footer() {
  return (
    <div className="flex flex-row justify-end my-8 mx-8">
      <div>
        <ModeToggle/>
      </div>
    </div>
  );
}