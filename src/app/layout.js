import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Starfield from 'react-starfield';



const jetBrains = JetBrains_Mono({ subsets: ["latin"], fonts: [100, 200, 300, 400]  });

export const metadata = {
  title: "DevMuga Portfolio"
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={jetBrains.className}>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
        <Header />


        {children}



      </body>
    </html>
  );
}
