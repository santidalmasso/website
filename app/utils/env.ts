import { z } from "zod";

const envVariables = z.object({
  NOTION_SECRET: z.string(),
  NOTION_ARTICLES_DATABASE_ID: z.string(),
});

export const env = envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
