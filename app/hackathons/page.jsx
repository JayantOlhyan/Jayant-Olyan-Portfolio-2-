import { routesSeo, siteConfig } from '@/data/seoConfig';
import { Home } from '@/components/Home';

export const metadata = {
  title: routesSeo.hackathons.title,
  description: routesSeo.hackathons.description,
  alternates: {
    canonical: `${siteConfig.baseUrl}/hackathons`,
  },
  openGraph: {
    title: routesSeo.hackathons.title,
    description: routesSeo.hackathons.description,
    url: `${siteConfig.baseUrl}/hackathons`,
  },
  twitter: {
    title: routesSeo.hackathons.title,
    description: routesSeo.hackathons.description,
  },
};

export default function HackathonsPage() {
  return <Home initialSection="hackathons" />;
}
