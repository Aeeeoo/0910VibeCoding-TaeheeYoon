import Activities from "@/components/Activities";
import Interests from "@/components/Interests";
import Intro from "@/components/Intro";
import Links from "@/components/Links";
import profileData from "@/data/profile.json";
import type { Profile } from "@/types/profile";

// JSON은 여기서 딱 한 번 읽고, 아래 섹션들에는 props로만 내려보낸다.
const profile: Profile = profileData;

export default function Home() {
  return (
    <main className="min-h-screen px-3 py-6 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-md border border-black/40 shadow-2xl">
        {/* Windows Terminal 탭 바 */}
        <div
          aria-hidden
          className="flex items-stretch bg-term-chrome text-xs text-term-dim"
        >
          <div className="flex items-center gap-2 border-b-2 border-accent bg-term-bg px-4 py-2 text-term-fg">
            <span className="text-accent">▪</span>
            Ubuntu
          </div>
          <div className="flex items-center px-3">+</div>
          <div className="ml-auto flex items-center gap-4 px-4">
            <span>─</span>
            <span>□</span>
            <span>✕</span>
          </div>
        </div>

        <div className="space-y-8 bg-term-bg px-4 py-6 text-[15px] leading-relaxed sm:px-7 sm:py-8">
          <p aria-hidden className="text-sm text-term-dim">
            Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0 x86_64)
          </p>

          <Intro
            name={profile.name}
            tagline={profile.tagline}
            intro={profile.intro}
          />
          <Interests interests={profile.interests} />
          <Activities activities={profile.activities} />
          <Links links={profile.links} />

          <p aria-hidden className="text-sm">
            <span className="text-term-user">taehee@DESKTOP-GDG</span>
            <span className="text-term-dim">:</span>
            <span className="text-accent">~</span>
            <span className="text-term-dim">$</span>{" "}
            <span className="inline-block animate-[blink_1.1s_steps(1,end)_infinite] text-term-fg">
              ▋
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
