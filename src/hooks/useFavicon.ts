import { useMemo } from 'react';

const getFaviconUrl = (u: string): string => {
  const url = new URL(u);
  const faviconUrl = new URL('https://www.google.com/s2/favicons');
  faviconUrl.searchParams.set('domain', url.origin);

  return faviconUrl.toString();
};

export const useFavicon = (url?: string) => {
  const faviconUrl = useMemo(() => {
    if (url == null) return '/img/default-favicon.svg';
    return getFaviconUrl(url);
  }, [url]);

  return {
    faviconUrl,
  };
};
