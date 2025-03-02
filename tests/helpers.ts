import { render } from "@testing-library/dom";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export function renderComponent(
  componentPath: string,
  props: Record<string, any> = {}
) {
  // コンポーネントのパスを取得
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fullPath = path.resolve(__dirname, "..", componentPath);

  // コンポーネントのHTMLを読み込む
  let html = "";
  try {
    html = fs.readFileSync(fullPath, "utf-8");
  } catch (error) {
    console.error(`Failed to read component at ${fullPath}:`, error);
    return null;
  }

  // プロパティを置換
  Object.entries(props).forEach(([key, value]) => {
    // 配列の場合は特別な処理
    if (Array.isArray(value)) {
      // 配列の場合、繰り返し部分を処理
      const regex = new RegExp(
        `{${key}.map\\(.*?\\s*=>\\s*\\((.*?)\\)\\)}`,
        "s"
      );
      const match = html.match(regex);

      if (match) {
        const template = match[1];
        const items = value
          .map((item: any) => {
            let itemHtml = template;
            // 配列の各アイテムを置換
            if (typeof item === "string") {
              itemHtml = itemHtml.replace(new RegExp(`{.*?}`, "g"), item);
            }
            return itemHtml;
          })
          .join("");

        html = html.replace(match[0], items);
      }
    } else if (typeof value === "string") {
      // 文字列の場合は単純に置換
      html = html.replace(new RegExp(`{${key}}`, "g"), value);
    }
  });

  // HTMLをレンダリング
  return render(`<div id="root">${html}</div>`).container.firstElementChild;
}
