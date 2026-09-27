import { routesSeo, siteConfig } from '@/data/seoConfig';
import { Home } from '@/components/Home';

export const metadata = {
  title: routesSeo.social.title,
  description: routesSeo.social.description,
  alternates: {
    canonical: `${siteConfig.baseUrl}/social`,
  },
  openGraph: {
    title: routesSeo.social.title,
    description: routesSeo.social.description,
    url: `${siteConfig.baseUrl}/social`,
  },
  twitter: {
    title: routesSeo.social.title,
    description: routesSeo.social.description,
  },
};

export default function SocialPage() {
  return <Home initialSection="social" />;
}
