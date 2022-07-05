// routes/search.tsx

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

import { tw } from "@twind";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <body class={tw`bg-gray-400 text-slate-100`}>
      <div class={tw`m-24 p-4 border-white rounded  text-slate-100`}>
        <form>
          <input
            type="text"
            name="q"
            value={query}
            class={tw`p-2 font-bold border-2 rounded border-black`}
          />
          <button
            type="submit"
            class={tw
              `mx-2 p-2 font-bold border-4 rounded border-indigo-500/100`}
          >
            Search
          </button>
        </form>

        <ul>
          {results.map((name) => (
            <li
              class={tw
                `text-sm text-center font-medium  w-20 shadow-xl border-2 border-white border-opacity-50 py-2 hover:scale-110 mt-2 animate-pulse rounded`}
              key={name}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </body>
  );
}
