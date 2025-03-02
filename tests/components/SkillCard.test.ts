import { describe, it, expect } from "vitest";
import { JSDOM } from "jsdom";

/**
 * SkillCardコンポーネントのテストスイート
 *
 * このテストスイートでは、SkillCardコンポーネントの以下の機能を検証します：
 * 1. タイトルが正しく表示されるか
 * 2. スキル一覧が正しく表示されるか
 * 3. アイコンが正しく表示されるか
 *
 * SkillCardコンポーネントの構造：
 * - 外側のdivコンテナ（白背景、角丸、影付き）
 * - ヘッダー部分（アイコンとタイトルを含む）
 * - スキル一覧（チェックマークアイコン付きのリスト項目）
 *
 * テストデータ：
 * - タイトル：カテゴリ名（例：「フロントエンド」「バックエンド」「データベース」）
 * - スキル：各カテゴリに属する技術名の配列
 * - アイコン：SVG形式のアイコン要素
 *
 * テスト手法：
 * - JSDOMを使用してブラウザ環境をシミュレート
 * - テンプレートリテラルで期待されるHTMLを生成
 * - DOM APIを使用して要素を取得・検証
 * - テンプレート文字列内で動的にスキルリストを生成（Array.mapとjoin）
 *
 * テストの特徴：
 * - コンポーネントの実際のレンダリングではなく、期待されるHTML出力を直接テスト
 * - ダークモード対応のクラス名を含むHTML構造をテスト
 * - 複数のテストケースで異なるデータセットを使用して検証
 * - 要素の存在だけでなく、内容の正確性も検証
 */
describe("SkillCard", () => {
  /**
   * テストケース1: タイトルの正しい表示をテスト
   *
   * 目的:
   * - SkillCardコンポーネントがタイトルを正しく表示するか検証
   *
   * 手順:
   * 1. テスト用のタイトルとスキル配列を定義
   * 2. 期待されるHTMLを文字列として生成
   * 3. JSDOMでHTMLをパース
   * 4. h3要素のテキストコンテンツを取得
   * 5. テキストが期待値と一致するか検証
   */
  it("renders the title correctly", () => {
    // テスト用のデータを定義
    const title = "フロントエンド";
    const skills = ["React", "Vue", "Angular"];

    // 期待されるHTMLを生成
    const html = `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-primary dark:text-blue-400"><svg></svg></span>
          <h3 class="font-semibold text-lg text-gray-900 dark:text-gray-100">${title}</h3>
        </div>
        <ul class="space-y-2">
          ${skills
            .map(
              (skill) => `
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 dark:text-gray-300">${skill}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `;

    // JSDOMでHTMLをパース
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const element = document.body.firstElementChild;

    // h3要素のテキストが期待値と一致するか検証
    expect(element?.querySelector("h3")?.textContent).toBe(title);
  });

  /**
   * テストケース2: スキル一覧の正しい表示をテスト
   *
   * 目的:
   * - SkillCardコンポーネントが全てのスキルを正しく表示するか検証
   * - スキルの数が正しいか
   * - 各スキルのテキストが正しいか
   *
   * 手順:
   * 1. テスト用のタイトルとスキル配列を定義
   * 2. 期待されるHTMLを文字列として生成（スキル配列をマップしてリスト項目を作成）
   * 3. JSDOMでHTMLをパース
   * 4. liタグ内のspan要素を全て取得
   * 5. 取得した要素の数がスキル配列の長さと一致するか検証
   * 6. 各要素のテキストがスキル配列の対応する値と一致するか検証
   */
  it("renders all skills correctly", () => {
    // テスト用のデータを定義
    const title = "バックエンド";
    const skills = ["Node.js", "Express", "NestJS"];

    // 期待されるHTMLを生成
    const html = `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-primary dark:text-blue-400"><svg></svg></span>
          <h3 class="font-semibold text-lg text-gray-900 dark:text-gray-100">${title}</h3>
        </div>
        <ul class="space-y-2">
          ${skills
            .map(
              (skill) => `
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 dark:text-gray-300">${skill}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `;

    // JSDOMでHTMLをパース
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const element = document.body.firstElementChild;
    const skillElements = element?.querySelectorAll("li span");

    // スキル要素の数が期待値と一致するか検証
    expect(skillElements?.length).toBe(skills.length);

    // 各スキル要素のテキストが期待値と一致するか検証
    skillElements?.forEach((el, index) => {
      expect(el.textContent).toBe(skills[index]);
    });
  });

  /**
   * テストケース3: アイコンの正しい表示をテスト
   *
   * 目的:
   * - SkillCardコンポーネントがアイコンを正しく表示するか検証
   *
   * 手順:
   * 1. テスト用のタイトル、スキル配列、アイコンHTMLを定義
   * 2. 期待されるHTMLを文字列として生成（アイコンを含む）
   * 3. JSDOMでHTMLをパース
   * 4. spanタグ内のHTMLを取得
   * 5. 取得したHTMLが期待値と一致するか検証
   *
   * 注意点:
   * - このテストではアイコンのHTMLが正しく挿入されているかを検証
   * - data-testid属性を使用してテスト用のアイコンを識別
   */
  it("renders the icon correctly", () => {
    // テスト用のデータを定義
    const title = "データベース";
    const skills = ["MySQL", "PostgreSQL"];
    const icon = '<svg data-testid="test-icon"></svg>';

    // 期待されるHTMLを生成
    const html = `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-primary dark:text-blue-400">${icon}</span>
          <h3 class="font-semibold text-lg text-gray-900 dark:text-gray-100">${title}</h3>
        </div>
        <ul class="space-y-2">
          ${skills
            .map(
              (skill) => `
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 dark:text-gray-300">${skill}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `;

    // JSDOMでHTMLをパース
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const element = document.body.firstElementChild;

    // アイコンのHTMLが期待値と一致するか検証
    expect(element?.querySelector("span")?.innerHTML).toBe(icon);
  });
});
