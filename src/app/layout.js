import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";



const jetBrains = JetBrains_Mono({ subsets: ["latin"], fonts: [100, 200, 300, 400]  });

export const metadata = {
  title: "DevMuga Portfolio"
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={jetBrains.className}>
        <Header />


        {children}



      </body>
    </html>
  );
}
