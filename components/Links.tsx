import type { ProfileLink } from "@/types/profile";

type Props = {
  links: ProfileLink[];
};

export default function Links({ links }: Props) {
  return (
    <section>
      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
        링크
      </h2>

      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");

          return (
            <li key={link.label}>
              <a
                href={link.href}
                {...(isExternal && { target: "_blank", rel: "noreferrer" })}
                className="text-accent underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-accent"
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
