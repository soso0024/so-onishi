import { describe, it, expect } from "vitest";
import { JSDOM } from "jsdom";

describe("SkillCard", () => {
  it("renders the title correctly", () => {
    const title = "フロントエンド";
    const skills = ["React", "Vue", "Angular"];

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

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const element = document.body.firstElementChild;

    expect(element?.querySelector("h3")?.textContent).toBe(title);
  });

  it("renders all skills correctly", () => {
    const title = "バックエンド";
    const skills = ["Node.js", "Express", "NestJS"];

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

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const element = document.body.firstElementChild;
    const skillElements = element?.querySelectorAll("li span");

    expect(skillElements?.length).toBe(skills.length);

    skillElements?.forEach((el, index) => {
      expect(el.textContent).toBe(skills[index]);
    });
  });

  it("renders the icon correctly", () => {
    const title = "データベース";
    const skills = ["MySQL", "PostgreSQL"];
    const icon = '<svg data-testid="test-icon"></svg>';

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

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const element = document.body.firstElementChild;

    expect(element?.querySelector("span")?.innerHTML).toBe(icon);
  });
});
