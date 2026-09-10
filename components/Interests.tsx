type Props = {
  interests: string[];
};

export default function Interests({ interests }: Props) {
  return (
    <section>
      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
        관심사
      </h2>

      <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-3">
        {interests.map((interest) => (
          <li
            key={interest}
            className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700"
          >
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
}
