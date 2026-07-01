# link-code-forge

제품별 이용약관·개인정보 처리방침 정적 페이지 저장소입니다.

## 로컬 미리보기

### 방법 1: 파일로 바로 열기

`index.html`을 브라우저에서 직접 열면 전체 제품 목록이 표시됩니다.

### 방법 2: 로컬 서버 (권장)

```bash
./serve.sh
```

서버가 실행 중이어야 `http://localhost:8080/...` 주소로 접근할 수 있습니다.

| 페이지 | 파일 경로 | 서버 URL |
|--------|-----------|----------|
| 전체 목록 | `index.html` | http://localhost:8080/ |
| Spot Stapler | `spotStapler/index.html` | http://localhost:8080/spotStapler/ |
| 이용약관 | `spotStapler/term/index.html` | http://localhost:8080/spotStapler/term |
| 개인정보 처리방침 | `spotStapler/privacy/index.html` | http://localhost:8080/spotStapler/privacy |
| 고객 지원 | `spotStapler/support/index.html` | http://localhost:8080/spotStapler/support |

## 구조

```
link-code-forge/
├── index.html              # 전체 제품 목록
├── CNAME                   # GitHub Pages 커스텀 도메인 (link.getcodeforge.dev)
├── css/site.css            # 목록·제품 허브 공통 스타일
├── js/
│   ├── config.js           # 공통 설정
│   ├── products.js         # 제품 등록 (새 제품 추가 시 수정)
│   └── site.js             # 목록·허브 렌더링
├── spotStapler/            # 제품별 폴더
│   ├── index.html          # 제품 허브 (약관·개인정보 링크)
│   ├── css/legal.css
│   ├── js/
│   ├── term/index.html
│   └── privacy/index.html
└── .github/workflows/
    └── deploy.yml          # main push 시 gh-pages 자동 배포
```

## 새 제품 추가 방법

1. `js/products.js`의 `CODE_FORGE_PRODUCTS` 배열에 제품 정보 추가
2. `{productName}/` 폴더 생성 (`spotStapler/` 구조 참고)
3. `{productName}/index.html` 생성 후 `CodeForgeSite.renderProductPage(..., "productId")` 호출

## 배포

GitHub Pages로 배포합니다. `main` 브랜치에 push하면 `.github/workflows/deploy.yml` 워크플로우가 저장소 전체를 `gh-pages` 브랜치로 자동 배포합니다.

```bash
git push origin main   # 이후 자동 배포
```

- **소스**: `main` 브랜치
- **배포본**: `gh-pages` 브랜치 (자동 생성·갱신, 직접 수정하지 않음)
- **라이브 URL**: https://link.getcodeforge.dev/

### 커스텀 도메인 (link.getcodeforge.dev)

루트의 `CNAME` 파일에 도메인이 지정되어 있어, 배포 시 GitHub Pages가 자동으로 인식합니다.

DNS는 도메인 등록처(Squarespace)에서 아래 CNAME 레코드로 설정합니다.

| Host | Type | Value |
|------|------|-------|
| `link` | `CNAME` | `wglee0511.github.io` |

GitHub 저장소 `Settings → Pages`에서 Custom domain 확인 후, 인증서 발급이 끝나면 **Enforce HTTPS**를 켭니다.

## Spot Stapler

### 지원 언어

한국어(`ko`), 영어(`en`), 일본어(`ja`), 중국어(`zh`), 스페인어(`es`)

언어는 URL 쿼리(`?lang=ko`) 또는 상단 언어 버튼으로 전환됩니다.

### 배포 (spotstapler.app)

앱에서 사용하는 URL:

- `https://spotstapler.app/term`
- `https://spotstapler.app/privacy`
- `https://spotstapler.app/support`

`spotstapler.app` 도메인에는 **`spotStapler/` 폴더 내용을 사이트 루트**로 배포합니다.

이 저장소 전체를 하나의 도메인(`link.getcodeforge.dev`)에 배포할 경우 경로는 `/spotStapler/term`, `/spotStapler/privacy`, `/spotStapler/support` 입니다.

### 고객 지원 (앱스토어 지원 URL)

`support/index.html`은 App Store·Google Play 심사에서 요구하는 지원 URL 용도입니다. 문의 이메일(`admin@getcodeforge.dev`)과 알림·구독·환불 관련 FAQ를 5개 언어로 제공합니다. 콘텐츠는 `js/support-content.js`에 있습니다.
