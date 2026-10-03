"use strict";

// This demo is deterministic. It never sends kitchen data or invokes a model.
const english = {
  footerPrivacy: "Privacy",
  footerSupport: "Help",
  skip: "Skip to content",
  navAgent: "How it works",
  navToday: "Everyday cooking",
  navQuestions: "Questions",
  joinBeta: "Try the beta",
  heroLine1: "From what you have",
  heroLine2: "to what you cook.",
  heroCopy:
    "Let Mise organize ingredients, plan meals and fill your shopping list. When it needs your input, it stops to ask.",
  heroCta: "Try the Android beta",
  heroDemo: "See how Mise helps",
  heroNote:
    "Android beta available. Manual tools are free to use; AI features need an invite code.",
  demoLabel: "TRY AN EXAMPLE",
  demoCaption: "Interactive demo · not live AI",
  agentSubtitle: "A small plan for tonight.",
  contextBadge: "Using your ingredients",
  scenarioQuick: "Dinner in 20",
  scenarioFresh: "Use it while fresh",
  scenarioShop: "Buy only what's missing",
  contextTitle: "WHAT IS AT HOME",
  sampleData: "Sample ingredients",
  planTitle: "A MEAL TO MAKE",
  planToggle: "See the next step",
  actionsTitle: "REVIEW BEFORE SAVING",
  confirmDemo: "Confirm in this demo",
  demoConfirmed: "Example confirmed. Your real kitchen data is unchanged.",
  demoFootnote:
    "A workflow illustrated with sample ingredients. This demo makes no AI calls and never reads or changes your data. Try the real workflow in the app.",
  stripTitle: "Start with your ingredients and preferences.",
  stripInventory: "What you have",
  stripTime: "Time for tonight",
  stripFresh: "What's fresh",
  stripChoice: "Your choices",
  approachEyebrow: "YOUR KITCHEN ASSISTANT",
  approachTitle: "Tell Mise what you need.\nWork through it together.",
  approachCopy:
    "Start with a message. Mise checks relevant records, suggests the next steps and asks when it needs your input.",
  step1Title: "Check what is at home",
  step1Copy:
    "Start with quantities, ingredients to use soon, and what you need from this meal. Make the suggestion fit the day you're actually having.",
  step1Note: "Based on your recorded stock",
  step2Title: "Plan food that fits your day",
  step2Copy:
    "A dish that fits, ingredients you can use, and anything that's missing. The reasons behind the choice should be clear, too.",
  step2Note: "Servings, preferences and time",
  step3Title: "Keep track of every change",
  step3Copy:
    "Review stock entries, menus and stock deductions before saving. Inspect results and undo supported changes. Automatic saving of recipes and shopping lists is adjustable in Settings.",
  step3Note: "You approve important changes",
  todayEyebrow: "SOMETHING USEFUL, RIGHT NOW",
  todayTitle: "Groceries, dinner and the week ahead.",
  todayCopy:
    "Three everyday ways to start with your kitchen. Or tell Mise exactly what you want to get done.",
  cap1Title: "Groceries home. Kitchen updated.",
  cap1Copy:
    "Take a photo or describe your groceries. Review names, quantities and storage locations, then save stock and update the matching shopping items.",
  receipt1: "Tomatoes × 3",
  receipt2: "Eggs × 6",
  receiptResult: "Ready for your review",
  cap2Title: "Look in the fridge. Find dinner.",
  cap2Copy:
    "Start with ingredients to use soon, your time and serving needs. Choose a menu first; review quantities and deduct stock after you actually cook.",
  recipeVisual: "Your ingredients.\nTonight's menu.",
  cap3Title: "Plan a meal around your goals.",
  cap3Copy:
    "Tell Mise the dates, meals, servings and food preferences you have in mind. Add nutrition targets if you have them. Review estimates, save your menu and add missing ingredients to your list.",
  shoppingHave: "Eggs, already at home",
  shoppingNeed: "Tomatoes, need 2 more",
  phaseCurrent: "IN BETA",
  phaseCurrentCopy: "Stock, weekly menus, AI assistance and local backups",
  phaseNext: "BEING REFINED",
  phaseNextCopy: "More natural conversations and more reliable complex tasks",
  phaseLater: "UP NEXT",
  phaseLaterCopy: "Accounts and automatic cloud sync",
  trustEyebrow: "USEFUL HELP. CLEAR EXPECTATIONS.",
  trustTitle: "Know what's happening\nat every step.",
  trust1Title: "Review the important changes.",
  trust1Copy:
    "Review changes before saving and inspect the record afterwards. Undo supported actions such as adding stock or saving recipes. If later edits conflict, the app explains why it cannot safely undo them.",
  trust2Title: "Local records. On-demand AI.",
  trust2Copy:
    "Core inventory and recipe records live on your phone. When you use AI, relevant text, images, or ingredient information is sent to the server and model service for processing.",
  trust3Title: "Usage you can account for.",
  trust3Copy:
    "View AI credits and usage in the app. Multi-step tasks can make several AI calls; undoing saved changes does not refund credits already used. The server records usage and briefly caches results for retries.",
  faqTitle: "Before you start.",
  faq1Question: "What can the agent do now?",
  faq1Answer:
    "Mise can check stock, create or edit recipes, plan meals and prepare shopping lists. Inspect action records and undo supported changes. Keep the app in the foreground while tasks run; interrupted tasks can resume. Nutrition values are estimates, not a full-day assessment. This website demo uses sample data and makes no AI calls.",
  faq2Question: "How do I get an invite code?",
  faq2Answer:
    "The maintainer is inviting a small group of testers. Downloading the APK doesn't provide an invite code. Contact the maintainer through the project feedback page to ask about the beta.",
  feedbackLink: "Project feedback ↗",
  faq3Question: "Does the beta cost anything?",
  faq3Answer:
    "There is no top-up or payment flow currently. AI features use beta credits. The initial allowance and expiry depend on your invite; check the invitation and your balance in the app. Points are deducted according to the feature rules when it succeeds. Contact the maintainer if you run out; manual features remain available.",
  faq4Question: "Can I restore my kitchen on another phone?",
  faq4Answer:
    "Export a local backup in Settings and transfer the file to another phone to restore it. Files are unencrypted; keep them private. Restoring replaces data on the destination phone. Invite codes and AI credits are excluded. Accounts and automatic cloud sync are not available yet.",
  faq5Question: "Is there an iPhone version?",
  faq5Answer:
    "This page currently offers the Android beta APK. There is no public iOS download yet. We'll update this page when one is available.",
  downloadEyebrow: "GET STARTED",
  downloadTitle: "Make the next meal\na little easier.",
  downloadCopy:
    "Download the Android beta and start with the ingredients at home. Enter an invite code when you want AI assistance. Install updates over the existing app to keep your data.",
  androidBeta: "ANDROID BETA",
  downloadApk: "Download Android APK",
  releaseDetails: "Read the release notes ↗",
  inviteRequired: "Invite required for AI",
  iosStatus: "No public iPhone download yet",
  footerCopy: "Good food. A little less kitchen friction.",
  footerFeedback: "Feedback ↗",
};

const scenarios = {
  quick: {
    zh: {
      prompt: "今天有点累，家里的食材能做什么？",
      ingredients: [
        ["菠菜", "200 g · 优先用"],
        ["鸡蛋", "4 个"],
        ["米饭", "1 碗"],
      ],
      reason:
        "菠菜可以优先用，鸡蛋和米饭也都有。先做一道简单的，不用再出门买菜。",
      meal: "菠菜鸡蛋炒饭",
      tags: "约 20 分钟 · 1 人份 · 无需添购",
      action: "保存这份菜谱；做饭时再核对实际食材用量。",
    },
    en: {
      prompt: "A long day. What could I make with what's at home?",
      ingredients: [
        ["Spinach", "200 g · use soon"],
        ["Eggs", "4 available"],
        ["Rice", "1 bowl"],
      ],
      reason:
        "The spinach could be used first, and eggs and rice are already here. Let's keep dinner simple, with no extra trip to the store.",
      meal: "Spinach & egg fried rice",
      tags: "About 20 min · Serves 1 · No shopping",
      action:
        "Save the recipe. Review the actual ingredient amounts when you log the meal.",
    },
  },
  fresh: {
    zh: {
      prompt: "先看看快到期的食材，今晚尽量用上。",
      ingredients: [
        ["菠菜", "200 g · 明天到期"],
        ["豆腐", "1 盒 · 后天到期"],
        ["米饭", "2 碗"],
      ],
      reason:
        "先安排菠菜和豆腐，搭配已有的米饭。两样临期食材放在一顿里，减少剩下的零散食材。",
      meal: "菠菜豆腐盖饭",
      tags: "约 25 分钟 · 2 人份 · 优先用临期",
      action: "保存这份两人餐方案；食材是否新鲜仍需做饭前检查。",
    },
    en: {
      prompt: "What should we use soon? Let's start there tonight.",
      ingredients: [
        ["Spinach", "200 g · due tomorrow"],
        ["Tofu", "1 pack · due in 2 days"],
        ["Rice", "2 bowls"],
      ],
      reason:
        "Start with the spinach and tofu, alongside the rice you have. Using both in one meal leaves fewer small leftovers to plan around.",
      meal: "Spinach & tofu rice bowl",
      tags: "About 25 min · Serves 2 · Use soon",
      action:
        "Save this plan for two. Check that the ingredients are still fresh before cooking.",
    },
  },
  shop: {
    zh: {
      prompt: "想吃番茄鸡蛋饭，帮我看看还缺什么。",
      ingredients: [
        ["番茄", "还缺 2 个"],
        ["鸡蛋", "4 个 · 已有"],
        ["米饭", "2 碗 · 已有"],
      ],
      reason:
        "鸡蛋和米饭够用。采购单只需要补上番茄，家里已有的食材就不重复买了。",
      meal: "番茄鸡蛋饭",
      tags: "约 20 分钟 · 2 人份 · 补买 1 项",
      action: "把「番茄 2 个」加入示例采购计划；真实购物单不会改变。",
    },
    en: {
      prompt: "Tomato and egg rice sounds good. What do I need?",
      ingredients: [
        ["Tomatoes", "Need 2 more"],
        ["Eggs", "4 · already have"],
        ["Rice", "2 bowls · have"],
      ],
      reason:
        "There's enough rice and eggs. Only tomatoes need to go on the list, so you don't buy what is already in the kitchen.",
      meal: "Tomato & egg rice",
      tags: "About 20 min · Serves 2 · Buy 1 item",
      action:
        "Add 2 tomatoes to the example shopping plan. Your real shopping list stays unchanged.",
    },
  },
};

const copyElements = [...document.querySelectorAll("[data-i18n]")];
const chinese = Object.fromEntries(
  copyElements.map((el) => [
    el.dataset.i18n,
    [...el.childNodes]
      .map((node) => (node.nodeName === "BR" ? "\n" : node.textContent))
      .join(""),
  ]),
);
chinese.demoConfirmed = "示例已确认，真实厨房数据没有改变。";
const ariaCopy = {
  zh: { navLabel: "主导航", scenarioLabel: "选择演示场景" },
  en: { navLabel: "Main navigation", scenarioLabel: "Choose a demo scenario" },
};
let language = "zh";
try {
  const saved = localStorage.getItem("mise-language");
  language =
    saved === "en" || saved === "zh"
      ? saved
      : navigator.language.startsWith("zh")
        ? "zh"
        : "en";
} catch {
  /* The page also works when browser storage is disabled. */
}
let scenario = "quick";
let expanded = false;
let confirmed = false;
let release = null;
const fallbackReleaseNotes = {
  zh: document.querySelector("[data-release-note]").textContent,
  en: "Weekly menus, reviewed Agent edits, local backup/restore and an expiry brief. Confirm actual use before deducting stock. Manual tools use no AI credits; keep unencrypted backups private. Invite required; install over the existing app to retain data.",
};
const $ = (id) => document.getElementById(id);
const t = (key) =>
  (language === "zh" ? chinese : english)[key] ?? chinese[key] ?? "";

function setCopy(element, value) {
  const lines = value.split("\n");
  element.replaceChildren(
    ...lines.flatMap((line, index) =>
      index
        ? [document.createElement("br"), document.createTextNode(line)]
        : [document.createTextNode(line)],
    ),
  );
}

function renderScenario() {
  const data = scenarios[scenario][language];
  $("demoPrompt").textContent = data.prompt;
  $("demoReason").textContent = data.reason;
  $("demoMeal").textContent = data.meal;
  $("demoTags").textContent = data.tags;
  $("demoAction").textContent = data.action;
  $("demoIngredients").replaceChildren(
    ...data.ingredients.map(([name, detail]) => {
      const item = document.createElement("span");
      const note = document.createElement("small");
      item.append(document.createTextNode(name));
      note.textContent = detail;
      item.append(note);
      return item;
    }),
  );
  document
    .querySelectorAll("[data-scenario]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.scenario === scenario),
      ),
    );
  $("planToggle").setAttribute("aria-expanded", String(expanded));
  $("actionPanel").hidden = !expanded;
  $("confirmDemo").disabled = confirmed;
  $("demoStatus").textContent = confirmed ? t("demoConfirmed") : "";
}

function renderRelease() {
  document.querySelectorAll("[data-release-note]").forEach((el) => {
    el.textContent = (release?.releaseNotes ?? fallbackReleaseNotes)[language];
  });
  if (!release) return;
  document.querySelectorAll("[data-apk-link]").forEach((link) => {
    link.href = release.apkUrl;
  });
  document.querySelectorAll("[data-release-link]").forEach((link) => {
    link.href = release.releaseUrl;
  });
  document.querySelectorAll("[data-release-meta]").forEach((el) => {
    el.textContent = `v${release.version} · build ${release.build} · ${(release.sizeBytes / 1000000).toFixed(1)} MB`;
  });
}

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  try {
    localStorage.setItem("mise-language", language);
  } catch {
    /* Optional preference. */
  }
  copyElements.forEach((el) => setCopy(el, t(el.dataset.i18n)));
  document
    .querySelectorAll("[data-i18n-aria]")
    .forEach((el) =>
      el.setAttribute("aria-label", ariaCopy[language][el.dataset.i18nAria]),
    );
  $("languageToggle").textContent = language === "zh" ? "EN" : "中文";
  $("languageToggle").setAttribute(
    "aria-label",
    language === "zh" ? "Switch to English" : "切换到中文",
  );
  const title =
    language === "zh"
      ? "Mise 食序 — 整理食材，安排每天的饭"
      : "Mise — Plan meals with what you have";
  const description =
    language === "zh"
      ? "Mise 食序帮你整理食材、安排菜单、补齐购物清单。用厨房助手处理日常琐事，保留每一步的查看与确认。"
      : "Keep track of ingredients, plan meals and prepare a shopping list with Mise. See what your kitchen assistant does and stay in control.";
  document.title = title;
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = title;
  document.querySelector('meta[property="og:description"]').content =
    description;
  renderScenario();
  renderRelease();
}

$("languageToggle").addEventListener("click", () =>
  applyLanguage(language === "zh" ? "en" : "zh"),
);
document.querySelectorAll("[data-scenario]").forEach((button) =>
  button.addEventListener("click", () => {
    scenario = button.dataset.scenario;
    expanded = false;
    confirmed = false;
    renderScenario();
  }),
);
$("planToggle").addEventListener("click", () => {
  expanded = !expanded;
  renderScenario();
});
$("confirmDemo").addEventListener("click", () => {
  confirmed = true;
  renderScenario();
});
$("year").textContent = new Date().getFullYear();
applyLanguage(language);

// Publish the APK first, then update this manifest. Never point visitors to a queued build.
fetch("release.json", { cache: "no-cache" })
  .then((response) => {
    if (!response.ok) throw new Error("Release unavailable");
    return response.json();
  })
  .then((data) => {
    const assetRoot =
      "https://github.com/zyfeleven/smartKitchen-website/releases/download/";
    const releaseRoot =
      "https://github.com/zyfeleven/smartKitchen-website/releases/tag/";
    const isMirrorAsset =
      window.location.origin === "https://8.217.241.184" &&
      /^https:\/\/8\.217\.241\.184\/mise-site\/downloads\/mise-v\d+\.\d+\.\d+-build\d+-[a-z0-9-]+\.apk$/.test(data.apkUrl);
    if (
      typeof data.apkUrl !== "string" ||
      (!data.apkUrl.startsWith(assetRoot) && !isMirrorAsset) ||
      !data.apkUrl.endsWith(".apk") ||
      typeof data.releaseUrl !== "string" ||
      !data.releaseUrl.startsWith(releaseRoot) ||
      typeof data.version !== "string" ||
      !/^\d+\.\d+\.\d+$/.test(data.version) ||
      !Number.isSafeInteger(data.build) ||
      data.build <= 0 ||
      !Number.isSafeInteger(data.sizeBytes) ||
      data.sizeBytes <= 0 ||
      typeof data.releaseNotes?.zh !== "string" ||
      typeof data.releaseNotes?.en !== "string"
    )
      return;
    release = data;
    renderRelease();
  })
  .catch(() => {
    // The static HTML keeps a verified download available during a network failure.
    renderRelease();
  });
