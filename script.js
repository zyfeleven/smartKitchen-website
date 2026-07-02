const translations = {
  zh: {
    skip: "跳到主要内容", navFeatures: "功能", navWorkflow: "工作流", navPrivacy: "隐私",
    heroEyebrow: "本地优先的智能厨房", heroCopy: "把库存、菜谱、做饭和购物连成一个清晰、可控的厨房工作流。",
    explore: "探索功能", comingSoon: "即将上线", downloadApk: "下载 APK · 65 MB", proofLocal: "本地数据", proofBilingual: "中英双语", proofConfirm: "操作前确认", scroll: "向下浏览",
    overviewEyebrow: "一个闭环，而不是五个孤立工具", overviewTitle: "知道有什么，决定做什么，只买真正缺的。",
    overviewCopy: "Mise 让每次入库、做饭和采购都共享同一份上下文。批次、保质期、菜谱用量和购物缺口彼此关联，同时保留最终确认权。",
    statFlows: "个核心流程", statLanguages: "种界面语言", statDatabase: "个本地数据源",
    inventoryEyebrow: "批次化库存", inventoryTitle: "同一种食材，也保留每一批的差异。",
    inventoryCopy: "数量累加而不是覆盖。每批食材独立记录购买日期、过期日期、位置和状态，临期提醒与库存搜索直接可用。",
    inventoryPoint1: "独立库存批次与保质期", inventoryPoint2: "按位置、分类与临期状态筛选", inventoryPoint3: "批量管理、移动和删除",
    inboundEyebrow: "智能入库", inboundTitle: "拍照、说话或输入，先识别，再由你确认。",
    inboundCopy: "AI 把自然语言和照片整理成可编辑字段，推荐分类、位置和保质期。识别失败时仍可回到完整手动表单。",
    inboundPoint1: "照片、文字和组合输入", inboundPoint2: "语音转文字", inboundPoint3: "AI 只预填，不自动写入",
    recipeEyebrow: "菜谱与做饭", recipeTitle: "菜谱独立保存，做饭时再核对库存变化。",
    recipeCopy: "通过标签和搜索快速找到菜谱，调整份数后查看建议扣减。库存食材删除不会破坏菜谱，做饭记录也可追溯。",
    recipePoint1: "可编辑的食材、步骤与标签", recipePoint2: "标签筛选、搜索与批量管理", recipePoint3: "份数换算、库存预览与做饭历史",
    shoppingEyebrow: "购物闭环", shoppingTitle: "从菜谱计算缺口，买完直接回填库存。",
    shoppingCopy: "选择多个菜谱后，清单会扣除现有库存，只保留真正需要购买的数量。完成采购后可将已买项目重新入库。",
    shoppingPoint1: "基于库存计算采购缺口", shoppingPoint2: "按卖场区域分组并勾选", shoppingPoint3: "一键回填已购买食材",
    workflowEyebrow: "从入库到下一次采购", workflowTitle: "每一步都让下一步更简单。",
    step1Title: "入库", step1Copy: "记录批次与日期", step2Title: "选菜谱", step2Copy: "按标签快速筛选", step3Title: "做饭", step3Copy: "确认库存扣减", step4Title: "采购", step4Copy: "只买缺少的数量", step5Title: "回填", step5Copy: "让库存重新准确",
    privacyEyebrow: "隐私与可控性", privacyTitle: "你的厨房数据，默认留在你的设备上。",
    privacyCopy: "库存、菜谱、购物清单和做饭记录保存在本地 SQLite。后端不保存业务数据，只在需要 AI 识别时处理请求；API 密钥也不会打包进 App。",
    localTitle: "本地优先", localCopy: "核心业务数据保存在设备 SQLite 中。", backendTitle: "无状态后端", backendCopy: "后端只代理 AI 请求，不维护厨房数据库。", controlTitle: "用户确认", controlCopy: "AI 输出始终先进入可编辑预览。",
    closingEyebrow: "Mise · 食序", closingTitle: "让厨房信息保持有序，让决定变得更轻松。", footerCopy: "为更清晰的日常厨房流程而构建。",
    inventoryAlt: "Mise 库存界面", inboundAlt: "Mise 智能入库弹窗", recipesAlt: "Mise 菜谱界面", cookAlt: "Mise 做饭界面", shoppingAlt: "Mise 购物界面"
  },
  en: {
    skip: "Skip to main content", navFeatures: "Features", navWorkflow: "Workflow", navPrivacy: "Privacy",
    heroEyebrow: "A local-first smart kitchen", heroCopy: "Connect inventory, recipes, cooking, and shopping in one clear, controlled kitchen workflow.",
    explore: "Explore features", comingSoon: "Coming soon", downloadApk: "Download APK · 65 MB", proofLocal: "Local data", proofBilingual: "Bilingual", proofConfirm: "Confirm before action", scroll: "Scroll to explore",
    overviewEyebrow: "One loop, not five disconnected tools", overviewTitle: "Know what you have. Decide what to cook. Buy only what is missing.",
    overviewCopy: "Mise gives every inbound item, meal, and shopping trip the same context. Batches, expiry dates, recipe quantities, and shopping gaps stay connected while you retain final control.",
    statFlows: "core flows", statLanguages: "interface languages", statDatabase: "local source of truth",
    inventoryEyebrow: "Batch-aware inventory", inventoryTitle: "Keep every batch distinct, even for the same ingredient.",
    inventoryCopy: "Quantities accumulate instead of being overwritten. Each batch keeps its own purchase date, expiry date, location, and status, with search and urgent filters built in.",
    inventoryPoint1: "Independent batches and expiry dates", inventoryPoint2: "Filter by location, category, or urgency", inventoryPoint3: "Batch management, moving, and deletion",
    inboundEyebrow: "Smart inbound", inboundTitle: "Take a photo, speak, or type. Review before saving.",
    inboundCopy: "AI turns natural language and photos into editable fields, then suggests categories, locations, and shelf life. Manual entry remains available when recognition fails.",
    inboundPoint1: "Photo, text, and combined input", inboundPoint2: "Speech to text", inboundPoint3: "AI prefills but never saves automatically",
    recipeEyebrow: "Recipes and cooking", recipeTitle: "Recipes stay independent. Inventory changes happen when you cook.",
    recipeCopy: "Find recipes by tag or search, scale servings, and review suggested deductions. Deleting inventory never damages recipes, and cooking history stays traceable.",
    recipePoint1: "Editable ingredients, steps, and tags", recipePoint2: "Tag filters, search, and batch management", recipePoint3: "Serving scale, inventory preview, and history",
    shoppingEyebrow: "The shopping loop", shoppingTitle: "Calculate gaps from recipes, then restock what you bought.",
    shoppingCopy: "Choose multiple recipes and subtract what is already in stock. The list keeps only missing quantities, and purchased items can flow straight back into inventory.",
    shoppingPoint1: "Calculate purchase gaps from inventory", shoppingPoint2: "Group and check off by store aisle", shoppingPoint3: "Restock purchased ingredients",
    workflowEyebrow: "From inbound to the next shop", workflowTitle: "Each step makes the next one easier.",
    step1Title: "Add stock", step1Copy: "Record batches and dates", step2Title: "Pick recipes", step2Copy: "Filter quickly by tag", step3Title: "Cook", step3Copy: "Confirm inventory use", step4Title: "Shop", step4Copy: "Buy only the gap", step5Title: "Restock", step5Copy: "Keep inventory accurate",
    privacyEyebrow: "Privacy and control", privacyTitle: "Your kitchen data stays on your device by default.",
    privacyCopy: "Inventory, recipes, shopping lists, and cooking history live in local SQLite. The backend stores no business data and handles requests only when AI recognition is needed. API keys are never bundled in the app.",
    localTitle: "Local first", localCopy: "Core business data lives in SQLite on the device.", backendTitle: "Stateless backend", backendCopy: "The backend proxies AI requests without a kitchen database.", controlTitle: "User confirmation", controlCopy: "AI output always enters an editable preview first.",
    closingEyebrow: "Mise · 食序", closingTitle: "Keep kitchen information ordered and everyday decisions lighter.", footerCopy: "Built for a clearer everyday kitchen workflow.",
    inventoryAlt: "Mise inventory screen", inboundAlt: "Mise smart inbound sheet", recipesAlt: "Mise recipes screen", cookAlt: "Mise cooking screen", shoppingAlt: "Mise shopping screen"
  }
};

const toggle = document.querySelector("#languageToggle");
const label = document.querySelector("#languageLabel");
const year = document.querySelector("#year");
let language = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = translations[language][element.dataset.i18nAlt];
    if (value) element.alt = value;
  });
  document.querySelectorAll("[data-app-image]").forEach((image) => {
    const suffix = language === "en" ? "-en" : "";
    image.src = `assets/${image.dataset.appImage}${suffix}.png`;
  });
  label.textContent = language === "zh" ? "EN" : "中文";
  toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  document.title = language === "zh" ? "Mise 食序 — 智能厨房工作流" : "Mise 食序 — A smarter kitchen workflow";
}

toggle.addEventListener("click", () => applyLanguage(language === "zh" ? "en" : "zh"));
year.textContent = new Date().getFullYear();
applyLanguage(language);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

window.addEventListener("load", () => {
  if (window.lucide) window.lucide.createIcons();
});
