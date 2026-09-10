type Props = {
  /** 스테이지 번호. 예: "01" */
  stage: string;
  /** 영문 스테이지 이름. 예: "PROFILE" */
  title: string;
};

/** 각 섹션 위에 깔리는 파란 스테이지 띠. */
export default function StageHeader({ stage, title }: Props) {
  return (
    <div
      aria-hidden
      className="flex items-center gap-3 border-y-4 border-black bg-arcade-blue px-4 py-3 font-arcade text-[11px] tracking-wider text-white"
    >
      <span className="text-arcade-yellow">STAGE {stage}</span>
      <span>{title}</span>
    </div>
  );
}
