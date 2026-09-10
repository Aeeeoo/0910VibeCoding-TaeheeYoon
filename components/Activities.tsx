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

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 px-5 pt-7">
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
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-[17px] text-white">{item.title}</span>
                      {item.period && (
                        <span className="font-arcade text-[9px] text-arcade-yellow">
                          {item.period}
                        </span>
                      )}
                    </div>
                    {item.note && (
                      <p className="mt-1.5 text-[15px] text-arcade-muted">
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
