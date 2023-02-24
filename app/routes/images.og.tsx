import type { LoaderArgs } from "@remix-run/node";
import sharp from "sharp";

export async function loader({ request }: LoaderArgs) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 44)
      : "Santi Dalmasso Article";

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
      font: 400 40px sans-serif;
    }
  </style>
  <rect width="687" height="325" fill="black"/>
  <text x="50" y="100" class="title">${title?.slice(0, 22)}</text>
  ${
    title?.slice(22, 44).length > 0
      ? `<text x="50" y="160" class="title">${title
          ?.slice(22, 44)
          .replace(/...$/, "...")}</text>`
      : ""
  }
  <text x="350" y="250" class="author">Santi Dalmasso</text>
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
