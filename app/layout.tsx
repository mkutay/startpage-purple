import Image from 'next/image';
import { getImageProps } from 'next/image'
import { Inter as FontSans } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/themeProvider';
import Footer from '@/components/footer';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const style = {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(/ba.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={cn(
        "font-sans antialiased w-full h-full bg-cover bg-no-repeat bg-center bg-fixed",
        fontSans.variable
      )} style={{ backgroundImage: `url(/ba.jpg)` }}> */}
      <body className={cn(
        "font-sans antialiased",
        fontSans.variable
      )}>
        <Image
          alt="a"
          src="/ba.jpg"
          fill={true}
          priority={true}
          className="scale-0 dark:scale-100 dark:brightness-50"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "mocha"]}
        >
          <div className="flex flex-col min-h-screen brightness-100">
            <div className="flex-1 content-center">
              {children}
            </div>
            <div>
              <Footer/>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
