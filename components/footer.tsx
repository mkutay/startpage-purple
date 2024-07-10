import { ModeToggle } from '@/components/themeSwitch';

export default function Footer() {
  return (
    <div className="flex flex-row justify-end m-4">
      <div>
        <ModeToggle/>
      </div>
    </div>
  );
}