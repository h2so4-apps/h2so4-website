import type { Metadata } from "next";
import { SiteShell, SUPPORT_EMAIL } from "../site-shell";

export const metadata: Metadata = {
  title: "広告・アフィリエイトについて",
  description: "H2SO4のウェブサイトおよびアプリにおける広告・アフィリエイトリンクの取扱いについて。",
  alternates: { canonical: "/advertising" },
};

export default function AdvertisingPage() {
  return (
    <SiteShell>
      <main className="legal-content">
        <p className="eyebrow">Disclosure</p>
        <h1>広告・アフィリエイトについて</h1>
        <p className="legal-meta">制定日：2026年9月27日 · 運営者：H2SO4</p>

        <section>
          <h2>広告・アフィリエイトリンクの利用</h2>
          <p>
            H2SO4が運営するウェブサイトおよびアプリには、第三者の商品・サービスを紹介する広告または
            アフィリエイトリンクが含まれる場合があります。利用者がリンク先で申込みや購入を行った場合、
            運営者が紹介料を受け取ることがあります。利用者の支払額がそのことにより追加されるものではありません。
          </p>
        </section>
        <section>
          <h2>表示方針</h2>
          <p>
            広告やアフィリエイトリンクを掲載する場合は、利用者が判別できるよう「広告」「PR」等の表示に努めます。
            報酬の有無にかかわらず、掲載内容の正確性とわかりやすさを大切にします。
          </p>
        </section>
        <section>
          <h2>外部サイトの情報</h2>
          <p>
            価格、在庫、申込条件、サービス内容等は変更されることがあります。最新情報は必ずリンク先の事業者サイトでご確認ください。
            外部サイトで行われる取引や提供サービスについて、H2SO4は当事者ではありません。
          </p>
        </section>
        <section>
          <h2>個人情報の取扱い</h2>
          <p>
            外部サイトへ移動した後の個人情報の取扱いは、各事業者のプライバシーポリシーに従います。
            各アプリ内のデータの取扱いは、それぞれのプライバシーポリシーをご確認ください。
          </p>
        </section>
        <section>
          <h2>お問い合わせ</h2>
          <p>本ページに関するお問い合わせ：<a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
        </section>
        <div className="legal-links">
          <a className="button button-secondary" href="/privacy/kumocalc">雲電卓 Privacy</a>
          <a className="button button-secondary" href="/privacy/furumane">ふるマネ Privacy</a>
          <a className="button button-secondary" href="/support">サポート</a>
        </div>
      </main>
    </SiteShell>
  );
}
