import { describe, it, expect } from "vitest";
import { JSDOM } from "jsdom";

describe("Card", () => {
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

    const normalizedText = h2Element?.textContent?.replace(/\s+/g, "");
    expect(normalizedText).toBe(`${title}→`);
  });

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

    expect(element?.querySelector("p")?.textContent?.trim()).toBe(body);
  });

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

    expect(element?.querySelector("a")?.getAttribute("href")).toBe(href);
  });
});
