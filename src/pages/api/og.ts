import { Resvg } from "@resvg/resvg-js";
import { type APIRoute } from "astro";
import satori from "satori";

import OpenGraph from "../../components/openGraph";

const removeEndingSlash = (str: string) => str.replace(/\/$/, "");

export const get: APIRoute = async (request) => {
  const params = request.url.searchParams;
  const title = params.get("title") ?? "Title";
  const description = params.get("description") ?? "Description";
  const pagePath = params.get("pagePath") ?? "";

  const hostname = request.site?.hostname.replace(/^https?:\/\//, "");

  const svg = await satori(
    OpenGraph({
      title,
      description,
      pageUrl: `${hostname}${removeEndingSlash(pagePath)}`,
    }),
    {
      width: 1200,
      height: 630,
      fonts: [],
      debug: import.meta.env.DEBUG_OG === "true",
    }
  );

  const resvg = new Resvg(svg, {});
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      "Content-Type": "image/png",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
};
