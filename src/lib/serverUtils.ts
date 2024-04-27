'use server';
import { headers } from 'next/headers';

export async function getUrlPathName() {
  const headersList = headers();
  const url = headersList.get('x-url');
  return url ? new URL(url).pathname : '/';
}

// https://web.archive.org/web/20211110110818/https://codeconqueror.com/blog/get-the-current-url-in-next-js/
export async function getAbsoluteUrl(request: Request, setLocalhost?: string) {
  let protocol = 'https:';
  let host = request
    ? request.headers.get('x-forwarded-host') || request.headers.get('host')
    : window.location.host;

  if (!host) {
    const errorMessage = 'No host found on request for absoluteUrl';
    throw new Error(errorMessage);
  }

  if (host.indexOf('localhost') > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = 'http:';
  }

  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host,
  };
}
