import Prompt from "./Prompt";

type Props = {
  interests: string[];
};

export default function Interests({ interests }: Props) {
  return (
    <section>
      <Prompt label="관심사" command="cat interests.txt" />

      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {interests.map((interest) => (
          <li key={interest}>
            <span className="text-term-dim">[</span> {interest}{" "}
            <span className="text-term-dim">]</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
