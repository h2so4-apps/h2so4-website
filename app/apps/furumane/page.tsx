import type { Metadata } from "next";
import { SiteShell } from "../../site-shell";

export const metadata: Metadata = {
  title: "ふるマネ（Furumane）",
  description: "ふるさと納税の寄付額や進み具合を、ひとつの場所で整理するH2SO4の管理アプリ、ふるマネ。",
  alternates: { canonical: "/apps/furumane" },
};

export default function FurumanePage() {
  return (
    <SiteShell>
      <main className="page-main">
        <section className="page-hero section-shell">
          <div>
            <p className="eyebrow">Furumane</p>
            <h1>ふるマネ</h1>
            <p className="page-lead">
              ふるさと納税の寄付額や進み具合を、ひとつの場所で整理。
              わかりにくい管理を、手元でもっとシンプルにします。
            </p>
          </div>
          <div className="app-icon app-icon-furu" aria-hidden="true">ふ</div>
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
            <p className="eyebrow">Keep it organized</p>
            <h2 id="features-title">寄付の記録を、すっきりひとまとめに。</h2>
          </div>
          <div>
            <ul className="feature-list">
              <li>ふるさと納税の寄付内容と金額をまとめて管理</li>
              <li>現在の進み具合を見やすく確認</li>
              <li>必要な情報へ迷わずたどり着ける、シンプルな設計</li>
            </ul>
            <p className="small-note">
              本アプリには、ふるさと納税サイト等への広告・アフィリエイトリンクを掲載する場合があります。
              掲載内容は開発中のもので、公開時に変更される場合があります。
            </p>
            <div className="legal-links">
              <a className="button button-secondary" href="/privacy/furumane">プライバシーポリシー</a>
              <a className="button button-secondary" href="/advertising">広告について</a>
              <a className="button button-secondary" href="/support">サポート</a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
