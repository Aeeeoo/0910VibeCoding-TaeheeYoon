import Prompt from "./Prompt";

type Props = {
  name: string;
  tagline: string;
  intro: string[];
};

export default function Intro({ name, tagline, intro }: Props) {
  return (
    <section>
      <Prompt label="소개" command="cat profile.txt" />

      <h1 className="mt-5 text-2xl font-bold tracking-[0.25em] sm:text-3xl">
        {name}
      </h1>
      <p className="mt-2 text-accent">{tagline}</p>

      <div className="mt-6 space-y-4 leading-relaxed text-term-fg/80">
        {intro.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
