import type { Metadata } from "next";
import { SiteShell, SUPPORT_EMAIL } from "../site-shell";

export const metadata: Metadata = {
  title: "サポート",
  description: "H2SO4、雲電卓（KumoCalc）、ふるマネへのお問い合わせとサポート情報。",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <SiteShell>
      <main className="page-main">
        <section className="info-section section-shell">
          <p className="eyebrow">Support</p>
          <h1>サポート</h1>
          <p>
            ご質問、不具合のご報告、ご要望を受け付けています。
            お問い合わせ前に、対象アプリと下記の情報をご確認ください。
          </p>

          <div className="support-cards">
            <article className="support-card">
              <h2>雲電卓（KumoCalc）</h2>
              <p>電卓の操作、表示、計算履歴などに関するお問い合わせ。</p>
              <a className="text-link" href="/apps/kumocalc">アプリ情報を見る →</a>
            </article>
            <article className="support-card">
              <h2>ふるマネ</h2>
              <p>寄付記録、表示、外部サイトへのリンクなどに関するお問い合わせ。</p>
              <a className="text-link" href="/apps/furumane">アプリ情報を見る →</a>
            </article>
          </div>

          <div className="contact-panel">
            <h2>メールで問い合わせる</h2>
            <p>
              アプリ名、アプリのバージョン、端末名、OSのバージョン、
              問題が起きた手順をお知らせください。パスワードやクレジットカード番号などの機密情報は送らないでください。
            </p>
            <a className="button button-light" href={`mailto:${SUPPORT_EMAIL}?subject=H2SO4%20%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%B8%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B`}>
              {SUPPORT_EMAIL}
            </a>
          </div>

          <p className="small-note">
            内容を確認のうえ順次返信します。返信まで数日かかる場合があります。
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
