var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});

// app/styles/app.css
var app_default = "/build/_assets/app-CIP5VNB3.css";

// app/styles/global.css
var global_default = "/build/_assets/global-GK6P5EJH.css";

// app/root.tsx
var import_react2 = require("@remix-run/react");

// app/components/Footer.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "overflow-hidden", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-[1px] w-full bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-[1px] w-[500px] bg-gradient-to-r from-transparent via-white/40 glass-animation-3" }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center text-sm text-white/50 py-8 bg-black/70", children: [
    "Built by\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "text-white/70", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:santidalmassoj@gmail.com", children: "Santi" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Footer.tsx",
  lineNumber: 34,
  columnNumber: 5
}, this);

// app/root.tsx
var import_react3 = require("@vercel/analytics/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  title: "Santi Dalmasso",
  author: "Santi Dalmasso",
  HandheldFriendly: "True",
  pagename: "Santi Dalmasso",
  MobileOptimized: "320",
  "theme-color": "#111",
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "black-transparent",
  "apple-mobile-web-app-title": "Santi Dalmasso",
  "mobile-web-app-capable": "yes",
  "og:locale": "en",
  "og:site_name": "Santi Dalmasso",
  "og:type": "website",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@santidalmasso",
  "twitter:site": "@santidalmasso",
  "X-UA-Compatible": "IE=edge,chrome=1"
}), links = () => [
  { rel: "preload", as: "style", href: app_default },
  { rel: "preload", as: "style", href: global_default },
  { rel: "stylesheet", href: app_default },
  { rel: "stylesheet", href: global_default }
], loader = () => ({
  ENV: {
    ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID
  }
});
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Analytics, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
function App() {
  let { ENV } = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "script",
      {
        dangerouslySetInnerHTML: {
          __html: `window.ENV = ${JSON.stringify(ENV)}`
        }
      },
      void 0,
      !1,
      {
        fileName: "app/root.tsx",
        lineNumber: 85,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react2.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "text-white/90", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-[calc(100vh-5.5rem)] w-full flex flex-col justify-start pt-20 md:pt-0 md:justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-[120px] md:text-[180px] md:leading-[200px] font-bold", children: caught.status }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-white/50 text-4xl md:text-5xl", children: [
      caught.statusText,
      "!"
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 104,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-white/40 my-4", children: "We couldn't find the page you were looking for." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "/", className: "text-white/80 text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-4", children: "\u2190 Go Back" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 111,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 100,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

// app/routes/articles.$slug.tsx
var articles_slug_exports = {};
__export(articles_slug_exports, {
  default: () => Slug,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta2
});
var import_marked = require("marked");

// app/utils/notion.server.ts
var import_client = require("@notionhq/client");

// app/utils/env.ts
var import_zod = require("zod"), envVariables = import_zod.z.object({
  NOTION_SECRET: import_zod.z.string(),
  NOTION_ARTICLES_DATABASE_ID: import_zod.z.string()
}), env = envVariables.parse(process.env);

// app/utils/notion.server.ts
var import_zod2 = require("zod"), import_node = require("@remix-run/node"), import_notion_to_md = require("notion-to-md"), notion = new import_client.Client({
  auth: env.NOTION_SECRET
}), n2m = new import_notion_to_md.NotionToMarkdown({ notionClient: notion }), NotionArticlesSchema = import_zod2.z.object({
  results: import_zod2.z.array(
    import_zod2.z.object({
      id: import_zod2.z.string(),
      properties: import_zod2.z.object({
        Title: import_zod2.z.object({
          title: import_zod2.z.array(
            import_zod2.z.object({
              plain_text: import_zod2.z.string()
            })
          )
        }),
        Description: import_zod2.z.object({
          rich_text: import_zod2.z.array(
            import_zod2.z.object({
              plain_text: import_zod2.z.string()
            })
          )
        }),
        "Created time": import_zod2.z.object({
          created_time: import_zod2.z.string()
        }),
        Slug: import_zod2.z.object({
          rich_text: import_zod2.z.array(
            import_zod2.z.object({
              plain_text: import_zod2.z.string()
            })
          )
        }),
        Status: import_zod2.z.object({
          status: import_zod2.z.object({
            id: import_zod2.z.enum(["approved", "in-review"])
          })
        })
      })
    })
  )
});
async function getArticles() {
  var _a;
  let data = await notion.databases.query({
    database_id: env.NOTION_ARTICLES_DATABASE_ID
  }), validData = NotionArticlesSchema.parse(data);
  return ((_a = validData == null ? void 0 : validData.results) == null ? void 0 : _a.map(normalizeArticlessResults).filter((a) => a.status === "approved")) ?? [];
}
function normalizeArticlessResults(result) {
  var _a, _b, _c, _d, _e, _f, _g;
  return {
    id: result.id,
    title: (_a = result.properties) == null ? void 0 : _a.Title.title[0].plain_text,
    date: (_b = result.properties) == null ? void 0 : _b["Created time"].created_time,
    slug: (_d = (_c = result.properties) == null ? void 0 : _c.Slug.rich_text[0]) == null ? void 0 : _d.plain_text,
    status: (_e = result.properties) == null ? void 0 : _e.Status.status.id,
    description: (_g = (_f = result.properties) == null ? void 0 : _f.Description.rich_text[0]) == null ? void 0 : _g.plain_text
  };
}
async function getArticleBySlug(slug) {
  let articleFindedBySlug = (await getArticles()).find((article) => article.slug === slug);
  if (!articleFindedBySlug)
    throw (0, import_node.json)("Not Found", { status: 404, statusText: "Article not found" });
  let articleMdBlocks = await n2m.pageToMarkdown(articleFindedBySlug.id), articleMdString = n2m.toMarkdownString(articleMdBlocks);
  return {
    ...articleFindedBySlug,
    body: articleMdString
  };
}

// app/styles/markdown.css
var markdown_default = "/build/_assets/markdown-5OHMBTGJ.css";

// app/utils/format-date.ts
function formatDate(date, locale, options) {
  return new Intl.DateTimeFormat(locale, { ...options }).format(date);
}

// app/routes/articles.$slug.tsx
var import_react4 = require("@remix-run/react");

// app/components/Twitter.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Twitter = ({ height = 24, width = 24 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { width, height, fill: "none", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("title", { children: "Twitter" }, void 0, !1, {
    fileName: "app/components/Twitter.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "path",
    {
      fill: "currentColor",
      d: "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Twitter.tsx",
      lineNumber: 4,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Twitter.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);

// app/routes/articles.$slug.tsx
var import_node2 = require("@remix-run/node"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
import_marked.marked.setOptions({
  renderer: new import_marked.marked.Renderer(),
  highlight: function(code, lang) {
    let hljs = require("highlight.js"), language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-",
  pedantic: !1,
  gfm: !0,
  breaks: !1,
  sanitize: !1,
  smartypants: !1,
  xhtml: !1
});
var links2 = () => [{ rel: "stylesheet", href: markdown_default }], loader2 = async ({ params }) => {
  let { slug } = params, article = await getArticleBySlug(String(slug));
  return (0, import_node2.json)(
    {
      article
    },
    {
      headers: {
        "Cache-Control": `public, max-age=${60 * 60 * 24} , stale-while-revalidate=${60 * 60 * 24 * 100}`
      }
    }
  );
}, meta2 = ({ data }) => {
  var _a, _b, _c, _d, _e;
  if (data != null && data.article)
    return {
      title: `${(_a = data.article) == null ? void 0 : _a.title} | Santi Dalmasso`,
      description: (_b = data.article) == null ? void 0 : _b.description,
      "og:locale": "en",
      "og:site_name": (_c = data.article) == null ? void 0 : _c.title,
      "og:type": "website",
      "og:url": `https://santid.me/articles/${(_d = data.article) == null ? void 0 : _d.slug}`,
      "twitter:creator": "@santidalmasso",
      "twitter:site": "@santidalmasso",
      "twitter:card": "summary_large_image",
      "og:image": `https://santid.me/images/og?title=${encodeURI(
        (_e = data.article) == null ? void 0 : _e.title
      )}`
    };
};
function Slug() {
  let { article } = (0, import_react4.useLoaderData)(), location = (0, import_react4.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      className: "flex justify-center w-full px-8 pt-8 pb-20 overflow-hidden",
      style: {
        background: "radial-gradient(70% 50% at 50% 0%, rgba(200, 200, 200, 0.1) 0%, rgba(255, 255, 255, 0) 100%)"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative p-14", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_react4.Link,
            {
              to: "/",
              prefetch: "intent",
              className: "absolute z-10 hidden inline-block w-20 p-2 lg:inline-block lg:-left-20",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "img",
                {
                  src: "/icons/SD.png",
                  alt: "Logo Santiago Dalmasso",
                  width: "34",
                  height: "51"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/articles.$slug.tsx",
                  lineNumber: 84,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/articles.$slug.tsx",
              lineNumber: 79,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_react4.Link,
            {
              to: "/",
              prefetch: "intent",
              className: "text-sm text-white/40 lg:hidden",
              children: "Back to home"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/articles.$slug.tsx",
              lineNumber: 91,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-white leading-[3.5rem] mb-1", children: article.title }, void 0, !1, {
            fileName: "app/routes/articles.$slug.tsx",
            lineNumber: 98,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("small", { className: "text-sm text-white/40", children: [
            "Posted on",
            " ",
            formatDate(new Date(article.date), "es", {
              dateStyle: "medium"
            })
          ] }, void 0, !0, {
            fileName: "app/routes/articles.$slug.tsx",
            lineNumber: 99,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$slug.tsx",
          lineNumber: 78,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative p-14", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-[1px] absolute top-0 -left-[140px] w-[550px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
            fileName: "app/routes/articles.$slug.tsx",
            lineNumber: 107,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-[1px] absolute top-0 -left-[140px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-3" }, void 0, !1, {
            fileName: "app/routes/articles.$slug.tsx",
            lineNumber: 108,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute -top-[150px] left-0 origin-top-left w-[700px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
            fileName: "app/routes/articles.$slug.tsx",
            lineNumber: 109,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute top-[350px] left-0 origin-top-left w-[300px] bg-gradient-to-r from-transparent via-white/40 glass-animation-2" }, void 0, !1, {
            fileName: "app/routes/articles.$slug.tsx",
            lineNumber: 110,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "main",
            {
              dangerouslySetInnerHTML: { __html: import_marked.marked.parse(article.body) }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/articles.$slug.tsx",
              lineNumber: 111,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-[1px] absolute bottom-0 -right-[200px] w-[550px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
            fileName: "app/routes/articles.$slug.tsx",
            lineNumber: 114,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-[1px] absolute bottom-0 -right-[200px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-4" }, void 0, !1, {
            fileName: "app/routes/articles.$slug.tsx",
            lineNumber: 115,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute -bottom-[200px] right-0 origin-bottom-right w-[700px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
            fileName: "app/routes/articles.$slug.tsx",
            lineNumber: 116,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute -bottom-[300px] right-0 origin-bottom-right w-[200px] -translate-y-20 hover:-translate-y-[450px] bg-gradient-to-r from-transparent via-white/40 glass-animation-1" }, void 0, !1, {
            fileName: "app/routes/articles.$slug.tsx",
            lineNumber: 117,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$slug.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative text-white p-14", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "div",
            {
              style: {
                position: "absolute",
                background: "radial-gradient(30% 50% at 50% 50%,#fff 0, hsla(0,0%,100%,0) 100%)",
                opacity: 0.06,
                transform: "rotate(45deg)",
                width: "100%",
                height: "100%",
                maxWidth: "1800px"
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/articles.$slug.tsx",
              lineNumber: 120,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_react4.Link,
            {
              prefetch: "intent",
              to: `https://twitter.com/intent/tweet?url=https%3A%2F%2Fsantid.me${encodeURIComponent(
                location.pathname
              )}&text=I+just+read+%22${encodeURIComponent(
                article.title
              )}%22+by+%40santidalmasso%0A%0A`,
              target: "_blank",
              className: "text-sm transition-all duration-300 text-white/30 hover:text-white/80",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inline-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "div",
                {
                  style: {
                    background: "linear-gradient(90deg,transparent, #111 10%,#222 20%, transparent)"
                  },
                  className: "rounded-sm border-1 border-white/10 ",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-2 p-4 bg-black/30 backdrop-blur-2xl", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "rounded-full border-1 border-white/10 backdrop-blur-2xl bg-[#FFF1] p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Twitter, {}, void 0, !1, {
                      fileName: "app/routes/articles.$slug.tsx",
                      lineNumber: 152,
                      columnNumber: 21
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/articles.$slug.tsx",
                      lineNumber: 151,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: "Share on Twitter" }, void 0, !1, {
                      fileName: "app/routes/articles.$slug.tsx",
                      lineNumber: 154,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/articles.$slug.tsx",
                    lineNumber: 150,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/articles.$slug.tsx",
                  lineNumber: 143,
                  columnNumber: 15
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/articles.$slug.tsx",
                lineNumber: 142,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/articles.$slug.tsx",
              lineNumber: 132,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$slug.tsx",
          lineNumber: 119,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/articles.$slug.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/articles.$slug.tsx",
      lineNumber: 70,
      columnNumber: 5
    },
    this
  );
}

// app/routes/images.og.tsx
var images_og_exports = {};
__export(images_og_exports, {
  loader: () => loader3
});
var import_sharp = __toESM(require("sharp"));
async function loader3({ request }) {
  var _a;
  try {
    let { searchParams } = new URL(request.url), title = ((_a = searchParams.get("title")) == null ? void 0 : _a.slice(0, 40)) ?? "Santi Dalmasso Article";
    return new Response(
      await (0, import_sharp.default)(
        Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="687" height="325" viewBox="0 0 687 325" fill="none">
  <style>
    .title {
      fill: white;
      font: bold 50px sans-serif;
    }
    .author {
      fill: rgba(255, 255, 255, 0.4);
      font: 400 60px sans-serif;
    }
  </style>
  <rect width="687" height="325" fill="black"/>
  <text x="50" y="100" class="title">${title == null ? void 0 : title.slice(0, 20)}</text>
  ${title.slice(20, 40).length > 0 ? `<text x="50" y="160" class="title">${title.slice(20, 40).replace(/...$/, "...")}</text>` : ""}
  <text x="220" y="280" class="author">Santi Dalmasso</text>
</svg>
`)
      ).png().toBuffer(),
      {
        headers: {
          "Content-Type": "image/png",
          "Access-Control-Expose-Headers": "Content-Disposition",
          "Content-Disposition": `filename="https://santid.me/images/og?title=${title}"`,
          "x-content-type-options": "nosniff"
        }
      }
    );
  } catch (e) {
    return console.log(`${e.message}`), new Response("Failed to generate the image", {
      status: 500
    });
  }
}

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects
});
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Wrapper = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "overflow-hidden w-full flex justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-w-3xl mx-auto w-[90%]", children }, void 0, !1, {
  fileName: "app/routes/projects.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/routes/projects.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this), projects = {
  "/projects/autoswap": {
    name: "AutoSwap",
    image: "/images/autoswap.svg",
    dateStart: "2021",
    dateEnd: "Present"
  },
  "/projects/rooftop": {
    name: "Rooftop",
    image: "/images/rooftop.svg",
    dateStart: "2020",
    dateEnd: "2022"
  }
};
function Projects() {
  var _a;
  let matches = (0, import_react5.useMatches)(), project = projects[(_a = matches == null ? void 0 : matches[2]) == null ? void 0 : _a.pathname.toString()];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      className: "overflow-hidden",
      style: {
        background: 'url("/rings-bg.svg")',
        backgroundPositionX: "50%",
        backgroundPositionY: "0%",
        backgroundRepeat: "no-repeat"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Wrapper, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_react5.Link,
            {
              to: "/",
              className: "p-2 w-20 relative inline-block lg:-left-20 z-10",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "img",
                {
                  src: "/icons/SD.png",
                  alt: "Logo Santiago Dalmasso",
                  width: "34",
                  height: "51"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/projects.tsx",
                  lineNumber: 44,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/projects.tsx",
              lineNumber: 40,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("header", { className: "text-[#D3D3D3] p-10 sm:p-16 relative h-[780px] -mt-[6rem] flex flex-col justify-center items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col justify-center items-center animate-[fade_1s_ease_forwards] blur-lg opacity-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "img",
                {
                  className: "",
                  src: project.image,
                  alt: project.name,
                  width: "198",
                  height: "144"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/projects.tsx",
                  lineNumber: 53,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-[#959595] opacity-80 mt-8 text-4xl uppercase", children: project.name }, void 0, !1, {
                fileName: "app/routes/projects.tsx",
                lineNumber: 60,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "mt-1 text-sm text-white/30", children: [
                project.dateStart,
                " - ",
                project.dateEnd
              ] }, void 0, !0, {
                fileName: "app/routes/projects.tsx",
                lineNumber: 63,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "div",
              {
                style: {
                  position: "absolute",
                  background: "radial-gradient(50% 50% at 50% 50%,#fff 0,hsla(0,0%,100%,0) 100%)",
                  opacity: 0.06,
                  transform: "rotate(45deg)",
                  width: "100%",
                  height: "100%",
                  top: "-20px",
                  maxWidth: "1800px"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/projects.tsx",
                lineNumber: 68,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "-mt-96 text-white/30 relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-gradient-to-b from-transparent via-black to-transparent absolute top-[140px] w-full h-[30rem]" }, void 0, !1, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-10 sm:p-16 relative mt-64", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-[1px] absolute top-0 -left-[140px] w-[550px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 87,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-[1px] absolute top-0 -left-[140px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-3" }, void 0, !1, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute -top-[250px] left-0 origin-top-left w-[700px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 89,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute top-[250px] left-0 origin-top-left w-[300px] bg-gradient-to-r from-transparent via-white/40 glass-animation-2" }, void 0, !1, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 90,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-[1px] absolute bottom-0 -right-[200px] w-[550px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 91,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 92,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-[1px] absolute bottom-0 -right-[200px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-4" }, void 0, !1, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute -bottom-[200px] right-0 origin-bottom-right w-[700px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 94,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute -bottom-[200px] right-0 origin-bottom-right w-[200px] -translate-y-20 hover:-translate-y-[450px] bg-gradient-to-r from-transparent via-white/40 glass-animation-1" }, void 0, !1, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 95,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 86,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 83,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/projects.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
}

// app/routes/projects/autoswap.tsx
var autoswap_exports = {};
__export(autoswap_exports, {
  default: () => AutoSwap,
  headers: () => headers,
  meta: () => meta3
});
var import_react6 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), requirements = [
  'As a seller who has published a car, you can choose a "verified publication" mode by making the online payment, and the system will assign you an appointment at a nearby validation point.',
  'The mechanics of the checkpoints must be able to enter a control panel where they can manage the shifts made available to the platform, and upload through a wizard the "checklist" result of a particular technical verification.',
  "The consumer interested in buying a vehicle must be able to explore the current offer of units through a filter system by brand, model, price range and see a detailed publication.",
  "In the case of a verified unit, the consumer should be able to access the detailed technical report issued by the verification point.",
  "The buyer must be able to reserve the vehicle by paying a percentage of the vehicle's value online."
], meta3 = () => ({
  charset: "utf-8",
  title: "AutoSwap | Santi Dalmasso",
  viewport: "width=device-width,initial-scale=1"
});
function headers() {
  return {
    "Cache-Control": `public, max-age=${60 * 60 * 24} , stale-while-revalidate=${60 * 60 * 24 * 100}`
  };
}
function AutoSwap() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "AutoSwap is a final project to obtain my degree in Systems Engineer. My colleague and I are currently building a marketplace for buying and selling cars with differential validation services." }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-4", children: "The marketplace provides buyers with information on the physical and registration status of vehicles. Following the PMBOK (Project Management Body of Knowledge) we are developing a project from start to finish." }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 mt-10 text-white", children: "Features" }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Some of the main requirements were:" }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "mx-8 mt-6", children: requirements.map((r, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "list-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "font-normal", children: r }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this) }, i, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex w-full justify-center gap-2 my-10 mb-14", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "video",
        {
          className: "w-[calc(33%-1rem)]",
          playsInline: !0,
          loop: !0,
          autoPlay: !0,
          src: "/videos/autoswap-cars.mp4"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/projects/autoswap.tsx",
          lineNumber: 52,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "video",
        {
          className: "w-[calc(33%-1rem)]",
          playsInline: !0,
          loop: !0,
          autoPlay: !0,
          src: "/videos/autoswap-checklist.mp4"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/projects/autoswap.tsx",
          lineNumber: 59,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "video",
        {
          className: "w-[calc(33%-1rem)]",
          playsInline: !0,
          loop: !0,
          autoPlay: !0,
          src: "/videos/autoswap-checkout.mp4"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/projects/autoswap.tsx",
          lineNumber: 66,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 mt-10 text-white", children: "Design" }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Although I am not a design specialist, I designed all the views and components and Figma. Then, it was developed in the frontend with React, Reach and Tailwind." }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 mt-10 text-white", children: "Backend and Frontend" }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mb-4", children: "On the backend, we planned and executed an hexagonal architecture. Firstly it is designed as a monolith application but divided into different modules so that in the future, if necessary, they can converted to micro-services. For the CQRS pattern we use RabbitMQ as message-broker." }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mb-4", children: "In the frontend we use Next.js and the backend we use express, typescript and typeorm. The databases we selected were MySql, Redis for cache and ElasticSearch for full-text search." }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "With ElasticSearch we build the vehicle search engine with different filters." }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "video",
      {
        className: "w-full mt-8 mb-14",
        playsInline: !0,
        loop: !0,
        autoPlay: !0,
        src: "/videos/publish-car.mp4"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/projects/autoswap.tsx",
        lineNumber: 102,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 mt-10 text-white", children: "CI/CD" }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mb-4", children: "We used Github Actions as platform to automate build, test, deployment and static code analysis." }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "On the local, we use docker to isolate the code from the hardware. In production, we applied Kubernetes to automating deployment, scaling, and orchestration of containers." }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 mt-10 text-white", children: "Third-party Implementation" }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mb-4", children: [
      "Mercado Pago was the payment gateway service that we implemented to make payments on the platform, both for reservations and services.",
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mb-4", children: "In order for mechanics to be able to charge for their services, we implemented Mercado Pago's OAuth." }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "As a map service we use the Google Maps API and implement a top layer to customize the styles with leafmap." }, void 0, !1, {
      fileName: "app/routes/projects/autoswap.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/autoswap.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/projects/rooftop.tsx
var rooftop_exports = {};
__export(rooftop_exports, {
  default: () => Rooftop,
  headers: () => headers2,
  meta: () => meta4
});
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta4 = () => ({
  charset: "utf-8",
  title: "Rooftop | Santi Dalmasso",
  viewport: "width=device-width,initial-scale=1"
});
function headers2() {
  return {
    "Cache-Control": `public, max-age=${60 * 60 * 24} , stale-while-revalidate=${60 * 60 * 24 * 100}`
  };
}
function Rooftop() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-4", children: "Rooftop is a distributed community of developers that offers a range of benefits to its members, including one-on-one mentoring, opportunities to enhance their personal brand, access to job offers, and free training." }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "It also helps Rooftoppers to find suitable projects that allow them to work 100% remotely at a competitive salary while providing support and guidance throughout the process." }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 mt-10 text-white", children: "Monitoring application" }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-4", children: "My first experience into Rooftop was a project that consisted of an application for monitoring all sites of the company and verify if a website was available or not or checks on the SSL certificate." }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "I mainly worked as frontend developer, developing with Angular. Nevertheless I code some features on the backend and I implemented the core of \u201Cchecks runner\u201D, a CLI that allowed to run each check in Go." }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 mt-10 text-white", children: "Landing Page" }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-4", children: "I made some small changes on the Company\u2019s landing page. The most big change I made was the implementations of i18n that require a huge refactor on the router application. Taking into consideration the best practices of Next.js I did the refactor and was able to significally reduce the quantity of code. The landing page performance was improved greatly, moving from seconds to milliseconds in SEO metrics." }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "video",
      {
        className: "w-full mt-8 mb-14",
        playsInline: !0,
        loop: !0,
        autoPlay: !0,
        src: "/videos/rooftop-landing.mp4"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/projects/rooftop.tsx",
        lineNumber: 56,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 mt-10 text-white", children: "Internal applications" }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-4", children: "I these applications I worked mainly as a frontend but I had the possibility to implement some backend issues." }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Together with the team, we builded internal applications necessaries for help to company finding potencial developers and companies. Most of my time was spent implementing the frontend and BBF (backend for frontend) with Next.js to consume the data from Mongo databases. In addition, we did a lot of research and we generated many design documents." }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 mt-10 text-white", children: "UI Component Library" }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-4", children: "To be consistent in \u201Clook and feel\u201D through applications, we build a UI component library. This allowed us to reuse code and design elements, reducing development time and increasing efficiency. Also make it easier to manage changes and updates. We host the library on Github into monorepo. We also generate configs packages and assets such as images and fonts packages for use in all projects." }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "These were builded with TailwindCSS, React and for some components we used Reach to ensure accessibility" }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 mt-10 text-white", children: "UI Component Library" }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-4", children: "Rooftop is a great company with a very talented team. At Rooftop, we code based on best practices, taking into consideration SOLID principles, TDD with unit and integration testings, Clean Architectures and many patterns such as CQRS, Repository and many more. Also, we applied different CI/CD pipelines to automate processes and ensure code quality." }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "In addition, we worked with agile methodology, specifically SCRUM framework." }, void 0, !1, {
      fileName: "app/routes/projects/rooftop.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "video",
      {
        className: "w-full mt-8",
        playsInline: !0,
        loop: !0,
        autoPlay: !0,
        src: "/videos/rooftop-design-system.mp4"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/projects/rooftop.tsx",
        lineNumber: 108,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/projects/rooftop.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader4,
  meta: () => meta5
});
var import_node3 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/components/LinkPreview.tsx
var HoverCard = __toESM(require("@radix-ui/react-hover-card")), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), LinkPreview = ({
  children,
  imageSrc,
  href,
  alt,
  blank = !0
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(HoverCard.Root, { openDelay: 0, closeDelay: 300, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(HoverCard.Trigger, { className: "cursor-pointer", asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { to: href, ...blank ? { target: "_blank" } : {}, children }, void 0, !1, {
    fileName: "app/components/LinkPreview.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/LinkPreview.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    HoverCard.Content,
    {
      side: "top",
      className: " rounded-xl bg-gray/30 border-1 backdrop-blur border-white/20 overflow-hidden shadow-2xl preview-animation pointer-events-none",
      style: { boxShadow: "0 5px 10px rgba(0,0,0,0.12)" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "div",
          {
            className: "m-2 rounded-lg overflow-hidden border-box preview-animation",
            style: { height: "144px", width: "224px" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: imageSrc, width: 224, height: 168, alt }, void 0, !1, {
              fileName: "app/components/LinkPreview.tsx",
              lineNumber: 36,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/LinkPreview.tsx",
            lineNumber: 32,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(HoverCard.Arrow, { height: 20, fill: "none" }, void 0, !1, {
          fileName: "app/components/LinkPreview.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/LinkPreview.tsx",
      lineNumber: 27,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/LinkPreview.tsx",
  lineNumber: 21,
  columnNumber: 5
}, this);

// app/routes/index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), projects2 = [
  {
    name: "AutoSwap",
    url: "/projects/autoswap",
    image: "/previews/autoswap.webp",
    dateStart: "2021",
    dateEnd: "Present"
  },
  {
    name: "Rooftop",
    url: "/projects/rooftop",
    image: "/previews/rooftop.webp",
    dateStart: "2020",
    dateEnd: "2022"
  },
  {
    name: "BlogPost",
    url: "https://santidalmasso.github.io/BlogPost",
    image: "/previews/blogpost.webp",
    dateEnd: "2019"
  },
  {
    name: "Tropicals",
    url: "https://santidalmasso.github.io/iceCreamPage",
    image: "/previews/ice-cream-page.webp",
    dateEnd: "2019"
  },
  {
    name: "Travels",
    url: "https://santidalmasso.github.io/Travels",
    image: "/previews/travels.webp",
    dateEnd: "2019"
  },
  {
    name: "Sr. Pochoclo",
    url: "https://santidalmasso.github.io/srPochoclo",
    image: "/previews/sr-pochoclo.webp",
    dateEnd: "2019"
  }
], meta5 = () => ({
  title: "Santi Dalmasso | Full Stack Developer",
  description: "Full-Stack developer from Argentina. Developing with react, node and typescript. Studyng Systems Engineering at UTN.",
  "og:image": "https://santid.me/images/santi-dalmasso.jpeg",
  "og:url": "https://santid.me",
  "twitter:card": "https://santid.me/images/santi-dalmasso.jpeg"
}), loader4 = async () => {
  let articles = await getArticles();
  return (0, import_node3.json)(
    {
      articles
    },
    {
      headers: {
        "Cache-Control": `public, max-age=${60 * 60 * 24} , stale-while-revalidate=${60 * 60 * 24 * 100}`
      }
    }
  );
};
function Index() {
  let { articles } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "div",
    {
      className: "overflow-hidden w-full flex justify-center p-8",
      style: {
        background: "radial-gradient(70% 50% at 50% 0%, rgba(200, 200, 200, 0.1) 0%, rgba(255, 255, 255, 0) 100%)"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("header", { className: "text-[#D3D3D3] p-10 sm:p-16 relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "h-full w-full" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "img",
            {
              className: "absolute -ml-16 mt-2",
              src: "/icons/SD.png",
              alt: "Logo Santiago Dalmasso",
              width: "34",
              height: "51"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 96,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mb-4", children: [
            "I love improving and making people's lives easier by developing technological solutions. I work as a\xA0 Full-Stack Developer \xA0at\xA0\xA0",
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react8.Link,
              {
                to: "https://rooftop.dev",
                prefetch: "intent",
                className: "font-bold filter grayscale brightness-0 dark:brightness-200 hover:filter-none text-rooftop duration-300",
                target: "_blank",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "-mr-0.5 mb-0.5 inline-block align-bottom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                    "img",
                    {
                      src: "/icons/rooftop.png",
                      height: "22px",
                      width: "22px",
                      alt: "Rooftop logo"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 114,
                      columnNumber: 17
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 113,
                    columnNumber: 15
                  }, this),
                  "\xA0Rooftop\xA0"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 107,
                columnNumber: 13
              },
              this
            ),
            "\u2014 developing with react, node and typescript."
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 103,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mb-4", children: "Currently I am finishing my studies in Information Systems Engineering and trying to become a better developer as I grow in my professional career." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 125,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "I enjoy learning about new technologies and I am passionate about web development." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 130,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "h-[1px] absolute bottom-0 -right-[200px] w-[550px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 134,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "h-[1px] absolute bottom-0 -right-[200px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-4" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 135,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute -bottom-[500px] right-0 origin-bottom-right w-[700px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 136,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute -bottom-[600px] right-0 origin-bottom-right w-[200px] -translate-y-20 hover:-translate-y-[450px] bg-gradient-to-r from-transparent via-white/40 glass-animation-1" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 137,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "mx-auto w-full max-w-screen-lg p-10 sm:p-16", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 text-white", children: "Portfolio" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 141,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-white/40", children: "Some of my works and projects" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 144,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { className: "mx-8 mt-6", children: projects2.map((p) => {
              var _a;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "list-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                LinkPreview,
                {
                  href: p.url,
                  alt: p.name,
                  imageSrc: p.image,
                  blank: ((_a = p.url) == null ? void 0 : _a[0]) !== "/",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "text-[#BABABA] underline-animation font-normal", children: p.name }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 154,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("small", { className: "ml-2 text-white/30", children: [
                      p.dateStart ? `${p.dateStart} - ` : null,
                      p.dateEnd
                    ] }, void 0, !0, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 157,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 148,
                  columnNumber: 19
                },
                this
              ) }, p.name, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 147,
                columnNumber: 17
              }, this);
            }) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 145,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 140,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "p-10 sm:p-16 relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "h-[1px] absolute top-0 -left-[140px] w-[550px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 167,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "h-[1px] absolute top-0 -left-[140px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-3" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 168,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute -top-[250px] left-0 origin-top-left w-[700px] bg-gradient-to-r from-transparent via-white/30" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 169,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "rotate-90 h-[1px] absolute top-[250px] left-0 origin-top-left w-[300px] bg-gradient-to-r from-transparent via-white/40 glass-animation-2" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 170,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-xl md:text-2xl font-bold mb-2 text-white", children: "Articles" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 171,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { className: "mt-6", children: articles.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react8.Link,
              {
                className: "flex flex-col rounded-xl py-2 group",
                to: `/articles/${a.slug}`,
                prefetch: "intent",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "text-[#BABABA] font-normal group-hover:underline", children: a.title }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 182,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-white/30 text-xs", children: formatDate(new Date(a.date), "es", {
                    dateStyle: "medium"
                  }) }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 185,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 177,
                columnNumber: 19
              },
              this
            ) }, a.slug, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 176,
              columnNumber: 17
            }, this)) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 174,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 166,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 139,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 93,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 86,
      columnNumber: 5
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "5babb1c6", entry: { module: "/build/entry.client-I7NNISDU.js", imports: ["/build/_shared/chunk-GTNGNULT.js", "/build/_shared/chunk-THRUNTII.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5M6VCHWP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/articles.$slug": { id: "routes/articles.$slug", parentId: "root", path: "articles/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/articles.$slug-PIAQ4VJE.js", imports: ["/build/_shared/chunk-7CBJ2D2F.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/images.og": { id: "routes/images.og", parentId: "root", path: "images/og", index: void 0, caseSensitive: void 0, module: "/build/routes/images.og-ISJCAPVZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-6C6O25RP.js", imports: ["/build/_shared/chunk-7CBJ2D2F.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-NFZA3IRW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/autoswap": { id: "routes/projects/autoswap", parentId: "routes/projects", path: "autoswap", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/autoswap-6RN44GKV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/rooftop": { id: "routes/projects/rooftop", parentId: "routes/projects", path: "rooftop", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/rooftop-QJYX6YGZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-5BABB1C6.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/articles.$slug": {
    id: "routes/articles.$slug",
    parentId: "root",
    path: "articles/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: articles_slug_exports
  },
  "routes/images.og": {
    id: "routes/images.og",
    parentId: "root",
    path: "images/og",
    index: void 0,
    caseSensitive: void 0,
    module: images_og_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/projects/autoswap": {
    id: "routes/projects/autoswap",
    parentId: "routes/projects",
    path: "autoswap",
    index: void 0,
    caseSensitive: void 0,
    module: autoswap_exports
  },
  "routes/projects/rooftop": {
    id: "routes/projects/rooftop",
    parentId: "routes/projects",
    path: "rooftop",
    index: void 0,
    caseSensitive: void 0,
    module: rooftop_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
