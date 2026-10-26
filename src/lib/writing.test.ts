import { describe, expect, it } from 'vitest';
import { parseFeed } from './writing';

const item = (fields: string): string => `<item>${fields}</item>`;
const feed = (...items: string[]): string =>
  `<?xml version="1.0"?><rss version="2.0"><channel><title>Victor Saly</title>${items.join('')}</channel></rss>`;

describe('parseFeed', () => {
  it('reads each post, newest first, and decodes what XML escaped', () => {
    const posts = parseFeed(
      feed(
        item(
          '<title>Older</title><link>https://blog.victorsaly.com/a</link><description>One.</description><pubDate>Fri, 23 Oct 2026 00:00:00 GMT</pubDate>',
        ),
        item(
          '<title>Tom &amp; Jerry&#39;s &lt;game&gt;</title><link>https://blog.victorsaly.com/b</link><description><![CDATA[Two & three.]]></description><pubDate>Sun, 25 Oct 2026 00:00:00 GMT</pubDate>',
        ),
      ),
    );
    expect(posts.map((p) => p.title)).toEqual(["Tom & Jerry's <game>", 'Older']);
    expect(posts[0]?.summary).toBe('Two & three.');
    expect(posts[0]?.link).toBe('https://blog.victorsaly.com/b');
  });

  it('leaves out a post with no title, a link that is not https, or no real date', () => {
    const posts = parseFeed(
      feed(
        item(
          '<link>https://blog.victorsaly.com/x</link><pubDate>Sun, 25 Oct 2026 00:00:00 GMT</pubDate>',
        ),
        item(
          '<title>Plain http</title><link>http://example.com</link><pubDate>Sun, 25 Oct 2026 00:00:00 GMT</pubDate>',
        ),
        item('<title>No date</title><link>https://blog.victorsaly.com/y</link>'),
      ),
    );
    expect(posts).toEqual([]);
  });

  it('reads nothing from something that is not a feed', () => {
    expect(parseFeed('<html><body>Down for maintenance</body></html>')).toEqual([]);
  });
});
