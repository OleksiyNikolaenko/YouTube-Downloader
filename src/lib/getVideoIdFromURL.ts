export function getVideoIdFromURL(url: string): string | null {
  if (!url) return null;

  try {
    const withProtocol =
      url.startsWith('http://') || url.startsWith('https://')
        ? url
        : `https://${url}`;

    const searchParams = new URL(withProtocol).searchParams;
    return searchParams.get('v');
  } catch {
    return null;
  }
}
