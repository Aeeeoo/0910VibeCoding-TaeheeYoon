type Props = {
  name: string;
  tagline: string;
  intro: string[];
};

export default function Intro({ name, tagline, intro }: Props) {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {name}
      </h1>
      <p className="mt-3 text-neutral-500">{tagline}</p>

      <div className="mt-8 space-y-4 leading-relaxed text-neutral-700">
        {intro.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
