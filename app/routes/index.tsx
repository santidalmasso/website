import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { LinkPreview } from "~/components/LinkPreview";
import { formatDate } from "~/utils/format-date";
import { getArticles } from "~/utils/notion.server";

const projects: {
  name: string;
  url: string;
  image: string;
  dateStart?: string;
  dateEnd: string;
}[] = [
  {
    name: "AutoSwap",
    url: "/projects/autoswap",
    image: "/previews/autoswap.webp",
    dateStart: "2021",
    dateEnd: "Present",
  },
  {
    name: "Rooftop",
    url: "/projects/rooftop",
    image: "/previews/rooftop.webp",
    dateStart: "2020",
    dateEnd: "2022",
  },
  {
    name: "BlogPost",
    url: "https://santidalmasso.github.io/BlogPost",
    image: "/previews/blogpost.webp",
    dateEnd: "2019",
  },
  {
    name: "Tropicals",
    url: "https://santidalmasso.github.io/iceCreamPage",
    image: "/previews/ice-cream-page.webp",
    dateEnd: "2019",
  },
  {
    name: "Travels",
    url: "https://santidalmasso.github.io/Travels",
    image: "/previews/travels.webp",
    dateEnd: "2019",
  },
  {
    name: "Sr. Pochoclo",
    url: "https://santidalmasso.github.io/srPochoclo",
    image: "/previews/sr-pochoclo.webp",
    dateEnd: "2019",
  },
];

export const meta: MetaFunction = () => {
  return {
    title: "Santi Dalmasso | Full Stack Developer",
    description:
      "Full-Stack developer from Argentina. Developing with react, node and typescript. Studyng Systems Engineering at UTN.",
    "og:image": "https://santid.me/images/santi-dalmasso.jpeg",
    "og:url": "https://santid.me",
    "twitter:card": "https://santid.me/images/santi-dalmasso.jpeg",
  };
};

export const loader = async () => {
  const articles = await getArticles();
  return json(
    {
      articles,
    },
    {
      headers: {
        "Cache-Control": `public, max-age=${
          60 * 60 * 24
        } , stale-while-revalidate=${60 * 60 * 24 * 100}`,
      },
    }
  );
};

export default function Index() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <div
      className="overflow-hidden w-full flex justify-center p-8"
      style={{
        background:
          "radial-gradient(70% 50% at 50% 0%, rgba(200, 200, 200, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <header className="text-[#D3D3D3] p-10 sm:p-16 relative">
          <div className="h-full w-full" />
          <img
            className="absolute -ml-16 mt-2"
            src="/icons/SD.png"
            alt="Logo Santiago Dalmasso"
            width="34"
            height="51"
          />
          <p className="mb-4">
            I love improving and making people&apos;s lives easier by developing
            technological solutions. I work as a&nbsp; Full-Stack Developer
            &nbsp;at&nbsp;&nbsp;
            <a
              href="https://www.rooftop.dev"
              className="font-bold filter grayscale brightness-0 dark:brightness-200 hover:filter-none text-rooftop duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <span className="-mr-0.5 mb-0.5 inline-block align-bottom">
                <img
                  src="/icons/rooftop.png"
                  height="22px"
                  width="22px"
                  alt="Rooftop logo"
                />
              </span>
              &nbsp;Rooftop&nbsp;
            </a>
            — developing with react, node and typescript.
          </p>
          <p className="mb-4">
            Currently I am finishing my studies in Information Systems
            Engineering and trying to become a better developer as I grow in my
            professional career.
          </p>
          <p>
            I enjoy learning about new technologies and I am passionate about
            web development.
          </p>
          <div className="h-[1px] absolute bottom-0 -right-[200px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="h-[1px] absolute bottom-0 -right-[200px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-4" />
          <div className="rotate-90 h-[1px] absolute -bottom-[500px] right-0 origin-bottom-right w-[700px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="rotate-90 h-[1px] absolute -bottom-[600px] right-0 origin-bottom-right w-[200px] -translate-y-20 hover:-translate-y-[450px] bg-gradient-to-r from-transparent via-white/40 glass-animation-1" />
        </header>
        <main>
          <section className="mx-auto w-full max-w-screen-lg p-10 sm:p-16">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
              Portfolio
            </h2>
            <p className="text-white/40">Some of my works and projects</p>
            <ul className="mx-8 mt-6">
              {projects.map((p) => (
                <li className="list-item" key={p.name}>
                  <LinkPreview
                    href={p.url}
                    alt={p.name}
                    imageSrc={p.image}
                    blank={p.url?.[0] !== "/"}
                  >
                    <strong className="text-[#BFBFBF] underline-animation font-normal">
                      {p.name}
                    </strong>
                    <small className="ml-2 text-white/30">
                      {p.dateStart ? `${p.dateStart} - ` : null}
                      {p.dateEnd}
                    </small>
                  </LinkPreview>
                </li>
              ))}
            </ul>
          </section>
          <section className="p-10 sm:p-16 relative">
            <div className="h-[1px] absolute top-0 -left-[140px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
            <div className="h-[1px] absolute top-0 -left-[140px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-3" />
            <div className="rotate-90 h-[1px] absolute -top-[250px] left-0 origin-top-left w-[700px] bg-gradient-to-r from-transparent via-white/30" />
            <div className="rotate-90 h-[1px] absolute top-[250px] left-0 origin-top-left w-[300px] bg-gradient-to-r from-transparent via-white/40 glass-animation-2" />
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
              Articles
            </h2>
            <ul className="mt-6">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    className="flex flex-col rounded-xl py-2 group"
                    to={`/articles/${a.slug}`}
                    prefetch="intent"
                  >
                    <strong className="text-[#BFBFBF] font-normal group-hover:underline">
                      {a.title}
                    </strong>
                    <p className="text-white/30 text-xs">
                      {formatDate(new Date(a.date), "es", {
                        dateStyle: "medium",
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
  );
}
