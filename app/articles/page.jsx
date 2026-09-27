import { routesSeo, siteConfig } from '@/data/seoConfig';
import { Home } from '@/components/Home';

export const metadata = {
  title: routesSeo.articles.title,
  description: routesSeo.articles.description,
  alternates: {
    canonical: `${siteConfig.baseUrl}/articles`,
  },
  openGraph: {
    title: routesSeo.articles.title,
    description: routesSeo.articles.description,
    url: `${siteConfig.baseUrl}/articles`,
  },
  twitter: {
    title: routesSeo.articles.title,
    description: routesSeo.articles.description,
  },
};

export default function ArticlesPage() {
  return <Home initialSection="articles" />;
}
