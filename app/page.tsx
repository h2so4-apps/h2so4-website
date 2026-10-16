import type { Metadata } from "next";
import { SiteShell } from "./site-shell";

export const metadata: Metadata = {
  title: "H2SO4 — 小さな便利を、毎日に。",
  description:
    "H2SO4は、雲電卓（KumoCalc）やふるマネを開発する個人アプリブランドです。アプリ情報、サポート、プライバシーポリシーをご案内します。",
};

const apps = [
  {
    name: "雲電卓",
    englishName: "KumoCalc",
    description:
      "計算結果を雲に残して、次の計算に使える。数を見ながら整理できる電卓アプリです。",
    href: "/apps/kumocalc",
    icon: "123",
    className: "app-icon app-icon-cloud",
    platform: "App Storeで配信中",
    storeUrl: "https://apps.apple.com/jp/app/id6821341925",
    image: "/images/kumocalc/icon.webp",
  },
  {
    name: "ふるマネ",
    englishName: "Furumane",
    description:
      "ふるさと納税の寄付額や進み具合を、ひとつの場所で整理。わかりにくい管理を、手元でもっとシンプルにします。",
    href: "/apps/furumane",
    icon: "ふ",
    className: "app-icon app-icon-furu",
    platform: "iPhone向けに準備中",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Independent app studio</p>
            <h1 id="hero-title">
              <span>小さな便利を、</span>
              <span>毎日に。</span>
            </h1>
            <p className="hero-lead">
              H2SO4は、暮らしの中の「少し面倒」を見つけ、
              すっきり使えるアプリに変えていく個人開発ブランドです。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#apps">
                アプリを見る
              </a>
              <a className="button button-secondary" href="/support">
                サポート
              </a>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <div className="hero-mark-label">
              H<sub>2</sub>SO<sub>4</sub>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="dot dot-one" />
            <div className="dot dot-two" />
          </div>
        </section>

        <section className="apps-section section-shell" id="apps" aria-labelledby="apps-title">
          <div className="section-heading">
            <p className="eyebrow">Apps</p>
            <h2 id="apps-title">使う人の目線で、シンプルに。</h2>
            <p>公開中・開発中のアプリをご紹介します。</p>
          </div>

          <div className="app-grid">
            {apps.map((app) => (
              <article className="app-card" key={app.name}>
                {app.image ? (
                  <img className="app-icon" src={app.image} alt="雲電卓のアプリアイコン" width={92} height={92} />
                ) : (
                  <div className={app.className} aria-hidden="true">
                    {app.icon}
                  </div>
                )}
                <div className="app-card-copy">
                  <p className="app-status">{app.platform}</p>
                  <h3>{app.name}</h3>
                  <p className="app-english">{app.englishName}</p>
                  <p>{app.description}</p>
                  <div className="app-card-actions">
                    <a className="text-link" href={app.href}>
                      詳しく見る <span aria-hidden="true">→</span>
                    </a>
                    {app.storeUrl ? (
                      <a className="button button-primary kumocalc-download" href={app.storeUrl}>
                        App Storeでダウンロード
                      </a>
                    ) : (
                      <span className="store-badge" aria-label="App Store 公開準備中">
                        App Store · Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="principles section-shell" aria-labelledby="principles-title">
          <div className="section-heading compact-heading">
            <p className="eyebrow">What we value</p>
            <h2 id="principles-title">迷わず使えて、長く付き合えること。</h2>
          </div>
          <div className="principle-grid">
            <article>
              <span className="number">01</span>
              <h3>わかりやすく</h3>
              <p>説明を読まなくても、次の操作が自然にわかる画面を目指します。</p>
            </article>
            <article>
              <span className="number">02</span>
              <h3>軽やかに</h3>
              <p>必要な機能に絞り、毎日気持ちよく開ける軽さを大切にします。</p>
            </article>
            <article>
              <span className="number">03</span>
              <h3>誠実に</h3>
              <p>データの扱いと広告の有無を、できるだけ明確にお伝えします。</p>
            </article>
          </div>
        </section>

        <section className="support-callout section-shell" aria-labelledby="support-title">
          <div>
            <p className="eyebrow">Support</p>
            <h2 id="support-title">困ったときも、安心して使えるように。</h2>
            <p>
              ご質問、不具合のご報告、ご要望を受け付けています。
              各アプリのプライバシーポリシーもこちらから確認できます。
            </p>
          </div>
          <a className="button button-light" href="/support">
            サポートページへ
          </a>
        </section>
      </main>
    </SiteShell>
  );
}
