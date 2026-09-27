import { routesSeo, siteConfig } from '@/data/seoConfig';
import { Home } from '@/components/Home';

export const metadata = {
  title: routesSeo.ecosystem.title,
  description: routesSeo.ecosystem.description,
  alternates: {
    canonical: `${siteConfig.baseUrl}/ecosystem`,
  },
  openGraph: {
    title: routesSeo.ecosystem.title,
    description: routesSeo.ecosystem.description,
    url: `${siteConfig.baseUrl}/ecosystem`,
  },
  twitter: {
    title: routesSeo.ecosystem.title,
    description: routesSeo.ecosystem.description,
  },
};

export default function EcosystemPage() {
  return <Home initialSection="ecosystem" />;
}
