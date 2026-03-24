export interface EventItem {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "GitHub Universe 2026",
    image: "/images/event1.png",
    slug: "github-universe-2026",
    location: "San Francisco, CA",
    date: "April 15, 2026",
    time: "9:00 AM PST",
  },
  {
    title: "Vercel Ship 2026",
    image: "/images/event2.png",
    slug: "vercel-ship-2026",
    location: "New York, NY",
    date: "May 3, 2026",
    time: "10:00 AM EST",
  },
  {
    title: "React Summit",
    image: "/images/event3.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "June 12, 2026",
    time: "9:30 AM CET",
  },
  {
    title: "AWS re:Invent 2026",
    image: "/images/event4.png",
    slug: "aws-reinvent-2026",
    location: "Las Vegas, NV",
    date: "December 1, 2026",
    time: "8:00 AM PST",
  },
  {
    title: "Google I/O 2026",
    image: "/images/event5.png",
    slug: "google-io-2026",
    location: "Mountain View, CA",
    date: "May 20, 2026",
    time: "10:00 AM PDT",
  },
  {
    title: "Cloudinary User Summit",
    image: "/images/event6.png",
    slug: "cloudinary-user-summit-2026",
    location: "London, UK",
    date: "July 8, 2026",
    time: "9:00 AM BST",
  },
];
