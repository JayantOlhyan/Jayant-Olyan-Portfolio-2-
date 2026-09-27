import { routesSeo, siteConfig } from '@/data/seoConfig';
import { Home } from '@/components/Home';

export const metadata = {
  title: routesSeo.neofetch.title,
  description: routesSeo.neofetch.description,
  alternates: {
    canonical: `${siteConfig.baseUrl}/neofetch`,
  },
  openGraph: {
    title: routesSeo.neofetch.title,
    description: routesSeo.neofetch.description,
    url: `${siteConfig.baseUrl}/neofetch`,
  },
  twitter: {
    title: routesSeo.neofetch.title,
    description: routesSeo.neofetch.description,
  },
};

export default function NeofetchPage() {
  return <Home initialSection="neofetch" />;
}
