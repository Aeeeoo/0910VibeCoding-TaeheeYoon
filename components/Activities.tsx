import type { ActivityGroup } from "@/types/profile";
import StageHeader from "./StageHeader";

type Props = {
  activities: ActivityGroup[];
};

/** 그룹 색을 순서대로 돌려쓴다. */
const GROUP_COLORS = [
  { text: "text-arcade-cyan", chip: "bg-arcade-cyan" },
  { text: "text-arcade-pink", chip: "bg-arcade-pink" },
  { text: "text-arcade-orange", chip: "bg-arcade-orange" },
];

export default function Activities({ activities }: Props) {
  return (
    <section className="pb-9">
      <StageHeader stage="03" title="ACTIVITIES" />

      <div className="grid grid-cols-1 gap-7 px-5 pt-7 md:grid-cols-2">
        {activities.map((group, i) => {
          const color = GROUP_COLORS[i % GROUP_COLORS.length];

          return (
            <div key={group.label}>
              <div className="mb-3.5 flex items-center gap-2.5">
                <div aria-hidden className={`h-3.5 w-3.5 ${color.chip}`} />
                <h2
                  className={`text-[clamp(17px,3.4vw,21px)] tracking-wide ${color.text}`}
                >
                  {group.label}
                </h2>
              </div>

              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className="border-l-4 border-arcade-navy py-0.5 pl-3.5"
                  >
                    {/* 제목과 연도를 한 문단에 둬야 연도만 따로 떨어지지 않는다 */}
                    <p className="text-[17px] leading-[1.7] text-white">
                      {item.title}
                      {item.period && (
                        <span className="ml-2 whitespace-nowrap font-arcade text-[9px] text-arcade-yellow">
                          {item.period}
                        </span>
                      )}
                    </p>
                    {item.note && (
                      <p className="mt-1.5 text-[15px] leading-[1.7] text-arcade-muted">
                        └─ {item.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
