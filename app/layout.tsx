import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rithik's Portfolio",
  description: "Technology Developer",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Add audio element for background music */}
        <audio autoPlay loop>
          <source src="/music.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </body>
    </html>
  );
};

export default RootLayout;
