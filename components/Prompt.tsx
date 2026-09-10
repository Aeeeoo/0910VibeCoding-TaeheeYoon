type Props = {
  /** 스크린리더가 읽을 실제 섹션 제목. 예: "관심사" */
  label: string;
  /** 화면에 보이는 셸 명령어. 예: "cat interests.txt" */
  command: string;
};

/** 섹션 제목 자리에 WSL 프롬프트를 찍는다. 제목 자체는 label로 남긴다. */
export default function Prompt({ label, command }: Props) {
  return (
    <h2 className="text-sm">
      <span className="sr-only">{label}</span>
      <span aria-hidden>
        <span className="text-term-user">taehee@DESKTOP-GDG</span>
        <span className="text-term-dim">:</span>
        <span className="text-accent">~</span>
        <span className="text-term-dim">$</span>{" "}
        <span className="text-term-fg">{command}</span>
      </span>
    </h2>
  );
}
