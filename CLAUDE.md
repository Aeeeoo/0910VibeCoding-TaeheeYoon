# CLAUDE.md

## 프로젝트

윤태희의 개인 소개 페이지. **한 페이지짜리 정적 사이트**로 섹션은 네 개다 — 소개 글 / 관심사 / 활동(교내·교외) / 링크.

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"` + `@theme`, `tailwind.config` 파일 없음)
- 데이터는 로컬 JSON 파일 (`data/profile.json`)

## 구조

```
app/
  layout.tsx        # 메타데이터(title/description), <html lang="ko">
  page.tsx          # profile.json 을 읽어 섹션에 props로 내려보냄
  globals.css       # Tailwind 지시문 + 강조색 토큰
components/
  Intro.tsx         # 이름, 한 줄 소개, 소개 문단
  Interests.tsx     # 관심사
  Activities.tsx    # 교내/교외 그룹을 순회
  Links.tsx         # 외부 링크
data/
  profile.json      # 모든 콘텐츠의 단일 출처
types/
  profile.ts        # profile.json 에 대응하는 타입
```

## 규칙

- **콘텐츠는 절대 JSX에 하드코딩하지 않는다.** 이름, 소개 문구, 관심사, 활동, 링크 URL 전부 `data/profile.json` 에서 읽는다. 문구를 바꿔야 하면 JSON만 고친다.
- `profile.json` 의 스키마를 바꾸면 `types/profile.ts` 도 같이 바꾼다. 둘은 항상 일치해야 한다.
- 컴포넌트는 props로 데이터를 받는다. 컴포넌트 안에서 직접 JSON을 import 하지 않는다 — `page.tsx` 에서 한 번 읽어 내려보낸다. 예외는 `layout.tsx` 뿐이다(`metadata` 는 props를 받을 수 없어 직접 import 한다).
- 서버 컴포넌트를 기본으로 한다. 상호작용이 실제로 필요할 때만 `'use client'` 를 붙인다. 현재 클라이언트 컴포넌트는 하나도 없고, 없는 상태를 유지하는 게 좋다.
- 스타일은 Tailwind 유틸리티 클래스로만. 별도 CSS 파일이나 CSS-in-JS를 추가하지 않는다. `globals.css` 는 Tailwind import와 최소한의 토큰만 담는다.
- 강조색은 `--color-accent` 하나뿐이다(`globals.css` 의 `@theme`). 새 색을 도입하기 전에 이 토큰이나 `neutral` 스케일로 해결되는지 먼저 본다.
- 활동 그룹(`activities`)은 배열이다. "프로젝트" 같은 그룹을 더하고 싶으면 코드 수정 없이 JSON에 그룹을 추가하면 된다.
- 모바일 우선. 기본 스타일이 좁은 화면 기준이고, 넓은 화면은 `sm:` 로만 덧붙인다.

## 지금 하지 않는 것

아래는 이번 범위 밖이다. 필요해 보여도 먼저 물어보고, 임의로 추가하지 않는다.

- 배포 설정 (Vercel, CI, 도메인, 환경변수)
- 데이터베이스, ORM, 외부 API 연동
- 인증, 폼, 방문자 분석
- 블로그, 프로젝트 목록 등 두 번째 페이지
- 상태 관리 라이브러리, 컴포넌트 라이브러리, 애니메이션 라이브러리

## 아직 채워지지 않은 값

`data/profile.json` 에 플레이스홀더가 남아 있다. 사용자가 값을 주기 전까지 지어내지 않는다.

- `links` 의 `github.com/USERNAME`, `linkedin.com/in/USERNAME`, `mailto:TODO@example.com`

## 명령어

```bash
npm run dev     # 개발 서버 (localhost:3000)
npm run build   # 프로덕션 빌드 (타입 에러 확인용)
npm run lint
```

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
