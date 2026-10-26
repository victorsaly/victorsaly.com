/*
 * The newest posts from blog.victorsaly.com, read from its RSS feed when the site is built. The blog is
 * where the thinking behind this work is written up, so the home page shows the latest three. If the feed
 * cannot be read (offline, the blog down), the list is empty and the section is left out; the build
 * never fails over it.
 */

export interface Post {
  title: string;
  link: string;
  /** the post's message, two or three lines */
  summary: string;
  date: Date;
}

const FEED = 'https://blog.victorsaly.com/rss.xml';

const decode = (text: string): string =>
  text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim();

const field = (item: string, tag: string): string | undefined => {
  const match = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`).exec(item);
  return match?.[1] === undefined ? undefined : decode(match[1]);
};

/** Every post in an RSS 2.0 feed that has a title, an https link and a real date, newest first. */
export const parseFeed = (xml: string): Post[] =>
  [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
    .flatMap(([, item = '']) => {
      const title = field(item, 'title');
      const link = field(item, 'link');
      const date = new Date(field(item, 'pubDate') ?? '');
      if (!title || !link?.startsWith('https://') || Number.isNaN(date.getTime())) return [];
      return [{ title, link, summary: field(item, 'description') ?? '', date }];
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

/** The newest posts, or none when the feed cannot be read. */
export const latestWriting = async (count = 3): Promise<Post[]> => {
  try {
    const response = await fetch(FEED, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) return [];
    return parseFeed(await response.text()).slice(0, count);
  } catch {
    return [];
  }
};
