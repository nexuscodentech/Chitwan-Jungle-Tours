import {
  Inter,
  MuseoModerno,
  Poppins,
  Murecho,
  Museo,
  Cedarville_Cursive,
} from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Top";
import "./globals.css";
import homeimage from "assets/homehome.png"

import { Analytics } from '@vercel/analytics/next';

const museo = MuseoModerno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-museo",
});
const poopins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const murecho = Murecho({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-murecho",
});

const cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive",
});

export const metadata = {
  metadataBase: new URL('https://chitwantour.com'),
  title: "Chitwan Tour",
  description: "Discover thrilling Jungle Tours in Sauraha, Chitwan, Nepal, featuring safaris, wildlife encounters, and cultural experiences in Chitwan National Park.",
  keywords: [
    "Chitwan Jungle Tours",
    "Chitwan",
    "Chitwan Jungle",
    "Chitwan Tour",
    "Chitwan Tours",
    "Wildlife Safari Chitwan",
    "Chitwan National Park safaris",
    "Jungle safari in Nepal",
    "Chitwan wildlife encounters",
    "Nepal wildlife tours",
    "Chitwan adventure tours",
    "Chitwan cultural experiences",
    "Sauraha jungle safari",
    "Chitwan national park tours",
    "Safari adventure Nepal",
    "Wildlife photography Chitwan",
    "Chitwan elephant safari",
    "Chitwan jungle vacation",
    "Best Chitwan safari packages",
    "Nepal tours",
    "Nepal vacation packages",
    "Nepal jungle tours",
    "Nepal wildlife vacation",
    "Nepal adventure tours",
    "Chitwan tour packages",
    "Chitwan vacation",
    "Sauraha tours",
    "Sauraha vacation",
    "Nepal tour packages",
    "Nepal travel",
    "Nepal holiday",
    "Vacation in Nepal",
    "Tour of Nepal"
  ],
  icons: {
    icon: "/global/tours.png",
  },
  openGraph: {
    title: 'Chitwan Tour',
    description: 'Explore exciting Jungle Tours in Sauraha, Chitwan, Nepal, offering thrilling safaris, wildlife encounters, and rich cultural experiences in the heart of Chitwan National Park. Book your unforgettable adventure today!',
    url: '/',
    siteName: '/sitemap.xml',
    images: [
      {
        url: homeimage.src,
        width: homeimage.width,
        height: homeimage.height,
      },
    ]
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          poopins.className +
          " " +
          museo.variable +
          " " +
          poopins.variable +
          "" +
          murecho.variable +
          "" +
          cursive.variable
        }
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
