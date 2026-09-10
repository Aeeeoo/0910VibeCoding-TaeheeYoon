export type ProfileLink = {
  /** 화면에 보이는 이름. 예: "GitHub" */
  label: string;
  /** https://... 또는 mailto:... */
  href: string;
};

export type Stat = {
  /** 아케이드 라벨. 예: "LEVEL" */
  label: string;
  value: string;
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
  /** 아케이드 타이틀용 로마자 표기. 줄바꿈은 공백 기준으로 나눈다 */
  nameEn: string;
  tagline: string;
  /** 타이틀 화면의 포트폴리오 이동 버튼 */
  portfolio: ProfileLink;
  intro: string[];
  /** 히어로 아래 스탯 카드 */
  stats: Stat[];
  interests: string[];
  activities: ActivityGroup[];
  links: ProfileLink[];
};
