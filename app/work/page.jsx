import { routesSeo, siteConfig } from '@/data/seoConfig';
import { Home } from '@/components/Home';

export const metadata = {
  title: routesSeo.work.title,
  description: routesSeo.work.description,
  alternates: {
    canonical: `${siteConfig.baseUrl}/work`,
  },
  openGraph: {
    title: routesSeo.work.title,
    description: routesSeo.work.description,
    url: `${siteConfig.baseUrl}/work`,
  },
  twitter: {
    title: routesSeo.work.title,
    description: routesSeo.work.description,
  },
};

export default function WorkPage() {
  return <Home initialSection="work" />;
}
