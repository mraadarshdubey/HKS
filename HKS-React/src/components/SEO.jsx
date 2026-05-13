import { Helmet } from 'react-helmet-async';

/* ──────────────────── CONSTANTS ──────────────────── */
const SITE = 'https://hellokiransheth.in';
const DEFAULT_IMAGE = `${SITE}/k1.webp`;
const SITE_NAME = 'Kiran Hajare — Digital Marketing Expert';
const TWITTER_HANDLE = '@hellokiransheth';
const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;
const ORG_ID = `${SITE}/#organization`;

/* ──────────────── DEFAULT PERSON SCHEMA ──────────────── */
const DEFAULT_PERSON_SCHEMA = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Kiran Hajare',
  alternateName: ['hellokiransheth', 'Kiran Sheth Hajare'],
  url: SITE,
  image: {
    '@type': 'ImageObject',
    '@id': `${SITE}/#image`,
    url: DEFAULT_IMAGE,
    caption: 'Kiran Hajare — Digital Marketing Expert & Growth Strategist',
    width: 1200,
    height: 630,
  },
  jobTitle: 'Digital Marketing Expert & Growth Strategist',
  description:
    'Kiran Hajare is India\'s leading digital marketing expert and growth strategist for coaching institutes. With ₹1Cr+ real ad spend experience and 50,000+ people trained, he helps institutes build predictable admission systems.',
  knowsAbout: [
    'Digital Marketing',
    'Meta Ads (Facebook & Instagram Advertising)',
    'Lead Generation for Coaching Institutes',
    'Admission Growth Systems',
    'WhatsApp Marketing',
    'Business Growth Strategy',
    'Online Advertising',
    'Marketing Automation',
    'Funnel Building',
    'Personal Branding',
  ],
  sameAs: [
    'https://www.youtube.com/@hellokiransheth',
    'https://www.instagram.com/hellokiransheth/',
    'https://www.facebook.com/hellokiransheth/',
    'https://in.linkedin.com/in/hellokiransheth',
  ],
  worksFor: { '@type': 'Organization', '@id': ORG_ID, name: 'hellokiransheth' },
  address: { '@type': 'PostalAddress', addressRegion: 'Maharashtra', addressCountry: 'IN' },
  email: 'hajarekiran210@gmail.com',
  nationality: { '@type': 'Country', name: 'India' },
  knowsLanguage: ['English', 'Hindi', 'Marathi'],
};

/* ──────────────── BREADCRUMB HELPER ──────────────── */
const ROUTE_LABELS = {
  '/': 'Home',
  '/my-story': 'My Story',
  '/books': 'Books',
  '/mission': 'Mission',
  '/press': 'Press & Media',
  '/platforms': 'Platforms',
  '/business-development': 'Business Development',
  '/personal-development': 'Personal Development',
  '/podcasts': 'Podcasts',
  '/youtube': 'YouTube',
  '/socials': 'Social Media',
  '/articles': 'Articles',
  '/contact': 'Contact',
  '/privacy-policy': 'Privacy Policy',
  '/terms-of-service': 'Terms of Service',
};

function buildBreadcrumbs(path, pageTitle) {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE }];
  if (path !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: ROUTE_LABELS[path] || pageTitle || 'Page',
      item: `${SITE}${path}`,
    });
  }
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}

/**
 * ╔═══════════════════════════════════════════════════════════╗
 * ║  ADVANCED SEO COMPONENT — "Kiran Hajare" Entity Engine   ║
 * ╠═══════════════════════════════════════════════════════════╣
 * ║  Reusable, drop into any page for unique meta tags.      ║
 * ║                                                          ║
 * ║  Features:                                               ║
 * ║  • Standard meta (title, description, robots, canonical) ║
 * ║  • Open Graph (type, site_name, image with alt)          ║
 * ║  • Twitter Cards (summary_large_image, site/creator)     ║
 * ║  • Geo & Language targeting (en_IN, Maharashtra)         ║
 * ║  • Viewport & theme-color                                ║
 * ║  • JSON-LD @graph with Person entity + page schema merge ║
 * ║  • Auto-generated BreadcrumbList                         ║
 * ║  • WebPage schema per route                              ║
 * ╚═══════════════════════════════════════════════════════════╝
 *
 * @param {string}  title        — Page title (appends " | Kiran Hajare")
 * @param {string}  description  — Meta description (150-160 chars ideal)
 * @param {string}  path         — URL path, e.g. "/articles"
 * @param {string}  [image]      — OG image URL (defaults to k1.webp)
 * @param {string}  [imageAlt]   — OG image alt text
 * @param {string}  [type]       — OG type (default "website")
 * @param {object}  [schema]     — Additional JSON-LD schema (Article, Event, etc.)
 * @param {string}  [keywords]   — Page-specific keywords (comma-separated)
 * @param {boolean} [noindex]    — Set true for pages that should not be indexed
 */
export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  imageAlt = 'Kiran Hajare — Digital Marketing Expert & Growth Strategist',
  type = 'website',
  schema = null,
  keywords = '',
  noindex = false,
}) {
  const url = `${SITE}${path}`;

  /* ── Title Construction ── */
  const fullTitle =
    path === '/'
      ? 'Kiran Hajare — Digital Marketing Expert & Growth Strategist for Coaching Institutes in India'
      : `${title} | Kiran Hajare`;

  /* ── Robots directive ── */
  const robotsContent = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  /* ── Default keywords (merged with page-specific) ── */
  const baseKeywords =
    'Kiran Hajare, hellokiransheth, digital marketing expert, growth strategist, coaching institute marketing, Meta ads expert India';
  const mergedKeywords = keywords ? `${keywords}, ${baseKeywords}` : baseKeywords;

  /* ── JSON-LD @graph: Merge Person + WebPage + optional page schema ── */
  const webPageSchema = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: fullTitle,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    inLanguage: 'en-IN',
    ...(image && { primaryImageOfPage: { '@type': 'ImageObject', url: image } }),
    dateModified: new Date().toISOString().split('T')[0],
  };

  const graphItems = [DEFAULT_PERSON_SCHEMA, webPageSchema];

  // Merge page-specific schema (Article, Project, Event, etc.)
  if (schema) {
    // Auto-link author/creator back to Person entity if applicable
    const enrichedSchema = {
      ...schema,
      ...(schema['@type'] === 'Article' || schema['@type'] === 'BlogPosting'
        ? {
            author: { '@id': PERSON_ID },
            publisher: { '@id': ORG_ID },
            isPartOf: { '@id': WEBSITE_ID },
            mainEntityOfPage: { '@id': `${url}#webpage` },
          }
        : {}),
    };
    graphItems.push(enrichedSchema);
  }

  const graphLD = {
    '@context': 'https://schema.org',
    '@graph': graphItems,
  };

  /* ── Breadcrumbs ── */
  const breadcrumbLD = buildBreadcrumbs(path, title);

  return (
    <Helmet>
      {/* ──── Primary SEO ──── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={mergedKeywords} />
      <meta name="author" content="Kiran Hajare" />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <link rel="canonical" href={url} />

      {/* ──── Viewport & Theme ──── */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0a0a0a" />

      {/* ──── Open Graph ──── */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_IN" />

      {/* ──── Twitter Cards ──── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* ──── Geo & Language Targeting ──── */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Maharashtra, India" />
      <meta httpEquiv="content-language" content="en-IN" />

      {/* ──── JSON-LD: @graph (Person + WebPage + page-schema) ──── */}
      <script type="application/ld+json">{JSON.stringify(graphLD)}</script>

      {/* ──── JSON-LD: BreadcrumbList ──── */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbLD)}</script>
    </Helmet>
  );
}
