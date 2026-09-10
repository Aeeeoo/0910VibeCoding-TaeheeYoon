import type { ActivityGroup } from "@/types/profile";

type Props = {
  activities: ActivityGroup[];
};

export default function Activities({ activities }: Props) {
  return (
    <section>
      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
        활동
      </h2>

      <div className="mt-6 space-y-8">
        {activities.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium text-neutral-900">
              {group.label}
            </h3>

            <ul className="mt-3 space-y-3 border-l border-neutral-200 pl-4">
              {group.items.map((item) => (
                <li key={item.title}>
                  <p className="text-neutral-800">
                    {item.title}
                    {item.period && (
                      <span className="ml-2 text-sm text-neutral-400">
                        {item.period}
                      </span>
                    )}
                  </p>
                  {item.note && (
                    <p className="mt-0.5 text-sm text-neutral-500">
                      {item.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
