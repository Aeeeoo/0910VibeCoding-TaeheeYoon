import type { ActivityGroup } from "@/types/profile";
import Prompt from "./Prompt";

type Props = {
  activities: ActivityGroup[];
};

export default function Activities({ activities }: Props) {
  return (
    <section>
      <Prompt label="활동" command="ls activities/" />

      <div className="mt-5 space-y-7">
        {activities.map((group) => (
          <div key={group.label}>
            <h3 className="flex items-center gap-3 text-sm text-accent">
              <span className="shrink-0">{group.label}/</span>
              <span aria-hidden className="h-px flex-1 bg-term-dim" />
            </h3>

            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span aria-hidden className="text-term-dim">
                    [*]
                  </span>
                  <div>
                    <p>
                      {item.title}
                      {item.period && (
                        <span className="ml-2 text-sm text-term-dim">
                          ({item.period})
                        </span>
                      )}
                    </p>
                    {item.note && (
                      <p className="text-sm text-term-dim">└─ {item.note}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
