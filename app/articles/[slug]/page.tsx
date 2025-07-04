import {marked} from 'marked'
import {getArticleBySlug} from '~/utils/notion.server'
import '~/markdown.css'
import {formatDate} from '~/utils/format-date'
import {Twitter} from '~/components/Twitter'
import Link from 'next/link'

marked.setOptions({
  renderer: new marked.Renderer(),
  // @ts-expect-error type is not assignable
  highlight: function (code, lang) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const hljs = require('highlight.js')
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, {language}).value
  },
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false,
})

// @ts-expect-error type is not assignable
export const meta: MetaFunction<typeof loader> = ({data}) => {
  if (data?.article) {
    return {
      title: `${data.article?.title} | Santi Dalmasso`,
      description: data.article?.description,
      'og:locale': 'en',
      'og:site_name': data.article?.title,
      'og:type': 'website',
      'og:url': `https://santid.me/articles/${data.article?.slug}`,
      'twitter:creator': '@santidalmasso',
      'twitter:site': '@santidalmasso',
      'twitter:card': 'https://santid.me/images/og.png',
      'og:image': 'https://santid.me/images/og.png',
    }
  }
}

export default async function Slug({params}: {params: {slug: string}}) {
  const slugString = String(params.slug)
  const article = await getArticleBySlug(slugString)
  const articleContent = await marked.parse(article.body.parent)

  return (
    <div
      className="flex justify-center w-full px-0 pt-8 pb-20 overflow-hidden md:px-8"
      style={{
        background:
          'radial-gradient(70% 50% at 50% 0%, rgba(200, 200, 200, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
      }}
    >
      <div className="w-full max-w-3xl mx-auto">
        <div className="relative p-8 mx-6 md:p-14 md:mx-14">
          <Link
            href="/"
            prefetch
            className="absolute z-10 hidden inline-block w-20 p-2 lg:inline-block lg:-left-20"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/SD.png"
              alt="Logo Santiago Dalmasso"
              width="34"
              height="51"
            />
          </Link>
          <Link href="/" prefetch className="text-sm text-white/40 lg:hidden">
            Back to home
          </Link>
          <h1 className="text-white leading-[3.5rem] mb-1">{article.title}</h1>
          <small className="text-sm text-white/40">
            Posted on{' '}
            {formatDate(new Date(article.date), 'es', {
              dateStyle: 'medium',
            })}
          </small>
        </div>
        <div className="relative p-8 mx-6 md:p-14 md:mx-14">
          <div className="h-[1px] absolute top-0 -left-[140px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="h-[1px] absolute top-0 -left-[140px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-3" />
          <div className="rotate-90 h-[1px] absolute -top-[150px] left-0 origin-top-left w-[700px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="rotate-90 h-[1px] absolute top-[350px] left-0 origin-top-left w-[300px] bg-gradient-to-r from-transparent via-white/40 glass-animation-2" />
          <main dangerouslySetInnerHTML={{__html: articleContent}} />
          <div className="h-[1px] absolute bottom-0 -right-[200px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="h-[1px] absolute bottom-0 -right-[200px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-4" />
          <div className="rotate-90 h-[1px] absolute -bottom-[200px] right-0 origin-bottom-right w-[700px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="rotate-90 h-[1px] absolute -bottom-[300px] right-0 origin-bottom-right w-[200px] -translate-y-20 hover:-translate-y-[450px] bg-gradient-to-r from-transparent via-white/40 glass-animation-1" />
        </div>
        <div className="relative text-white p-14">
          <div
            style={{
              position: 'absolute',
              background:
                'radial-gradient(30% 50% at 50% 50%,#fff 0, hsla(0,0%,100%,0) 100%)',
              opacity: 0.06,
              transform: 'rotate(45deg)',
              width: '100%',
              height: '100%',
              maxWidth: '1800px',
            }}
          ></div>
          <a
            href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fsantid.me/articles/${encodeURIComponent(
              slugString,
            )}&text=I+just+read+%22${encodeURIComponent(
              article.title,
            )}%22+by+%40santidalmasso%0A%0A`}
            target="_blank"
            className="text-sm transition-all duration-300 text-white/30 hover:text-white/80"
            rel="noreferrer"
          >
            <div className="inline-block">
              <div
                style={{
                  background:
                    'linear-gradient(90deg,transparent, #111 10%,#222 20%, transparent)',
                }}
                className="rounded-sm border-1 border-white/10 "
              >
                <div className="flex items-center gap-2 p-4 bg-black/30 backdrop-blur-2xl">
                  <div className="rounded-full border-1 border-white/10 backdrop-blur-2xl bg-[#FFF1] p-2">
                    <Twitter />
                  </div>
                  <div>Share on Twitter</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
