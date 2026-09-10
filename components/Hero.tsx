import type { ProfileLink } from "@/types/profile";

type Props = {
  name: string;
  nameEn: string;
  tagline: string;
  portfolio: ProfileLink;
};

/** 유령 한 마리. 색과 흔들림 시작 시점만 다르다. */
function Ghost({ color, delay }: { color: string; delay: string }) {
  return (
    <div
      className={`relative h-8 w-7 rounded-t-full ${color}`}
      style={{ animation: `float 1.1s steps(2,end) infinite ${delay}` }}
    >
      <div className="absolute left-1 top-[9px] flex gap-1">
        <div className="h-[9px] w-2 bg-white">
          <div className="ml-[3px] mt-[2px] h-[5px] w-1 bg-arcade-blue" />
        </div>
        <div className="h-[9px] w-2 bg-white">
          <div className="ml-[3px] mt-[2px] h-[5px] w-1 bg-arcade-blue" />
        </div>
      </div>
      {/* 아래쪽 톱니 치맛단 */}
      <div className="absolute inset-x-0 -bottom-[5px] h-[5px] bg-[repeating-linear-gradient(90deg,currentColor_0_25%,transparent_25%_50%)]" />
    </div>
  );
}

export default function Hero({ name, nameEn, tagline, portfolio }: Props) {
  return (
    <section className="border-b-4 border-arcade-blue bg-[radial-gradient(120%_90%_at_50%_0%,#0a0a24_0%,#04040c_70%)] px-5 pb-9 pt-11 text-center">
      <p aria-hidden className="mb-6 font-arcade text-[11px] tracking-[2px] text-arcade-pink">
        ★ ONE PAGE ARCADE ★
      </p>

      <h1 className="font-arcade text-[clamp(22px,7vw,52px)] leading-[1.25] tracking-[2px] text-arcade-yellow [text-shadow:4px_4px_0_#b06f00,8px_8px_0_#000]">
        <span className="sr-only">{name}</span>
        <span aria-hidden>
          {nameEn.split(" ").map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </span>
      </h1>

      <p aria-hidden className="mt-5 text-[clamp(20px,4.5vw,30px)] tracking-[6px] text-white">
        {name}
      </p>
      <p className="mt-2.5 text-[clamp(15px,3vw,19px)] tracking-wide text-arcade-cyan">
        {tagline}
      </p>

      {/* 팩맨과 유령들 */}
      <div aria-hidden className="my-8 flex items-center justify-center gap-5">
        <div
          className="h-[34px] w-[34px] rounded-full bg-arcade-yellow"
          style={{ animation: "chomp 0.34s steps(2,end) infinite" }}
        />
        <div
          className="flex gap-3.5"
          style={{ animation: "marchRight 0.9s steps(3,end) infinite alternate" }}
        >
          <Ghost color="bg-arcade-red text-arcade-red" delay="0s" />
          <Ghost color="bg-arcade-pink text-arcade-pink" delay="0.15s" />
          <Ghost color="bg-arcade-cyan text-arcade-cyan" delay="0.3s" />
        </div>
      </div>

      <a
        href={portfolio.href}
        target="_blank"
        rel="noreferrer"
        className="mb-7 inline-flex items-center gap-3 border-4 border-arcade-yellow bg-arcade-card px-6 py-4 font-arcade text-[clamp(10px,2.4vw,15px)] leading-relaxed tracking-wider text-arcade-yellow shadow-[6px_6px_0_#000] transition-colors hover:bg-arcade-yellow hover:text-black"
      >
        <span aria-hidden>▶</span>
        {portfolio.label}
      </a>

      <p
        aria-hidden
        className="font-arcade text-[10px] tracking-wide text-white"
        style={{ animation: "blink 1s steps(1,end) infinite" }}
      >
        ▼ SCROLL TO START ▼
      </p>
    </section>
  );
}
