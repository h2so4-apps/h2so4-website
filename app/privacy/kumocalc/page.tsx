import type { Metadata } from "next";
import { SiteShell, SUPPORT_EMAIL } from "../../site-shell";

export const metadata: Metadata = {
  title: "雲電卓 プライバシーポリシー",
  description: "雲電卓（KumoCalc）のプライバシーポリシー。",
  alternates: { canonical: "/privacy/kumocalc" },
};

export default function KumoCalcPrivacyPage() {
  return (
    <SiteShell>
      <main className="legal-content">
        <p className="eyebrow">KumoCalc · Privacy</p>
        <h1>雲電卓<br />プライバシーポリシー</h1>
        <p className="legal-meta">制定日：2026年9月27日 · 運営者：H2SO4</p>
        <div className="legal-notice">
          本ポリシーは公開準備中の初期版を対象とした暫定版です。正式公開前に、実際の機能・利用SDK・ストア掲載内容と照合して更新します。
        </div>

        <section>
          <h2>1. 基本方針</h2>
          <p>
            H2SO4（以下「運営者」）は、雲電卓（KumoCalc。以下「本アプリ」）における利用者情報を適切に取り扱い、
            必要最小限のデータ利用に努めます。
          </p>
        </section>
        <section>
          <h2>2. 本アプリ内のデータ</h2>
          <p>
            計算内容および計算履歴は、原則として利用者の端末内で処理・保存され、運営者のサーバーへ送信されません。
            本アプリの利用にアカウント登録は必要ありません。
          </p>
        </section>
        <section>
          <h2>3. 自動的に提供される情報</h2>
          <p>
            利用者が端末の設定でAppleへの解析情報共有を許可している場合、Appleを通じて、個人を直接特定しない形式の
            クラッシュ情報や利用状況が運営者へ提供されることがあります。これらは品質改善および不具合修正のために利用します。
          </p>
        </section>
        <section>
          <h2>4. お問い合わせ</h2>
          <p>
            メールでお問い合わせいただいた場合、返信に必要なメールアドレス、本文、任意で添付された情報を取得します。
            これらは問い合わせ対応と再発防止のためにのみ利用し、法令に基づく場合を除き第三者へ提供しません。
          </p>
        </section>
        <section>
          <h2>5. ポリシーの変更</h2>
          <p>
            機能追加、利用サービスの変更または法令等への対応により、本ポリシーを変更する場合があります。
            重要な変更は本ページまたはアプリ内でお知らせします。
          </p>
        </section>
        <section>
          <h2>6. 連絡先</h2>
          <p>お問い合わせ：<a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
        </section>
        <div className="legal-links">
          <a className="button button-secondary" href="/apps/kumocalc">雲電卓に戻る</a>
          <a className="button button-secondary" href="/support">サポート</a>
        </div>
      </main>
    </SiteShell>
  );
}
