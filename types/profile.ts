export type ProfileLink = {
  /** 화면에 보이는 이름. 예: "GitHub" */
  label: string;
  /** https://... 또는 mailto:... */
  href: string;
};

export type Activity = {
  title: string;
  /** 있으면 제목 옆에 표시 */
  period?: string;
  /** 주최나 부연 설명 */
  note?: string;
};

export type ActivityGroup = {
  /** "교내 활동" | "교외 활동" — 그룹은 JSON에서 자유롭게 늘릴 수 있다 */
  label: string;
  items: Activity[];
};

export type Profile = {
  name: string;
  tagline: string;
  intro: string[];
  interests: string[];
  activities: ActivityGroup[];
  links: ProfileLink[];
};
