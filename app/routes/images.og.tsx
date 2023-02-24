import type { LoaderArgs } from "@remix-run/node";
import sharp from "sharp";

export async function loader({ request }: LoaderArgs) {
  try {
    const { searchParams } = new URL(request.url);
    const title =
      searchParams.get("title")?.slice(0, 40) ?? "Santi Dalmasso Article";

    return new Response(
      await sharp(
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
  <text x="50" y="100" class="title">${title?.slice(0, 20)}</text>
  ${
    title.slice(20, 40).length > 0
      ? `<text x="50" y="160" class="title">${title
          .slice(20, 40)
          .replace(/...$/, "...")}</text>`
      : ""
  }
  <text x="220" y="280" class="author">Santi Dalmasso</text>
</svg>
`)
      )
        .png()
        .toBuffer(),
      {
        headers: {
          "Content-Type": "image/png",
          "Access-Control-Expose-Headers": "Content-Disposition",
          "Content-Disposition": `filename="https://santid.me/images/og?title=${title}"`,
          "x-content-type-options": "nosniff",
        },
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
