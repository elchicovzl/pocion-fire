export const updateMetaTags = (config: {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}) => {
  // Update title
  document.title = config.title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', config.description);

  // Update OG tags
  const updateOGTag = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  updateOGTag('og:title', config.ogTitle || config.title);
  updateOGTag('og:description', config.ogDescription || config.description);
  if (config.ogImage) updateOGTag('og:image', config.ogImage);
  if (config.canonical) updateOGTag('og:url', config.canonical);

  // Update Twitter tags
  const updateTwitterTag = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  updateTwitterTag('twitter:title', config.twitterTitle || config.title);
  updateTwitterTag('twitter:description', config.twitterDescription || config.description);
  if (config.twitterImage) updateTwitterTag('twitter:image', config.twitterImage);

  // Update canonical
  if (config.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonical);
  }
};
