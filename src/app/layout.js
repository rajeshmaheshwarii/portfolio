import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Rajesh Maheshwari",
  description:
    "Looking for a professional Frontend Developer? Visit Rajesh Maheshwari's portfolio to see projects built with Next.js, React.js, and WordPress, delivering responsive and user-friendly web designs.",
  keywords: [
    "Rajesh Maheshwari",
    "Rajesh Maheshwari Bhuj",
    "Rajesh Maheshwari Gujarat",
    "Rajesh Maheshwari Mamuara",
    "Mamuara",
    "Maheshwari Bhadru",
    "Parul University",
    "PIET Vadodara",
    "Diploma collage Bhuj",
    "Bhuj Polytechnic",
    "Freelancer in Bhuj",
    "Frontend developer",
    "IT company in kutchh",
    "Gatetouch",
    "Parul University Vadodara",
    "Government Polytechnic Bhuj",
    "GP Bhuj",
    "Rajesh Bhadru",
    "aeonx digital",
    "IT company in Bhuj",
    "software engineer in Bhuj",
    "Computer science and engineering",
    "Village Mamuara",
    "Frontend Developer",
    "website developer in bhuj",
    "web developement in bhuj",
    "Next.js",
    "React.js",
    "WordPress",
    "Responsive Web Design",
    "Portfolio",
    "Modern Web Development",
    "Web Developer",
    "Creative Websites",
  ],
  author: "Rajesh Maheshwari",
  charset: "UTF-8",
  robots: "index, follow",
  language: "en",
  openGraph: {
    type: "website",
    url: "https://www.rajesh-maheshwari.tech", // Replace with your portfolio URL
    title: "Portfolio - Rajesh Maheshwari",
    description:
      "Looking for a professional Frontend Developer? Visit Rajesh Maheshwari's portfolio to see projects built with Next.js, React.js, and WordPress, delivering responsive and user-friendly web designs.",
    image: "/profile.png", // Replace with the path to your portfolio image
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.rajesh-maheshwari.tech", // Replace with your Twitter handle if you have one
    creator: "Rajesh Maheshwari", // Replace with your Twitter handle if you have one
    title: "Portfolio - Rajesh Maheshwari",
    description:
      "Looking for a professional Frontend Developer? Visit Rajesh Maheshwari's portfolio to see projects built with Next.js, React.js, and WordPress, delivering responsive and user-friendly web designs.",
    image: "/profile.png", // Replace with the path to your portfolio image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
