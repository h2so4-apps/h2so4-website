import type { Metadata } from "next";
import { SiteShell } from "../../site-shell";

export const metadata: Metadata = {
  title: "雲電卓（KumoCalc）",
  description: "日々の計算をすばやく見やすく。H2SO4が開発する電卓アプリ、雲電卓（KumoCalc）のご紹介。",
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
              日々の計算を、すばやく見やすく。シンプルな操作と、
              あとから追いやすい計算履歴を大切にした電卓アプリです。
            </p>
          </div>
          <div className="app-icon app-icon-cloud" aria-hidden="true">123</div>
        </section>

        <div className="coming-soon-panel section-shell">
          <div>
            <strong>App Storeで公開予定</strong>
            <span>現在、iPhone向けの公開準備を進めています。</span>
          </div>
          <span className="store-badge">App Store · Coming Soon</span>
        </div>

        <section className="detail-grid section-shell" aria-labelledby="features-title">
          <div>
            <p className="eyebrow">Designed for clarity</p>
            <h2 id="features-title">計算の流れが、あとから見てもわかる。</h2>
          </div>
          <div>
            <ul className="feature-list">
              <li>すぐに使い始められる、迷いの少ない操作</li>
              <li>計算の流れを確認しやすい、見やすい履歴</li>
              <li>日常のちょっとした計算に馴染む、すっきりした画面</li>
            </ul>
            <p className="small-note">掲載内容は開発中のもので、公開時に変更される場合があります。</p>
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
