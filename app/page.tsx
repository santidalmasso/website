import {LinkPreview} from '~/components/LinkPreview'
import {formatDate} from '~/utils/format-date'
import {getArticles} from '~/utils/notion.server'
import Link from 'next/link'

const projects: {
  name: string
  url: string
  image: string
  dateStart?: string
  dateEnd: string
}[] = [
  {
    name: 'AutoSwap',
    url: '/projects/autoswap',
    image: '/previews/autoswap.webp',
    dateStart: '2021',
    dateEnd: 'Present',
  },
  {
    name: 'Rooftop',
    url: '/projects/rooftop',
    image: '/previews/rooftop.webp',
    dateStart: '2020',
    dateEnd: 'Present',
  },
  {
    name: 'BlogPost',
    url: 'https://santidalmasso.github.io/BlogPost',
    image: '/previews/blogpost.webp',
    dateEnd: '2019',
  },
  {
    name: 'Tropicals',
    url: 'https://santidalmasso.github.io/iceCreamPage',
    image: '/previews/ice-cream-page.webp',
    dateEnd: '2019',
  },
  {
    name: 'Travels',
    url: 'https://santidalmasso.github.io/Travels',
    image: '/previews/travels.webp',
    dateEnd: '2019',
  },
  {
    name: 'Sr. Pochoclo',
    url: 'https://santidalmasso.github.io/srPochoclo',
    image: '/previews/sr-pochoclo.webp',
    dateEnd: '2019',
  },
]

export default async function Home() {
  const articles = await getArticles()

  return (
    <div
      className="flex justify-center w-full p-8 overflow-hidden"
      style={{
        background:
          'radial-gradient(70% 50% at 50% 0%, rgba(200, 200, 200, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
      }}
    >
      <div className="max-w-3xl mx-auto">
        <header className="text-[#D3D3D3] p-10 sm:p-16 relative">
          <div className="w-full h-full" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="absolute mt-2 -ml-16"
            src="/icons/SD.png"
            alt="Logo Santiago Dalmasso"
            width="34"
            height="51"
          />
          <p className="mb-4">
            I love improving and making people&apos;s lives easier by developing
            technological solutions. I work as a Full-Stack Developer at{' '}
            <a
              href="https://www.rooftop.dev"
              className="font-bold duration-300 filter grayscale brightness-0 dark:brightness-200 hover:filter-none text-rooftop"
              target="_blank"
              rel="noreferrer"
            >
              <span className="-mr-0.5 mb-0.5 inline-block align-bottom">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/rooftop.png"
                  height="22px"
                  width="22px"
                  alt="Rooftop logo"
                />
              </span>
              Rooftop
            </a>
            — developing with react, node and typescript.
          </p>
          <p className="mb-4">
            Currently I am finishing my studies in Information Systems
            Engineering and trying to become a better developer as I grow in my
            professional career.
          </p>
          <p>
            I am also a passionate about learning new things and I am always
            looking for new challenges.
          </p>
          <div className="h-[1px] absolute bottom-0 -right-[200px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="h-[1px] absolute bottom-0 -right-[200px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-4" />
          <div className="rotate-90 h-[1px] absolute -bottom-[500px] right-0 origin-bottom-right w-[700px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="rotate-90 h-[1px] absolute -bottom-[600px] right-0 origin-bottom-right w-[200px] -translate-y-20 hover:-translate-y-[450px] bg-gradient-to-r from-transparent via-white/40 glass-animation-1" />
        </header>
        <main>
          <section className="w-full max-w-screen-lg p-10 mx-auto sm:p-16">
            <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">
              Portfolio
            </h2>
            <p className="text-white/40">Some of my works and projects</p>
            <ul className="mx-8 mt-6">
              {projects.map(p => (
                <li className="list-item" key={p.name}>
                  <LinkPreview
                    href={p.url}
                    alt={p.name}
                    imageSrc={p.image}
                    blank={p.url?.[0] !== '/'}
                  >
                    <strong className="text-[#BFBFBF] underline-animation font-normal">
                      {p.name}
                    </strong>
                    <small className="ml-2 text-white/30">
                      {p.dateStart ? `${p.dateStart} - ` : null}
                      {p.dateEnd === 'Present' ? 'Present' : p.dateEnd}
                    </small>
                  </LinkPreview>
                </li>
              ))}
            </ul>
          </section>
          <section className="relative p-10 sm:p-16">
            <div className="h-[1px] absolute top-0 -left-[140px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
            <div className="h-[1px] absolute top-0 -left-[140px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-3" />
            <div className="rotate-90 h-[1px] absolute -top-[250px] left-0 origin-top-left w-[700px] bg-gradient-to-r from-transparent via-white/30" />
            <div className="rotate-90 h-[1px] absolute top-[250px] left-0 origin-top-left w-[300px] bg-gradient-to-r from-transparent via-white/40 glass-animation-2" />
            <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">
              Articles
            </h2>
            <ul className="mt-6">
              {articles.map(a => (
                <li key={a.slug}>
                  <Link
                    className="flex flex-col py-2 rounded-xl group"
                    href={`/articles/${a.slug}`}
                    prefetch
                  >
                    <strong className="text-[#BFBFBF] font-normal group-hover:underline">
                      {a.title}
                    </strong>
                    <p className="text-xs text-white/30">
                      {formatDate(new Date(a.date), 'en', {
                        dateStyle: 'medium',
                      })}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
