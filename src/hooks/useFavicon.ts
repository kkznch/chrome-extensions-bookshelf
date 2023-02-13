import { useMemo } from 'react';

const getFaviconUrl = (u: string): string => {
  const url = new URL(u);

  const faviconUrl = new URL(chrome.runtime.getURL('/_favicon/'));
  faviconUrl.searchParams.set('pageUrl', url.origin);
  faviconUrl.searchParams.set('size', '32');

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
