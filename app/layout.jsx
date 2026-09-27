import './globals.css';
import Script from 'next/script';
import { IBM_Plex_Mono, JetBrains_Mono, Inter } from 'next/font/google';
import { siteConfig } from '@/data/seoConfig';
import { TerminalProvider } from '@/context/TerminalContext';
import { MainLayout } from '@/layouts/MainLayout';
import { ServiceWorkerRegister } from '@/components/providers/ServiceWorkerRegister';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.defaultDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.baseUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.baseUrl,
    siteName: 'Jayant Olhyan Portfolio OS',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jayant Olhyan — Live macOS Portfolio OS Real Screenshot Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: ['/twitter-card.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    shortcut: ['/favicon.png'],
  },
  verification: {
    google: siteConfig.googleVerification,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Jayant OS',
  },
};

export const viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteConfig.baseUrl}/#person`,
      name: 'Jayant Olhyan',
      url: siteConfig.baseUrl,
      image: `${siteConfig.baseUrl}/jayant_professional_photo.png`,
      jobTitle: 'Data Scientist & AI Full-Stack Engineer',
      description:
        'Pursuing BSc (Hons) in Data Science and Artificial Intelligence from IIT Guwahati (Batch 25-29) and Computer Science engineer at MSIT. 25x Hackathon Finalist.',
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'IIT Guwahati',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Maharaja Surajmal Institute of Technology (MSIT)',
        },
      ],
      knowsAbout: [
        'Data Science',
        'Artificial Intelligence',
        'Machine Learning',
        'Computer Vision',
        'RAG Pipelines',
        'Full Stack Development',
        'FastAPI',
        'React 18',
        'Next.js',
        'Python',
        'Three.js',
      ],
      sameAs: [
        'https://github.com/JayantOlhyan',
        'https://www.linkedin.com/in/jayant-olhyan/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.baseUrl}/#website`,
      url: siteConfig.baseUrl,
      name: 'Jayant Olhyan Portfolio OS',
      description:
        'Interactive macOS terminal portfolio for Jayant Olhyan showcasing AI and full stack projects.',
      publisher: {
        '@id': `${siteConfig.baseUrl}/#person`,
      },
    },
    {
      '@type': 'ItemList',
      name: 'Featured AI & Full Stack Projects',
      itemListElement: [
        {
          '@type': 'SoftwareApplication',
          position: 1,
          name: 'TruthLens AI',
          applicationCategory: 'AI Application',
          description:
            'Multi-modal deepfake detection platform combining frame-level video analysis with RAG fact-checking.',
        },
        {
          '@type': 'SoftwareApplication',
          position: 2,
          name: 'Sentinel AI',
          applicationCategory: 'Security Application',
          description:
            'Real-time scam and phishing detection web application explaining risks in plain language with LLMs.',
        },
        {
          '@type': 'SoftwareApplication',
          position: 3,
          name: 'GRAVITAS',
          applicationCategory: 'Data Visualization',
          description:
            'Interactive 3D orbital space debris and asteroid collision risk visualization platform using NASA & ESA data.',
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ibmPlexMono.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <head>
        {/* Anti-FOUC theme hydration script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t){document.documentElement.className=t;}}catch(e){}})();`,
          }}
        />
        {/* Preload SVG sprite sheet */}
        <link rel="preload" href="/icons.svg" as="image" type="image/svg+xml" />
        {/* Schema.org JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0f0f0f] antialiased">
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y3DX4J0C0W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y3DX4J0C0W');
          `}
        </Script>

        {/* Global Terminal Context & OS Desktop Shell */}
        <TerminalProvider>
          <ServiceWorkerRegister />
          <MainLayout>{children}</MainLayout>
        </TerminalProvider>
      </body>
    </html>
  );
}
