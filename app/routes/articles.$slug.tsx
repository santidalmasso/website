import { marked } from "marked";
import { useLoaderData } from "react-router";
import { getArticleBySlug } from "~/utils/notion.server";
import styles from "~/styles/markdown.css";
import { formatDate } from "~/utils/format-date";
import { Link, useLocation } from "@remix-run/react";
import { Twitter } from "~/components/Twitter";
import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const hljs = require("highlight.js");
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-",
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false,
});

export const links = () => [{ rel: "stylesheet", href: styles }];

export const loader = async ({ params }: LoaderArgs) => {
  const { slug } = params;
  const article = await getArticleBySlug(String(slug));
  return json(
    {
      article,
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

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (data?.article) {
    return {
      title: `${data.article?.title} | Santi Dalmasso`,
      description: data.article?.description,
      "og:image": `https://santid.me/images/og?title=${data.article?.title}`,
    };
  }
};

export default function Slug() {
  const { article } = useLoaderData<typeof loader>();
  const location = useLocation();

  return (
    <div
      className="overflow-hidden w-full flex justify-center pt-8 px-8 pb-20"
      style={{
        background:
          "radial-gradient(70% 50% at 50% 0%, rgba(200, 200, 200, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="relative p-14">
          <Link
            to="/"
            prefetch="intent"
            className="p-2 w-20 absolute inline-block hidden lg:inline-block lg:-left-20 z-10"
          >
            <img src="/icons/SD.png" alt="Logo Santiago Dalmasso" width="34" />
          </Link>
          <Link
            to="/"
            prefetch="intent"
            className="text-white/40 text-sm lg:hidden"
          >
            Back to home
          </Link>
          <h1 className="text-white leading-[3.5rem] mb-1">{article.title}</h1>
          <small className="text-white/40 text-sm">
            Posted on{" "}
            {formatDate(new Date(article.date), "es", {
              dateStyle: "medium",
            })}
          </small>
        </div>
        <div className="p-14 relative">
          <div className="h-[1px] absolute top-0 -left-[140px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="h-[1px] absolute top-0 -left-[140px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-3" />
          <div className="rotate-90 h-[1px] absolute -top-[150px] left-0 origin-top-left w-[700px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="rotate-90 h-[1px] absolute top-[350px] left-0 origin-top-left w-[300px] bg-gradient-to-r from-transparent via-white/40 glass-animation-2" />
          <main
            dangerouslySetInnerHTML={{ __html: marked.parse(article.body) }}
          />
          <div className="h-[1px] absolute bottom-0 -right-[200px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="h-[1px] absolute bottom-0 -right-[200px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-4" />
          <div className="rotate-90 h-[1px] absolute -bottom-[200px] right-0 origin-bottom-right w-[700px] bg-gradient-to-r from-transparent via-white/30" />
          <div className="rotate-90 h-[1px] absolute -bottom-[300px] right-0 origin-bottom-right w-[200px] -translate-y-20 hover:-translate-y-[450px] bg-gradient-to-r from-transparent via-white/40 glass-animation-1" />
        </div>
        <div className="text-white p-14 relative">
          <div
            style={{
              position: "absolute",
              background:
                "radial-gradient(30% 50% at 50% 50%,#fff 0, hsla(0,0%,100%,0) 100%)",
              opacity: 0.06,
              transform: "rotate(45deg)",
              width: "100%",
              height: "100%",
              maxWidth: "1800px",
            }}
          ></div>
          <Link
            prefetch="intent"
            to={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fsantid.me${encodeURIComponent(
              location.pathname
            )}&text=I+just+read+%22${encodeURIComponent(
              article.title
            )}%22+by+%40santidalmasso%0A%0A`}
            target="_blank"
            className="text-white/30 hover:text-white/80 transition-all duration-300 text-sm"
          >
            <div className="inline-block">
              <div
                style={{
                  background:
                    "linear-gradient(90deg,transparent, #111 10%,#222 20%, transparent)",
                }}
                className="border-1 border-white/10 rounded-sm "
              >
                <div className="bg-black/30 backdrop-blur-2xl p-4 gap-2 flex items-center">
                  <div className="rounded-full border-1 border-white/10 backdrop-blur-2xl bg-[#FFF1] p-2">
                    <Twitter />
                  </div>
                  <div>Share on Twitter</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
