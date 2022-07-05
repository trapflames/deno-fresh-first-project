// routes/greet/[name].tsx

/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main class={tw`p-24`}>
      <p>Greetings to you, {name}!</p>
    </main>
  );
}
