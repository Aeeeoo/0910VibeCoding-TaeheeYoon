import type { ProfileLink } from "@/types/profile";
import StageHeader from "./StageHeader";

type Props = {
  links: ProfileLink[];
};

/** 플레이어 번호 색과 호버 테두리 색을 순서대로 돌려쓴다. */
const PLAYER_COLORS = [
  { text: "text-arcade-yellow", hover: "hover:border-arcade-yellow" },
  { text: "text-arcade-cyan", hover: "hover:border-arcade-cyan" },
  { text: "text-arcade-pink", hover: "hover:border-arcade-pink" },
];

/** 주소창에 보일 만한 짧은 형태로 다듬는다. */
function displayHref(href: string) {
  const bare = href.replace(/^https?:\/\//, "").replace(/^mailto:/, "");
  // LinkedIn 주소처럼 한글이 퍼센트 인코딩된 경우 사람이 읽을 수 있게 되돌린다
  try {
    return decodeURIComponent(bare);
  } catch {
    return bare;
  }
}

export default function Links({ links }: Props) {
  return (
    <section className="pb-8">
      <StageHeader stage="04" title="CONTACT" />

      <div className="px-5 pt-7">
        <h2 className="mb-4.5 text-[clamp(18px,3.6vw,24px)] tracking-wide text-arcade-yellow">
          SELECT A LINK
        </h2>

        <ul className="flex flex-col gap-2.5">
          {links.map((link, i) => {
            const color = PLAYER_COLORS[i % PLAYER_COLORS.length];
            const isExternal = link.href.startsWith("http");

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(isExternal && { target: "_blank", rel: "noreferrer" })}
                  className={`flex flex-wrap items-center gap-3 border-[3px] border-arcade-navy bg-arcade-panel px-4 py-3.5 text-white transition-colors hover:bg-[#151533] ${color.hover}`}
                >
                  <span aria-hidden className={`font-arcade text-[10px] ${color.text}`}>
                    {i + 1}P
                  </span>
                  <span className="text-[18px]">{link.label}</span>
                  <span className="ml-auto break-all text-[14px] text-arcade-muted">
                    {displayHref(link.href)}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
