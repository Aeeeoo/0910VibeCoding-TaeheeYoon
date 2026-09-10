import StageHeader from "./StageHeader";

type Props = {
  interests: string[];
};

/** 카드 테두리·점 색을 순서대로 돌려쓴다. */
const CARD_COLORS = [
  { border: "border-arcade-yellow", dot: "bg-arcade-yellow" },
  { border: "border-arcade-cyan", dot: "bg-arcade-cyan" },
  { border: "border-arcade-pink", dot: "bg-arcade-pink" },
  { border: "border-arcade-orange", dot: "bg-arcade-orange" },
];

export default function Interests({ interests }: Props) {
  return (
    <section className="pb-9">
      <StageHeader stage="02" title="INTERESTS" />

      <div className="px-5 pt-7">
        <h2 className="mb-4.5 text-[clamp(18px,3.6vw,24px)] tracking-wide text-arcade-yellow">
          POWER-UP 아이템
        </h2>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3.5">
          {interests.map((interest, i) => {
            const color = CARD_COLORS[i % CARD_COLORS.length];
            // 아케이드식 점수: 200 → 400 → 800 → 1600
            const points = 200 * 2 ** i;

            return (
              <li
                key={interest}
                className={`border-4 ${color.border} bg-arcade-card px-3.5 py-4.5 text-center shadow-[6px_6px_0_#000] transition-colors hover:bg-[#1a1a3a]`}
              >
                <div aria-hidden className={`mx-auto mb-3 h-4.5 w-4.5 rounded-full ${color.dot}`} />
                <p className="text-[17px] text-white">{interest}</p>
                <p aria-hidden className="mt-2 font-arcade text-[8px] text-arcade-muted">
                  +{points} PTS
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
