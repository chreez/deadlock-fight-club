import { useEffect } from 'react';

interface MetaTagsConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function useMetaTags({ title, description, image, url }: MetaTagsConfig) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogImage && image) ogImage.setAttribute('content', image);
    if (ogUrl && url) ogUrl.setAttribute('content', url);

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');

    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    if (twitterImage && image) twitterImage.setAttribute('content', image);
    if (twitterUrl && url) twitterUrl.setAttribute('content', url);
  }, [title, description, image, url]);
}
