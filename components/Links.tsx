import type { ProfileLink } from "@/types/profile";
import Prompt from "./Prompt";

type Props = {
  links: ProfileLink[];
};

export default function Links({ links }: Props) {
  return (
    <section>
      <Prompt label="링크" command="cat links.txt" />

      <ul className="mt-5 space-y-2">
        {links.map((link, i) => {
          const isExternal = link.href.startsWith("http");

          return (
            <li key={link.label} className="flex flex-wrap items-baseline gap-3">
              <span aria-hidden className="text-term-dim">
                [{i + 1}]
              </span>
              <a
                href={link.href}
                {...(isExternal && { target: "_blank", rel: "noreferrer" })}
                className="text-accent underline decoration-dotted underline-offset-4 hover:text-term-fg"
              >
                {link.label}
              </a>
              <span className="break-all text-sm text-term-dim">
                {link.href}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
