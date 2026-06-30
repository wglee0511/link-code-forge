/**
 * 배포 기준 경로 설정.
 * - 저장소 전체 배포: REPO_BASE = ""
 * - spotStapler 단독 도메인 배포 시: REPO_BASE = "" 이고 PRODUCT_PATHS 수정 필요
 */
window.CODE_FORGE_CONFIG = {
  repoBase: "",

  productUrl(productPath, docPath) {
    const base = this.repoBase.replace(/\/$/, "");
    const product = productPath.replace(/^\//, "");
    const doc = docPath ? `/${docPath.replace(/^\//, "").replace(/\/$/, "")}/` : "/";
    return `${base}/${product}${docPath ? doc : "/"}`;
  },

  assetUrl(path) {
    const base = this.repoBase.replace(/\/$/, "");
    const clean = path.replace(/^\//, "");
    return base ? `${base}/${clean}` : `/${clean}`;
  },
};
