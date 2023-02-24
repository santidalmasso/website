import { Client } from "@notionhq/client";
import { env } from "~/utils/env";
import { z } from "zod";
import { json } from "@remix-run/node";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: env.NOTION_SECRET,
});
const n2m = new NotionToMarkdown({ notionClient: notion });

const NotionArticlesSchema = z.object({
  results: z.array(
    z.object({
      id: z.string(),
      properties: z.object({
        Title: z.object({
          title: z.array(
            z.object({
              plain_text: z.string(),
            })
          ),
        }),
        Description: z.object({
          rich_text: z.array(
            z.object({
              plain_text: z.string(),
            })
          ),
        }),
        "Created time": z.object({
          created_time: z.string(),
        }),
        Slug: z.object({
          rich_text: z.array(
            z.object({
              plain_text: z.string(),
            })
          ),
        }),
        Status: z.object({
          status: z.object({
            id: z.enum(["approved", "in-review"]),
          }),
        }),
      }),
    })
  ),
});

export async function getArticles() {
  const data = await notion.databases.query({
    database_id: env.NOTION_ARTICLES_DATABASE_ID,
  });
  const validData = NotionArticlesSchema.parse(data);
  return (
    validData?.results
      ?.map(normalizeArticlessResults)
      .filter((a) => a.status === "approved") ?? []
  );
}

function normalizeArticlessResults(
  result: z.infer<typeof NotionArticlesSchema>["results"][0]
) {
  return {
    id: result.id,
    title: result.properties?.Title.title[0].plain_text,
    date: result.properties?.["Created time"].created_time,
    slug: result.properties?.Slug.rich_text[0]?.plain_text,
    status: result.properties?.Status.status.id,
    description: result.properties?.Description.rich_text[0]?.plain_text,
  };
}

export async function getArticleBySlug(slug: string) {
  const articles = await getArticles();
  const articleFindedBySlug = articles.find((article) => article.slug === slug);
  if (!articleFindedBySlug)
    throw json("Not Found", { status: 404, statusText: "Article not found" });
  const articleMdBlocks = await n2m.pageToMarkdown(articleFindedBySlug.id);
  const articleMdString = n2m.toMarkdownString(articleMdBlocks);
  return {
    ...articleFindedBySlug,
    body: articleMdString,
  };
}
