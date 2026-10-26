import { posts } from '../lib/writing';
const esc = (s: string) => String(s).replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));
export function GET({ site }: any) {
const origin = site.toString().replace(/\/$/, '');
return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Jake Baskin — Writing</title><link>${origin}/writing/</link><description>Essays and notes by Jake Baskin.</description><language>en-us</language><atom:link href="${origin}/feed.xml" rel="self" type="application/rss+xml"/>${posts.map(p => `<item><title>${esc(p.frontmatter.title)}</title><description>${esc(p.frontmatter.description || '')}</description><link>${origin}/writing/${p.slug}/</link><guid>${origin}/writing/${p.slug}/</guid><pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate></item>`).join('')}</channel></rss>`, {headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
}
