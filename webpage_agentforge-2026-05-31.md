# webpage_agentforge 감사 보고서 (2026-05-31)

## 개요

본 보고서는 `/home/ubuntu-02/ai_project/webpage_agentforge` 프로젝트에 대한 읽기 전용·증거 기반 감사 결과를 기술한다. 감사는 코드 실행을 동반하지 않는 정적 점검과, 구문 검사(`node --check`) 및 브랜드 스크럽 잔존 문자열 스캔으로 구성하였다.

- 프로젝트 성격: 정적 단일 페이지 웹사이트 (확인)
- 파일 구성(`.git` 제외, 총 5개 파일):
  - `index.html` (54,723 bytes) — 단일 페이지 본문
  - `css/style.css` (30,417 bytes)
  - `js/main.js` (9,476 bytes) — 바닐라 JavaScript
  - `README.md` (20,014 bytes)
  - `.github/workflows/deploy.yml` — GitHub Pages 배포 워크플로우
  - `assets/` 디렉터리는 비어 있음 (확인)
- 스택: HTML5 + CSS + 바닐라 JS. 빌드 도구·패키지 매니저 없음(`package.json` 부재, 확인). 외부 의존성은 CDN 경유(Google Fonts, Font Awesome 6.5.1)만 사용 (확인).
- 배포: `.github/workflows/deploy.yml`이 `main` 브랜치 push 시 저장소 루트(`path: '.'`)를 GitHub Pages 아티팩트로 업로드·배포 (확인). 액션 버전: checkout@v4, configure-pages@v5, upload-pages-artifact@v3, deploy-pages@v4.

## 실행·테스트 결과

서버는 기동하지 않았다(요구사항 준수). 정적 점검 결과는 다음과 같다.

- JavaScript 구문 검사: `node --check js/main.js` → 통과(`JS_SYNTAX_OK`) (확인).
- CSS 중괄호 균형: `{` 253개 / `}` 253개로 일치 (확인). 구문 파서 수준의 정밀 검증은 아님(추정).
- 로컬 자산 참조: `index.html`이 참조하는 로컬 리소스는 `css/style.css`, `js/main.js` 두 건이며 모두 실제 존재 (확인).
- 내부 앵커 링크: 내비게이션 앵커(`#features`, `#frameworks`, `#architecture`, `#dashboard`, `#techstack`)는 모두 대응되는 `section id`가 존재 (확인).
- JS DOM 참조 무결성: `getElementById`로 참조하는 `bgCanvas`, `header`, `mobileToggle`, `nav`는 모두 HTML에 존재하며, `#bgCanvas`는 CSS에 스타일 정의됨 (확인).
- 브라우저 런타임 오류(콘솔) 여부는 실제 브라우저 미실행으로 미검증(추정).

## 발견된 문제점 (확인 vs 추정, 심각도)

1. localhost 절대 링크 (확인 / 낮음)
   - `index.html`에 `http://localhost:5174`(Launch Dashboard), `http://localhost:8003/docs`(API Docs) 등 localhost 링크가 6건 존재 (확인).
   - GitHub Pages로 배포되는 공개 정적 사이트에서는 방문자 로컬에 해당 서비스가 없으면 동작하지 않는다 (확인). 다만 README가 이를 로컬 백엔드/프론트엔드 주소로 명시(539~540행)하므로 의도된 설계로 판단되어 심각도 낮음.

2. README와 index.html 간 포트 불일치 (확인 / 낮음·정보성)
   - `README.md` 54행은 접속 주소로 `http://localhost:8888`을 안내하나, `index.html` 및 README 다른 부분은 프론트엔드 `5174`/백엔드 `8003`을 사용 (확인). 문서 내 안내 불일치이며 사이트 동작에는 영향 없음.

3. 빈 `assets/` 디렉터리 (확인 / 정보성)
   - `assets/`가 비어 있으나 어떤 파일도 이를 참조하지 않으므로 깨진 참조는 없음 (확인).

4. 콘텐츠 수치의 사실성 (추정 / 정보성)
   - "97/97 Tests Pass (100%)", "93+ Endpoints", "RTX 5070" 등 지표는 정적 마크업 텍스트로, 본 감사 범위(정적·읽기 전용)에서 진위 검증 불가(추정). 웹사이트 무결성과는 무관.

브랜드 스크럽 무결성: 잔존 문자열 0건 (확인). 아래 모든 패턴을 대소문자 무시로 `.html/.js/.css/.md/.yml` 전체 스캔(`.git` 제외)한 결과 매칭 파일 0:
`wdlab`, `WDLAB@2023-2026`, `wdlab`, `WDLAB@2023-2026`, `WDLAB@2023-2026`, `wdlab`, `wdlab`, `wdlab`. 추가로 단독 토큰 `\ba3\b`, `a3-`, `a3_` 스캔도 0건 (확인). 보존 대상인 `A3DE`/`A3-ADE`는 본 프로젝트에 존재하지 않음 (확인). `wdlab` 매칭 2건은 README의 GitHub Pages URL(`wdlab1958.github.io`)로 브랜드 치환과 무관 (확인).

## 조치한 내용

브랜드 스크럽 잔존 문자열이 0건으로 확인되어 치환·수정 조치는 수행하지 않았다. 그 외 발견 항목은 모두 정상 동작에 영향을 주지 않거나(빈 assets, 의도된 localhost 링크), 위험을 수반하는 변경이 부적절하여 코드 수정을 적용하지 않았다. 결과적으로 본 감사로 인한 파일 변경은 없다.

참고: `git status` 결과 `index.html`, `js/main.js`에 커밋되지 않은 변경(M)이 이미 존재하나, 이는 본 감사 이전부터 있던 상태이며 본 감사가 생성·수정한 것이 아니다 (확인).

## 미해결·위험 항목

- localhost 링크(항목 1): 공개 배포 시 외부 방문자에게는 비동작. 데모/소개용 정적 페이지로 의도된 것으로 보이나, 공개 노출을 원치 않거나 동작을 기대한다면 링크 비활성화 또는 안내 문구 추가를 권고(권고만, 미적용).
- README 포트 안내 불일치(항목 2): `8888`→실제 사용 포트로 정정 권고(권고만, 미적용). 문서 의미가 모호하여 자동 수정 대신 작성자 확인 필요.
- 콘텐츠 수치 진위(항목 4): 백엔드/테스트 실행 없이는 검증 불가. 필요 시 별도 실환경 검증 요망.

## 종합 판단

정적 사이트로서 구조적 무결성은 양호하다. JS 구문 통과(확인), 로컬 자산·내부 앵커·DOM 참조 모두 정합(확인), CSS 중괄호 균형 일치(확인), 브랜드 스크럽 잔존 0건(확인). 즉시 수정이 필요한 결함(깨진 로컬 참조, 구문 오류, 브랜드 잔존)은 발견되지 않았다. 남은 항목은 모두 낮은 심각도의 운영/문서 성격이며, 변경에 작성자 판단이 필요하여 권고로만 남긴다.
