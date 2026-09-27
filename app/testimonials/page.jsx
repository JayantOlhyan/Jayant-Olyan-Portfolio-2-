import { routesSeo, siteConfig } from '@/data/seoConfig';
import { Home } from '@/components/Home';

export const metadata = {
  title: routesSeo.testimonials.title,
  description: routesSeo.testimonials.description,
  alternates: {
    canonical: `${siteConfig.baseUrl}/testimonials`,
  },
  openGraph: {
    title: routesSeo.testimonials.title,
    description: routesSeo.testimonials.description,
    url: `${siteConfig.baseUrl}/testimonials`,
  },
  twitter: {
    title: routesSeo.testimonials.title,
    description: routesSeo.testimonials.description,
  },
};

export default function TestimonialsPage() {
  return <Home initialSection="testimonials" />;
}
