import type { Stat } from "@/types/profile";
import StageHeader from "./StageHeader";

type Props = {
  intro: string[];
  stats: Stat[];
};

/** 스탯 카드 라벨 색을 순서대로 돌려쓴다. */
const STAT_COLORS = ["text-arcade-cyan", "text-arcade-pink", "text-arcade-orange"];

export default function Intro({ intro, stats }: Props) {
  return (
    <section className="pb-9">
      <StageHeader stage="01" title="PROFILE" />

      <div className="px-5 pt-7">
        <h2 className="mb-4 text-[clamp(18px,3.6vw,24px)] tracking-wide text-arcade-yellow">
          PLAYER 정보
        </h2>

        {intro.map((paragraph, i) => (
          <p
            key={i}
            className={`mb-3.5 text-[clamp(15px,2.9vw,18px)] leading-[1.9] ${
              i === 0 ? "text-[#d8d8e6]" : "text-arcade-muted"
            }`}
          >
            {paragraph}
          </p>
        ))}

        <dl className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2.5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="border-[3px] border-arcade-navy bg-arcade-panel px-3.5 py-3"
            >
              <dt
                className={`mb-2 font-arcade text-[9px] ${
                  STAT_COLORS[i % STAT_COLORS.length]
                }`}
              >
                {stat.label}
              </dt>
              <dd className="text-[17px] text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
