(function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function productUrl(productPath, docPath) {
    const config = window.CODE_FORGE_CONFIG;
    if (config?.productUrl) return config.productUrl(productPath, docPath);
    const product = productPath.replace(/^\//, "");
    if (!docPath) return `/${product}/`;
    return `/${product}/${docPath.replace(/^\//, "").replace(/\/$/, "")}/`;
  }

  function renderProductList(container) {
    const products = window.CODE_FORGE_PRODUCTS || [];
    if (!products.length) {
      container.innerHTML = "<p>등록된 제품이 없습니다.</p>";
      return;
    }

    container.innerHTML = products
      .map((product) => {
        const docLinks = product.docs
          .map(
            (doc) => `
              <a class="doc-link" href="${escapeHtml(productUrl(product.path, doc.path))}">
                <span>${escapeHtml(doc.label)}</span>
                <span class="doc-link-arrow" aria-hidden="true">›</span>
              </a>
            `
          )
          .join("");

        const langNote = product.languages?.length
          ? `<p class="lang-note">지원 언어: ${product.languages.join(", ")}</p>`
          : "";

        return `
          <section class="product-card" aria-labelledby="product-${escapeHtml(product.id)}">
            <div class="product-header">
              <div class="product-icon" style="background: ${product.iconGradient}" aria-hidden="true">
                ${escapeHtml(product.icon)}
              </div>
              <div>
                <h2 class="product-name" id="product-${escapeHtml(product.id)}">
                  <a href="${escapeHtml(productUrl(product.path))}">${escapeHtml(product.name)}</a>
                </h2>
                <p class="product-desc">${escapeHtml(product.description)}</p>
              </div>
            </div>
            <div class="doc-links">${docLinks}</div>
            ${langNote}
          </section>
        `;
      })
      .join("");
  }

  function renderProductPage(container, productId) {
    const product = (window.CODE_FORGE_PRODUCTS || []).find((p) => p.id === productId);
    if (!product) {
      container.innerHTML = "<p>제품을 찾을 수 없습니다.</p>";
      return;
    }

    document.title = `${product.name} — CodeForge Legal`;

    const docLinks = product.docs
      .map(
        (doc) => `
          <a class="doc-link" href="${escapeHtml(productUrl(product.path, doc.path))}">
            <span>${escapeHtml(doc.label)}</span>
            <span class="doc-link-arrow" aria-hidden="true">›</span>
          </a>
        `
      )
      .join("");

    const langNote = product.languages?.length
      ? `<p class="lang-note">지원 언어: ${product.languages.join(", ")}</p>`
      : "";

    container.innerHTML = `
      <a class="back-link" href="/">← 전체 제품</a>
      <section class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background: ${product.iconGradient}" aria-hidden="true">
            ${escapeHtml(product.icon)}
          </div>
          <div>
            <h1 class="product-name">${escapeHtml(product.name)}</h1>
            <p class="product-desc">${escapeHtml(product.description)}</p>
          </div>
        </div>
        <div class="doc-links">${docLinks}</div>
        ${langNote}
      </section>
    `;
  }

  window.CodeForgeSite = {
    renderProductList,
    renderProductPage,
  };
})();
