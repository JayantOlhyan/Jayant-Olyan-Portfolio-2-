import { routesSeo, siteConfig } from '@/data/seoConfig';
import { Home } from '@/components/Home';

export const metadata = {
  title: routesSeo.skills.title,
  description: routesSeo.skills.description,
  alternates: {
    canonical: `${siteConfig.baseUrl}/skills`,
  },
  openGraph: {
    title: routesSeo.skills.title,
    description: routesSeo.skills.description,
    url: `${siteConfig.baseUrl}/skills`,
  },
  twitter: {
    title: routesSeo.skills.title,
    description: routesSeo.skills.description,
  },
};

export default function SkillsPage() {
  return <Home initialSection="skills" />;
}
