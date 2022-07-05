/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const cards = tw
    `px-6 py-4 w-[12rem] rounded overflow-hidden border(gray-100 1)`;
  const button = tw`block w-full text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900`;

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. This project was build to learn more about fresh.
      </p>
      <Counter start={5} />
      <p class={tw`mt-12 mb-6 font-bold`}>
        Link to other experimental pages
      </p>

      <div class={tw` grid md:grid-cols-2 sm:grid-cols-1 gap-4 mr-48`}>


        <div class={cards}>
          <p class={tw`font-bold text-base mb-2`}>Search</p>
          <p class={tw`text-gray-700 text(sm justify)`}>
            Search page, as presented in fresh docs.
          </p>
          <div class={tw`pt-4 pb-2`}>
            <a
              href="/search"
              class={button}
            >
              Search Page
            </a>
          </div>
        </div>

        <div class={cards}>
          <p class={tw`font-bold text-base mb-2`}>Countdown</p>
          <p class={tw`text-gray-700 text(sm justify)`}>
            Countdown page, as presented in fresh docs.
          </p>
          <div class={tw`pt-4 pb-2`}>
            <a
              href="/countdown"
              class={button}
            >
              Countdown
            </a>
          </div>
        </div>

        <div class={cards}>
          <p class={tw`font-bold text-base mb-2`}>About</p>
          <p class={tw`text-gray-700 text(sm justify)`}>
            About page, as presented in fresh docs.
          </p>
          <div class={tw`pt-4 pb-2`}>
            <a
              href="/about"
              class={button}
            >
              About Page
            </a>
          </div>
        </div>

        <div class={cards}>
          <p class={tw`font-bold text-base mb-2`}>Github</p>
          <p class={tw`text-gray-700 text(sm justify)`}>
            Github page, as presented in fresh docs.
          </p>
          <div class={tw`pt-4 pb-2`}>
            <a
              href="/github/trapflames"
              class={button}
            >
              Github Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
