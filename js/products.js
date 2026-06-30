/**
 * 제품 목록 — 새 제품 추가 시 이 배열에 항목을 추가합니다.
 *
 * @typedef {Object} ProductDoc
 * @property {string} path - 문서 경로 (예: "term", "privacy")
 * @property {string} label - 문서 표시 이름
 *
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} path - 저장소 내 폴더명 (예: "spotStapler")
 * @property {string} icon - 아이콘 텍스트 (2글자 권장)
 * @property {string} iconGradient - CSS linear-gradient 값
 * @property {ProductDoc[]} docs
 * @property {string[]} languages
 */
window.CODE_FORGE_PRODUCTS = [
  {
    id: "spotStapler",
    name: "Spot Stapler",
    description: "위치 기반 리마인더 앱",
    path: "spotStapler",
    icon: "SS",
    iconGradient: "linear-gradient(135deg, #2563eb, #7c3aed)",
    docs: [
      { path: "term", label: "이용약관" },
      { path: "privacy", label: "개인정보 처리방침" },
    ],
    languages: ["ko", "en", "ja", "zh", "es"],
  },
];
