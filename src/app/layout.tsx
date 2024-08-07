import type { Metadata } from "next";
import "./globals.css";
import { inter, spaceGrotesk } from './fonts'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Vihanga Silva | Ultimate Developer Portfolio",
  description: "I'm Vihanga Silva and Im a full stack developer from Sri lanka. Im work with javascript based framework for my works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        // disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-white dark:bg-black relative">
            <Navbar className="fixed top-0 left-0 z-50" />
            {children}

            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
