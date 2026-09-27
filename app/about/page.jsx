import { routesSeo, siteConfig } from '@/data/seoConfig';
import { Home } from '@/components/Home';

export const metadata = {
  title: routesSeo.about.title,
  description: routesSeo.about.description,
  alternates: {
    canonical: `${siteConfig.baseUrl}/about`,
  },
  openGraph: {
    title: routesSeo.about.title,
    description: routesSeo.about.description,
    url: `${siteConfig.baseUrl}/about`,
  },
  twitter: {
    title: routesSeo.about.title,
    description: routesSeo.about.description,
  },
};

export default function AboutPage() {
  return <Home initialSection="about" />;
}
