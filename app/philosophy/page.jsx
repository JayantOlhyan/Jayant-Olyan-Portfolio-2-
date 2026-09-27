import { routesSeo, siteConfig } from '@/data/seoConfig';
import { Home } from '@/components/Home';

export const metadata = {
  title: routesSeo.philosophy.title,
  description: routesSeo.philosophy.description,
  alternates: {
    canonical: `${siteConfig.baseUrl}/philosophy`,
  },
  openGraph: {
    title: routesSeo.philosophy.title,
    description: routesSeo.philosophy.description,
    url: `${siteConfig.baseUrl}/philosophy`,
  },
  twitter: {
    title: routesSeo.philosophy.title,
    description: routesSeo.philosophy.description,
  },
};

export default function PhilosophyPage() {
  return <Home initialSection="philosophy" />;
}
