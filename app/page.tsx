import Activities from "@/components/Activities";
import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import Intro from "@/components/Intro";
import Links from "@/components/Links";
import profileData from "@/data/profile.json";
import type { Profile } from "@/types/profile";

// JSON은 여기서 딱 한 번 읽고, 아래 섹션들에는 props로만 내려보낸다.
const profile: Profile = profileData;

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-3.5">
      <div className="relative mx-auto max-w-[920px] overflow-hidden border-4 border-arcade-blue bg-arcade-bg shadow-[0_0_0_4px_#000,0_0_0_8px_#1a1a8f,10px_10px_0_8px_rgba(0,0,0,0.9)]">
        {/* CRT 스캔라인 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-5 bg-[repeating-linear-gradient(180deg,rgba(0,0,0,0.35)_0_2px,rgba(0,0,0,0)_2px_4px)] mix-blend-multiply"
        />

        {/* 아케이드 상단 표시줄 */}
        <div
          aria-hidden
          className="flex items-center justify-between gap-3 border-b-4 border-arcade-blue bg-black px-4 py-3 font-arcade text-[10px] leading-relaxed tracking-wide"
        >
          <span className="text-arcade-cyan">
            1UP
            <br />
            <span className="text-white">000700</span>
          </span>
          <span className="text-center text-arcade-red">
            HIGH SCORE
            <br />
            <span
              className="text-white"
              style={{ animation: "blink 1.2s steps(1,end) infinite" }}
            >
              012500
            </span>
          </span>
          <span className="text-right text-arcade-orange">
            CREDIT
            <br />
            <span className="text-white">01</span>
          </span>
        </div>

        <Hero
          name={profile.name}
          nameEn={profile.nameEn}
          tagline={profile.tagline}
        />

        {/* 점선 구분 띠 */}
        <div
          aria-hidden
          className="flex h-3 items-center border-b-4 border-arcade-blue bg-black"
        >
          <div className="h-1 w-full bg-[repeating-linear-gradient(90deg,#ffcc00_0_4px,transparent_4px_24px)]" />
        </div>

        <Intro intro={profile.intro} stats={profile.stats} />
        <Interests interests={profile.interests} />
        <Activities activities={profile.activities} />
        <Links links={profile.links} />

        <div
          aria-hidden
          className="flex flex-wrap items-center justify-between gap-3 border-t-4 border-arcade-blue bg-black px-4 pb-6 pt-5 font-arcade text-[9px] tracking-wide text-arcade-dim"
        >
          <span>© 1998 TAEHEE ARCADE</span>
          <span className="flex items-center gap-2 text-arcade-yellow">
            INSERT COIN
            <span
              className="h-3 w-[9px] bg-arcade-yellow"
              style={{ animation: "blink 0.8s steps(1,end) infinite" }}
            />
          </span>
        </div>
      </div>
    </main>
  );
}
