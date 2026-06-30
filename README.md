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

## 구조

```
link-code-forge/
├── index.html              # 전체 제품 목록
├── css/site.css            # 목록·제품 허브 공통 스타일
├── js/
│   ├── products.js         # 제품 등록 (새 제품 추가 시 수정)
│   └── site.js             # 목록·허브 렌더링
└── spotStapler/            # 제품별 폴더
    ├── index.html          # 제품 허브 (약관·개인정보 링크)
    ├── css/legal.css
    ├── js/
    ├── term/index.html
    └── privacy/index.html
```

## 새 제품 추가 방법

1. `js/products.js`의 `CODE_FORGE_PRODUCTS` 배열에 제품 정보 추가
2. `{productName}/` 폴더 생성 (`spotStapler/` 구조 참고)
3. `{productName}/index.html` 생성 후 `CodeForgeSite.renderProductPage(..., "productId")` 호출

## Spot Stapler

### 지원 언어

한국어(`ko`), 영어(`en`), 일본어(`ja`), 중국어(`zh`), 스페인어(`es`)

언어는 URL 쿼리(`?lang=ko`) 또는 상단 언어 버튼으로 전환됩니다.

### 배포 (spotstapler.app)

앱에서 사용하는 URL:

- `https://spotstapler.app/term`
- `https://spotstapler.app/privacy`

`spotstapler.app` 도메인에는 **`spotStapler/` 폴더 내용을 사이트 루트**로 배포합니다.

이 저장소 전체를 하나의 도메인에 배포할 경우 경로는 `/spotStapler/term`, `/spotStapler/privacy` 입니다.
