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
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <div className="space-y-16">
        <Intro
          name={profile.name}
          tagline={profile.tagline}
          intro={profile.intro}
        />
        <Interests interests={profile.interests} />
        <Activities activities={profile.activities} />
        <Links links={profile.links} />
      </div>
    </main>
  );
}
