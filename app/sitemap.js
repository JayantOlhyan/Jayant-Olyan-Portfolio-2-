import { siteConfig } from '@/data/seoConfig';

export const dynamic = 'force-static';

export default function sitemap() {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/about', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/work', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/skills', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/hackathons', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/social', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/ecosystem', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/philosophy', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/testimonials', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/articles', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/neofetch', priority: 0.7, changeFrequency: 'monthly' },
  ];

  return routes.map((r) => ({
    url: `${siteConfig.baseUrl}${r.path}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
