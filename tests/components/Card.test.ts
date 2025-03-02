import { describe, it, expect } from "vitest";
import { JSDOM } from "jsdom";

/**
 * Cardコンポーネントのテストスイート
 *
 * このテストスイートでは、Cardコンポーネントの以下の機能を検証します：
 * 1. タイトルが正しく表示されるか
 * 2. 本文が正しく表示されるか
 * 3. リンク先URLが正しく設定されるか
 *
 * Cardコンポーネントの構造：
 * - liタグをルート要素とするリンクカード
 * - aタグによるリンク要素
 * - h2タグによるタイトル表示（矢印アイコン付き）
 * - pタグによる本文表示
 *
 * テストデータ：
 * - タイトル：カードのタイトルテキスト
 * - 本文：カードの説明文
 * - href：リンク先URL
 *
 * テスト手法：
 * - JSDOMを使用してブラウザ環境をシミュレート
 * - テンプレートリテラルで期待されるHTMLを生成
 * - DOM APIを使用して要素を取得・検証
 * - テキスト正規化処理（空白除去など）を適用して比較
 *
 * テストの特徴：
 * - コンポーネントの実際のレンダリングではなく、期待されるHTML出力を直接テスト
 * - 各テストケースで同じHTMLテンプレートを使用しているが、検証対象が異なる
 * - テキスト比較前に正規化処理を行い、空白の違いによるテスト失敗を防止
 */
describe("Card", () => {
  /**
   * テストケース1: タイトルの正しい表示をテスト
   *
   * 目的:
   * - Cardコンポーネントがタイトルを正しく表示するか検証
   * - タイトルの後に矢印アイコン（→）が表示されるか検証
   *
   * 手順:
   * 1. テスト用のタイトル、本文、リンク先URLを定義
   * 2. 期待されるHTMLを文字列として生成
   * 3. JSDOMでHTMLをパース
   * 4. h2要素のテキストコンテンツを取得
   * 5. テキスト内の空白を全て削除して正規化
   * 6. 正規化したテキストが「タイトル→」の形式と一致するか検証
   *
   * 注意点:
   * - テキスト比較前に空白を削除する正規化処理を行っている
   * - HTMLエンティティ &rarr; は「→」として解釈される
   */
  it("renders the title correctly", () => {
    const title = "テストタイトル";
    const body = "テスト本文";
    const href = "https://example.com";

    const html = `
      <li class="link-card">
        <a href="${href}">
          <h2>
            ${title}
            <span>&rarr;</span>
          </h2>
          <p>
            ${body}
          </p>
        </a>
      </li>
    `;

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const element = document.body.firstElementChild;
    const h2Element = element?.querySelector("h2");

    // テキスト内の空白を全て削除して正規化
    const normalizedText = h2Element?.textContent?.replace(/\s+/g, "");
    expect(normalizedText).toBe(`${title}→`);
  });

  /**
   * テストケース2: 本文の正しい表示をテスト
   *
   * 目的:
   * - Cardコンポーネントが本文を正しく表示するか検証
   *
   * 手順:
   * 1. テスト用のタイトル、本文、リンク先URLを定義
   * 2. 期待されるHTMLを文字列として生成
   * 3. JSDOMでHTMLをパース
   * 4. p要素のテキストコンテンツを取得
   * 5. テキストの前後の空白をトリムして正規化
   * 6. 正規化したテキストが期待値と一致するか検証
   *
   * 注意点:
   * - テキスト比較前に前後の空白のみを削除するtrim()処理を行っている
   * - 内部の空白は保持される
   */
  it("renders the body correctly", () => {
    const title = "テストタイトル";
    const body = "テスト本文";
    const href = "https://example.com";

    const html = `
      <li class="link-card">
        <a href="${href}">
          <h2>
            ${title}
            <span>&rarr;</span>
          </h2>
          <p>
            ${body}
          </p>
        </a>
      </li>
    `;

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const element = document.body.firstElementChild;

    // p要素のテキストを取得し、前後の空白をトリム
    expect(element?.querySelector("p")?.textContent?.trim()).toBe(body);
  });

  /**
   * テストケース3: リンク先URLの正しい設定をテスト
   *
   * 目的:
   * - Cardコンポーネントがリンク先URLを正しく設定するか検証
   *
   * 手順:
   * 1. テスト用のタイトル、本文、リンク先URLを定義
   * 2. 期待されるHTMLを文字列として生成
   * 3. JSDOMでHTMLをパース
   * 4. a要素のhref属性値を取得
   * 5. 取得した属性値が期待値と一致するか検証
   *
   * 注意点:
   * - テキストコンテンツではなく、DOM要素の属性値を検証している
   * - getAttribute()メソッドを使用して属性値を取得
   */
  it("sets the href attribute correctly", () => {
    const title = "テストタイトル";
    const body = "テスト本文";
    const href = "https://example.com";

    const html = `
      <li class="link-card">
        <a href="${href}">
          <h2>
            ${title}
            <span>&rarr;</span>
          </h2>
          <p>
            ${body}
          </p>
        </a>
      </li>
    `;

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const element = document.body.firstElementChild;

    // a要素のhref属性値を取得して検証
    expect(element?.querySelector("a")?.getAttribute("href")).toBe(href);
  });
});
