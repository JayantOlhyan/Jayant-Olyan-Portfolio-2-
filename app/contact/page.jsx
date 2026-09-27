import { routesSeo, siteConfig } from '@/data/seoConfig';
import { Home } from '@/components/Home';

export const metadata = {
  title: routesSeo.contact.title,
  description: routesSeo.contact.description,
  alternates: {
    canonical: `${siteConfig.baseUrl}/contact`,
  },
  openGraph: {
    title: routesSeo.contact.title,
    description: routesSeo.contact.description,
    url: `${siteConfig.baseUrl}/contact`,
  },
  twitter: {
    title: routesSeo.contact.title,
    description: routesSeo.contact.description,
  },
};

export default function ContactPage() {
  return <Home initialSection="contact" />;
}
