# AgentForge v3.0 - Project Introduction Webpage

AgentForge 플랫폼의 핵심 기능, 아키텍처, 통합 프레임워크를 소개하는 정적 웹페이지입니다.
Dark Nebula 테마를 적용한 싱글 페이지 애플리케이션으로, 파티클 배경 애니메이션과 인터랙티브 UI 요소를 포함합니다.

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | AgentForge Introduction Webpage |
| **대상 플랫폼** | AgentForge v3.0 (Hybrid Multi-Agent AI Platform) |
| **페이지 유형** | 정적 싱글 페이지 (Static SPA) |
| **서빙 포트** | 8888 (Python HTTP Server) |
| **위치** | `~/ai_project/webpage_agentforge/` |
| **디자인 테마** | Dark Nebula (다크 네이비 기반 우주 테마) |
| **언어** | 한국어/영어 혼합 (섹션 타이틀: 영어, 설명: 한국어) |

### AgentForge 플랫폼 연동 정보

| 서비스 | 포트 | 설명 |
|--------|------|------|
| AgentForge Backend (FastAPI) | 8003 | API 서버 (93+ 엔드포인트) |
| AgentForge Frontend (React/Vite) | 5174 | 대시보드 UI (20개 뷰) |
| **소개 웹페이지 (본 프로젝트)** | **8888** | **프로젝트 소개 정적 페이지** |

---

## 2. 디렉토리 구조

```
webpage_agentforge/
├── index.html              # 메인 HTML (914행) - 전체 페이지 구조 및 콘텐츠
├── css/
│   └── style.css           # 스타일시트 (1,539행) - Dark Nebula 테마 전체 스타일
├── js/
│   └── main.js             # JavaScript (275행) - 애니메이션 및 인터랙션
├── assets/                 # 정적 리소스 디렉토리 (확장용)
└── README.md               # 본 문서
```

---

## 3. 실행 방법

### 3.1 로컬 서버 실행

```bash
cd ~/ai_project/webpage_agentforge
python3 -m http.server 8888 --bind 0.0.0.0
```

브라우저에서 `http://localhost:8888` 으로 접속합니다.

### 3.2 백그라운드 실행

```bash
cd ~/ai_project/webpage_agentforge
nohup python3 -m http.server 8888 --bind 0.0.0.0 > /dev/null 2>&1 &
```

### 3.3 서버 종료

```bash
# 프로세스 확인
ss -tlnp | grep 8888

# PID로 종료
kill <PID>
```

---

## 4. 웹페이지 섹션 구성

웹페이지는 총 **10개 섹션**으로 구성되며, 각 섹션은 앵커 네비게이션으로 연결됩니다.

### 4.1 Header (고정 네비게이션)

```
파일: index.html (20~47행)
스타일: style.css - .header 섹션 (144~248행)
```

- **위치**: 화면 상단 고정 (position: fixed)
- **높이**: 64px (`--header-height`)
- **배경**: 반투명 블러 효과 (`backdrop-filter: blur(16px)`)
- **구성 요소**:
  - 좌측: 로고 아이콘 (그라디언트 배경 + fa-cubes 아이콘) + "AgentForge" 텍스트 + v3.0 뱃지
  - 중앙: 내비게이션 링크 5개 (Features, Frameworks, Architecture, Dashboard, Tech Stack)
  - 우측: "Launch Dashboard" 버튼 (localhost:5174 링크) + 모바일 햄버거 토글
- **스크롤 반응**: 50px 이상 스크롤 시 `.scrolled` 클래스 추가 (배경 불투명도 증가 + 그림자)

### 4.2 Hero Section (메인 비주얼)

```
파일: index.html (50~94행)
스타일: style.css - .hero 섹션 (250~375행)
JS: main.js - Counter Animation (142~181행)
```

- **레이아웃**: 전체 뷰포트 높이 (`min-height: 100vh`), 중앙 정렬
- **배경 효과**:
  - Canvas 파티클 애니메이션 (전체 화면 고정, z-index: 0)
  - 중앙 글로우 효과 (`radial-gradient`, 800x800px)
- **콘텐츠 구성**:
  - **상태 뱃지**: "Production Ready - 97/97 Tests Pass (100%)" (녹색 펄스 도트 애니메이션)
  - **메인 타이틀**: "Hybrid Multi-Agent AI Platform" (그라디언트 텍스트, `clamp(2.5rem, 6vw, 4.5rem)`)
  - **설명문**: 8개 AI 프레임워크 통합 플랫폼 소개 (한국어)
  - **CTA 버튼**: "Explore Features" (그라디언트 Primary) + "View Architecture" (Outline)
  - **통계 카드 4개**: 스크롤 시 카운터 애니메이션으로 수치 표시
    - 8 AI Frameworks
    - 93+ API Endpoints
    - 20 Dashboard Views
    - 97 Tests Passing

### 4.3 Core Features (핵심 기능)

```
파일: index.html (96~223행)
스타일: style.css - .features-grid 섹션 (421~508행)
앵커: #features
```

- **그리드**: 3열 반응형 (`repeat(3, 1fr)`, 태블릿: 2열, 모바일: 1열)
- **기능 카드 9개**:

| # | 기능명 | 아이콘 색상 | 태그 |
|---|--------|-------------|------|
| 1 | Unified Orchestration | Blue | Auto-Routing, Fallback, Async |
| 2 | Advanced RAG System | Purple | ChromaDB, BGE-M3, Hybrid Search |
| 3 | Tax RAG System | Green | Knowledge Graph, Multi-hop, 11 APIs |
| 4 | Secure Local LLM | Orange | AES-256, JWT, Offline |
| 5 | 3-Layer Memory | Cyan | Short-Term, Medium-Term, Long-Term |
| 6 | Prompt Management | Pink | Versioning, Jinja2, Rollback |
| 7 | Content Marketing | Yellow | 4-Stage, SEO, Multi-lang |
| 8 | Industrial Analysis | Red | Quality Control, Sensor, Predictive |
| 9 | Training & Fine-Tuning | Teal | RLHF, LoRA, Auto-Deploy |

- **카드 인터랙션**:
  - 호버 시 상단 그라디언트 라인 표시 (`::before` 의사 요소)
  - 호버 시 Y축 -6px 이동 + 글로우 그림자
  - 마우스 위치 기반 3D 틸트 효과 (perspective 800px)
  - 스크롤 진입 시 fadeInUp 애니메이션

### 4.4 Integrated Frameworks (AI 프레임워크)

```
파일: index.html (226~374행)
스타일: style.css - .frameworks-grid 섹션 (510~657행)
JS: main.js - Generation Tabs (210~233행)
앵커: #frameworks
```

- **배경**: 다크 섹션 (`section-dark`, `--bg-secondary`)
- **필터 탭**: All / 1st Gen / 2nd Gen / Next-Gen (세대별 필터링)
- **프레임워크 카드 8개**:

| 세대 | 프레임워크 | 버전 | 소스 파일 | 상태 |
|------|-----------|------|-----------|------|
| 1st Gen | LangGraph | v0.2.76 | agents/langgraph_workflow.py | Operational |
| 1st Gen | CrewAI | v1.9.3 | agents/crewai_team.py | Operational |
| 1st Gen | AutoGen (Legacy) | v0.2.35 | agents/autogen_group.py | Operational |
| 2nd Gen | DSPy | v3.1.3 | agents/dspy_optimizer.py | Operational |
| 2nd Gen | LlamaIndex Workflows | v0.14.14 | rag/llama_index_pipeline.py | Operational |
| 2nd Gen | AG2 (AutoGen 0.4) | v0.7.5 | agents/ag2_team.py | Operational |
| 2nd Gen | Google ADK | v1.25.0 | agents/adk_agents.py | Operational |
| Next-Gen | Transformers v5 | v4.56.2 | agents/transformers_v5_agent.py | Available |

- **카드 구성**: 아이콘 (커스텀 색상 CSS 변수) + 세대/버전 메타정보 + 설명 + 소스 파일 경로 + 상태 표시 (Operational: 녹색 펄스, Available: 노란색)
- **필터링 로직**: `data-gen` 속성 기반 `.hidden` 클래스 토글

### 4.5 Platform Architecture (시스템 아키텍처)

```
파일: index.html (377~488행)
스타일: style.css - .arch-* 섹션 (659~762행)
앵커: #architecture
```

- **5계층 아키텍처 다이어그램** (수직 배치):

```
┌─────────────────────────────────────────┐
│  FRONTEND: React 18 | Vite 5.4 |       │
│            Tailwind CSS | Three.js      │
├──────────── Port 5174 ──────────────────┤
│  API GATEWAY: FastAPI | 93+ Endpoints | │
│               Security                  │
├──────────── Port 8003 ──────────────────┤
│  ORCHESTRATION: Dispatcher | DSPy       │
│                 Router | A2A Protocol   │
├─────────────────────────────────────────┤
│  AGENT FRAMEWORKS: LangGraph | CrewAI | │
│    AutoGen | DSPy | LlamaIndex | AG2 |  │
│    Google ADK | Transformers            │
├─────────────────────────────────────────┤
│  INFRASTRUCTURE: Ollama LLM | ChromaDB |│
│                  Memory Store | RTX 5070│
└─────────────────────────────────────────┘
```

- **계층별 색상 코드**:
  - Frontend: Blue (`--accent-blue`)
  - API Gateway: Purple (`--accent-purple`)
  - Orchestration: Cyan (`--accent-cyan`)
  - Agent Frameworks: Orange (`--accent-orange`)
  - Infrastructure: Green (`--accent-green`)
- **커넥터**: 계층 간 포트 번호 표시

### 4.6 Dashboard Preview (대시보드 미리보기)

```
파일: index.html (491~617행)
스타일: style.css - .dashboard-preview 섹션 (764~1045행)
앵커: #dashboard
```

- **macOS 스타일 윈도우 목업**:
  - 타이틀 바: 빨강/노랑/초록 도트 + "AgentForge Dashboard - localhost:5174"
  - 좌측 사이드바: 20개 메뉴 항목 + 프레임워크 상태 인디케이터 (7개 녹색 도트)
  - 우측 메인 콘텐츠:
    - 상태 필 (All Systems Online, 8 Frameworks Active)
    - 통계 카드 4개 (Active Frameworks: 8, API Endpoints: 93+, Documents: 64, LLM Models: 10)
    - Framework Usage 바 차트 (8개 프레임워크 사용률)
    - System Health 그리드 (Ollama, ChromaDB, GPU, Memory, API Server, RAG Pipeline 상태)

### 4.7 Installed Models (설치된 LLM 모델)

```
파일: index.html (619~671행)
스타일: style.css - .models-grid 섹션 (1047~1097행)
앵커: #models
```

- **5열 그리드** (반응형: 태블릿 3열, 모바일 2열/1열)
- **10개 모델 카드**:

| 모델명 | 유형 | 비고 |
|--------|------|------|
| qwen2.5:7b | Text Generation | Primary (뱃지 표시) |
| deepseek-r1:8b | Reasoning | - |
| gemma2:9b | Text Generation | - |
| mistral:7b | Text Generation | - |
| llama3.2:3b | Lightweight | - |
| llama3.2:1b | Ultra-light | - |
| llama3.2-vision | Vision | - |
| llava:7b | Vision | - |
| nomic-embed-text | Embedding | - |
| BAAI/bge-m3 | Embedding | - |

### 4.8 Tech Stack (기술 스택)

```
파일: index.html (673~741행)
스타일: style.css - .tech-grid 섹션 (1099~1169행)
앵커: #techstack
```

- **4열 카테고리 카드**:
  - **Backend**: Python 3.12, FastAPI 0.115.0, Uvicorn ASGI, Pydantic 2.x, Ollama 0.6.1
  - **Frontend**: React 18.3.1, Vite 5.4.1, Tailwind CSS 3.4.18, Three.js 0.169.0, Framer Motion 11.11.17, Zustand 4.5.2
  - **AI/ML**: PyTorch 2.9.1, Transformers 4.56.2, ChromaDB 1.1.1, Sentence-Transformers 5.1.2, PEFT/LoRA
  - **Security**: AES-256 Encryption, JWT Auth, bcrypt Hashing, Rate Limiting, Input Validation

### 4.9 API Endpoints (REST API)

```
파일: index.html (743~801행)
스타일: style.css - .api-grid 섹션 (1171~1246행)
앵커: #apis
```

- **4개 카테고리 카드** (총 93+ 엔드포인트):
  - **Core APIs** (16개): /api/health, /api/query, /api/orchestration/unified, /api/stats
  - **RAG & Search** (17개): /api/rag/upload, /api/rag/search, /api/tax/query, /api/tax/graph/stats
  - **Frameworks** (13개): /api/dspy/optimize, /api/llamaindex/search, /api/ag2/execute, /api/adk/execute
  - **System** (47+개): /api/memory/stats, /api/environment/gpu/status, /api/prompts, /api/training/export
- **HTTP 메서드 색상**: GET (녹색), POST (파란색)

### 4.10 Test Results (테스트 결과)

```
파일: index.html (804~850행)
스타일: style.css - .test-results 섹션 (1248~1373행)
JS: main.js - Test Ring Animation (235~253행)
앵커: #tests
```

- **SVG 원형 프로그레스 링**: 100% 통과율 애니메이션 (stroke-dashoffset 전환, 2초)
- **통계 수치**: Total 97 / Passed 97 (녹색) / Failed 0 (빨간색)
- **테스트 카테고리 8개**:
  - Core System & Health
  - 8 Framework Integration
  - RAG Pipeline & Tax RAG
  - Orchestration Engine
  - Memory Management
  - Security & Authentication
  - Frontend Components
  - API Endpoints (93+)

### 4.11 CTA Section + Footer

```
파일: index.html (852~910행)
스타일: style.css - .cta-section, .footer 섹션 (1375~1459행)
```

- **CTA**: "Ready to Get Started?" + Dashboard 실행 및 API 문서 버튼
- **Footer**: 3열 링크 그룹 (Platform, Resources, System) + 저작권 표시

---

## 5. 디자인 시스템

### 5.1 색상 팔레트

```css
/* 배경 */
--bg-primary:   #010409    /* 메인 배경 (거의 검정) */
--bg-secondary: #0d1117    /* 다크 섹션 배경 */
--bg-tertiary:  #161b22    /* 카드/요소 배경 */
--bg-card:      rgba(22, 27, 34, 0.7)  /* 반투명 카드 */
--bg-glass:     rgba(22, 27, 34, 0.5)  /* 글래스모피즘 */

/* 텍스트 */
--text-primary:   #e6edf3  /* 주요 텍스트 (밝은 회색) */
--text-secondary: #8b949e  /* 보조 텍스트 */
--text-muted:     #6e7681  /* 비활성 텍스트 */

/* 액센트 (9색) */
--accent-blue:   #58a6ff   /* 주요 강조색 */
--accent-purple: #bc8cff   /* 보조 강조색 */
--accent-green:  #3fb950   /* 성공/활성 상태 */
--accent-cyan:   #39d2c0   /* 오케스트레이션 */
--accent-orange: #f0883e   /* 에이전트 */
--accent-pink:   #f778ba   /* 특수 기능 */
--accent-yellow: #e3b341   /* 경고/대기 */
--accent-red:    #f85149   /* 오류/실패 */
--accent-teal:   #2ea58a   /* 학습/훈련 */

/* 그라디언트 */
--gradient-primary: linear-gradient(135deg, #58a6ff 0%, #bc8cff 50%, #39d2c0 100%)
```

### 5.2 타이포그래피

| 용도 | 폰트 | 크기 범위 |
|------|------|-----------|
| 본문/UI | Inter (Google Fonts) | 0.65rem ~ 1.1rem |
| 코드/버전 | JetBrains Mono (Google Fonts) | 0.6rem ~ 0.85rem |
| Hero 타이틀 | Inter Black (900) | clamp(2.5rem, 6vw, 4.5rem) |
| 섹션 타이틀 | Inter Extra Bold (800) | clamp(2rem, 4vw, 3rem) |

### 5.3 아이콘

- **Font Awesome 6.5.1** (CDN)
- Solid 스타일 (`fas`): 대부분의 UI 아이콘
- Brands 스타일 (`fab`): React, Google 등 브랜드 아이콘

### 5.4 레이아웃 시스템

| 속성 | 값 | 용도 |
|------|----|------|
| `--container-max` | 1280px | 콘텐츠 최대 너비 |
| `--header-height` | 64px | 헤더 높이 |
| `--radius-sm` | 6px | 작은 요소 라운딩 |
| `--radius-md` | 12px | 버튼, 카드 라운딩 |
| `--radius-lg` | 16px | 큰 카드 라운딩 |

---

## 6. JavaScript 기능

### 6.1 파티클 배경 애니메이션

```
파일: main.js (7~76행)
```

- **Canvas 2D API** 기반 풀스크린 파티클 필드
- 화면 크기에 비례하여 파티클 개수 자동 조절 (`width * height / 18000`)
- 각 파티클: 위치, 크기 (0.3~1.8px), 속도 (±0.15), 투명도 (0.1~0.6)
- 파티클 간 100px 이내 거리 시 연결선 렌더링 (반투명 파란색)
- `requestAnimationFrame` 기반 60fps 렌더 루프
- 윈도우 리사이즈 시 캔버스 및 파티클 재생성

### 6.2 헤더 스크롤 반응

```
파일: main.js (78~90행)
```

- 50px 이상 스크롤 시 `.scrolled` 클래스 토글
- 배경 불투명도 85% → 95% 전환 + 그림자 추가

### 6.3 모바일 네비게이션 토글

```
파일: main.js (92~107행)
```

- 햄버거 메뉴 클릭 시 `.open` 클래스 토글
- 네비게이션 링크 클릭 시 자동 닫힘

### 6.4 스무스 스크롤 & 활성 링크

```
파일: main.js (109~140행)
```

- `href="#..."` 앵커 링크 클릭 시 80px 오프셋 적용 스무스 스크롤
- 스크롤 위치에 따라 현재 섹션의 네비게이션 링크에 `.active` 클래스 자동 적용

### 6.5 카운터 애니메이션

```
파일: main.js (142~181행)
```

- Hero 통계 카드가 뷰포트에 진입하면 0부터 목표값까지 카운트업
- Ease-out 큐빅 이징 (`1 - (1 - t)^3`) 적용
- 2초 동안 애니메이션 진행
- `IntersectionObserver` (threshold: 0.5)로 트리거
- "93" 표시 후 "93+"으로 변환

### 6.6 스크롤 진입 애니메이션

```
파일: main.js (183~208행)
```

- 대상 요소: feature-card, framework-card, tech-category, api-card, model-card, arch-layer, test-results
- 초기 상태: `opacity: 0`, `translateY(30px)`
- 뷰포트 진입 시: `opacity: 1`, `translateY(0)` (0.6초 ease 트랜지션)
- 카드 인덱스에 따라 0.1초씩 지연 (4개 단위 반복)

### 6.7 프레임워크 세대 필터

```
파일: main.js (210~233행)
```

- 탭 버튼 (All / 1st / 2nd / Next) 클릭 시 `data-gen` 속성 기반 카드 필터링
- `.hidden` 클래스로 `display: none` 적용

### 6.8 테스트 링 애니메이션

```
파일: main.js (235~253행)
```

- SVG circle의 `stroke-dashoffset`를 원둘레 값에서 0으로 전환
- 원 반지름 85px, 둘레 ≈ 534px
- 뷰포트 진입 후 300ms 딜레이로 시작, 2초 ease 트랜지션

### 6.9 카드 3D 틸트 효과

```
파일: main.js (255~272행)
```

- 대상: feature-card, framework-card, stat-card
- 마우스 위치 기반 `rotateX/rotateY` 계산 (중심 기준, ÷20 감쇄)
- `perspective(800px)` 3D 효과 + `translateY(-6px)` 부양 효과
- 마우스 이탈 시 원래 상태 복원

---

## 7. 반응형 디자인

### 브레이크포인트

| 너비 | 적용 변경사항 |
|------|--------------|
| **1025px 이상** (데스크톱) | 기본 레이아웃: 기능 3열, 프레임워크 4열, 기술/API 4열, 모델 5열, 통계 4열 |
| **769~1024px** (태블릿) | 기능/프레임워크/기술/API 2열, 모델 3열, 통계 2열, 대시보드 통계 2열 |
| **481~768px** (모바일) | 모든 그리드 1열, 네비게이션 숨김→햄버거 메뉴, 사이드바 숨김, 대시보드 차트 1열, 테스트 결과 수직 배치, 헤더 버튼 숨김, 섹션 패딩 축소 (100px→60px), 푸터 수직 배치 |
| **480px 이하** (소형 모바일) | 통계 2열, 모델 1열, 테스트 카테고리 1열 |

---

## 8. 외부 의존성

| 리소스 | 버전 | CDN | 용도 |
|--------|------|-----|------|
| Inter 폰트 | Variable | Google Fonts | 본문 타이포그래피 |
| JetBrains Mono 폰트 | Variable | Google Fonts | 코드/버전 표시 |
| Font Awesome | 6.5.1 | cdnjs.cloudflare.com | UI 아이콘 |

- 프레임워크/빌드 도구 의존성 없음 (순수 HTML/CSS/JS)
- Node.js, npm 불필요
- Python 3 내장 HTTP 서버로 즉시 실행 가능

---

## 9. 디자인 참조

본 웹페이지의 디자인은 아래 두 프로젝트의 스타일을 참조하여 구현되었습니다:

| 참조 프로젝트 | URL | 적용 요소 |
|--------------|-----|-----------|
| AIALBM | https://wdlab1958.github.io/Webpage_AIALBM/ | Dark Nebula 테마, 섹션 레이아웃, 기능 카드 패턴, 대시보드 프리뷰 |
| AiNex Home | https://wdlab1958.github.io/AiNex_Home/ainex | 글래스 카드 효과, 그라디언트 텍스트, CTA 버튼 스타일, 네비게이션 패턴 |

---

## 10. 커스터마이징 가이드

### 10.1 색상 변경

`css/style.css`의 `:root` CSS 변수 (7~51행)를 수정합니다.

```css
:root {
    --accent-blue: #58a6ff;    /* 주요 강조색 변경 */
    --gradient-primary: linear-gradient(135deg, #새색상1, #새색상2, #새색상3);
}
```

### 10.2 콘텐츠 업데이트

`index.html`에서 해당 섹션의 텍스트를 직접 수정합니다.
- 프레임워크 버전 업데이트: 각 `.fw-version` 요소 수정
- 기능 추가/삭제: `.features-grid` 내부에 `.feature-card` 요소 추가/제거
- 모델 목록 변경: `.models-grid` 내부에 `.model-card` 요소 추가/제거

### 10.3 포트 변경

```bash
# 다른 포트로 실행
python3 -m http.server 9090 --bind 0.0.0.0
```

### 10.4 AgentForge 연동 URL 변경

`index.html`에서 다음 URL을 검색하여 수정합니다:
- `http://localhost:5174` → AgentForge 프론트엔드 주소
- `http://localhost:8003` → AgentForge 백엔드 API 주소

---

## 11. 파일 상세 사양

| 파일 | 행 수 | 크기(약) | 설명 |
|------|-------|----------|------|
| `index.html` | 914행 | 40 KB | 전체 페이지 구조, 10개 섹션 콘텐츠 |
| `css/style.css` | 1,539행 | 32 KB | Dark Nebula 테마, 반응형, 100+ CSS 클래스 |
| `js/main.js` | 275행 | 8 KB | 파티클 배경, 카운터, 스크롤 애니메이션, 필터, 틸트 |

**총 코드량**: 약 2,728행 / 80 KB (외부 의존성 제외)
