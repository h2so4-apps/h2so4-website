/* eslint-disable @next/next/no-html-link-for-pages */
export const SUPPORT_EMAIL = "h2so4.apps@gmail.com";
export const X_URL = "https://x.com/h2so4_apps";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="H2SO4 ホーム">
            H<sub>2</sub>SO<sub>4</sub>
          </a>
          <nav className="site-nav" aria-label="メインナビゲーション">
            <a href="/#apps">Apps</a>
            <a href="/support">Support</a>
            <a className="nav-x" href={X_URL} target="_blank" rel="noreferrer" aria-label="H2SO4のXを開く">
              X
            </a>
          </nav>
        </div>
      </header>
      <div id="main-content">{children}</div>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="brand" href="/" aria-label="H2SO4 ホーム">
              H<sub>2</sub>SO<sub>4</sub>
            </a>
            <p>暮らしの中の「少し面倒」を、すっきり使えるアプリに。</p>
          </div>
          <nav className="footer-nav" aria-label="フッターナビゲーション">
            <a href="/apps/kumocalc">雲電卓</a>
            <a href="/privacy/kumocalc">雲電卓 Privacy</a>
            <a href="/apps/furumane">ふるマネ</a>
            <a href="/privacy/furumane">ふるマネ Privacy</a>
            <a href="/support">Support</a>
            <a href="/advertising">広告・アフィリエイト</a>
          </nav>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} H2SO4</span>
            <a href={X_URL} target="_blank" rel="noreferrer">
              X / H2SO4
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
