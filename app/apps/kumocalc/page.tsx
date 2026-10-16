import type { Metadata } from "next";
import { SiteShell } from "../../site-shell";

export const metadata: Metadata = {
  title: "雲電卓（KumoCalc）",
  description: "計算結果を雲に残して、次の計算に使える。雲電卓（KumoCalc）v1.0はApp Storeで配信中です。",
  alternates: { canonical: "/apps/kumocalc" },
};

export default function KumoCalcPage() {
  return (
    <SiteShell>
      <main className="page-main">
        <section className="page-hero section-shell">
          <div>
            <p className="eyebrow">KumoCalc</p>
            <h1>雲電卓</h1>
            <p className="page-lead">
              計算結果を雲に残して、次の計算に使える。
              数を見ながら整理できる電卓アプリです。
            </p>
          </div>
          <img className="app-icon" src="/images/kumocalc/icon.webp" alt="雲電卓のアプリアイコン" width={92} height={92} />
        </section>

        <div className="coming-soon-panel kumocalc-release section-shell">
          <div>
            <strong>App Storeで配信中</strong>
            <span>雲電卓 v1.0 を公開しました。</span>
          </div>
          <a className="button button-primary kumocalc-download" href="https://apps.apple.com/jp/app/id6821341925">
            App Storeでダウンロード
          </a>
        </div>

        <section className="kumocalc-screenshots section-shell" aria-label="雲電卓のApp Store掲載スクリーンショット">
          <img src="/images/kumocalc/cloud.webp" alt="計算結果を雲として残せる雲電卓の画面" width={460} height={998} loading="lazy" />
          <img src="/images/kumocalc/organize.webp" alt="雲を動かして計算結果を整理する画面" width={460} height={998} loading="lazy" />
          <img src="/images/kumocalc/reuse.webp" alt="雲に残した数を次の計算に使う画面" width={460} height={998} loading="lazy" />
        </section>

        <section className="detail-grid section-shell" aria-labelledby="features-title">
          <div>
            <p className="eyebrow">Designed for clarity</p>
            <h2 id="features-title">計算した数を、見ながら使える。</h2>
          </div>
          <div>
            <ul className="feature-list">
              <li>計算結果を雲に残して、画面の中に並べられる</li>
              <li>雲を動かして、使いたい数を見やすく整理できる</li>
              <li>残した雲の数を、次の計算に使える</li>
            </ul>
            <div className="legal-links">
              <a className="button button-secondary" href="/privacy/kumocalc">プライバシーポリシー</a>
              <a className="button button-secondary" href="/support">サポート</a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
