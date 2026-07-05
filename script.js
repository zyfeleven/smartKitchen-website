const translations = {
  zh: {
    skip: "跳到主要内容", navFeatures: "功能", navWorkflow: "工作流", navPrivacy: "隐私",
    heroEyebrow: "手机里的厨房小助手", heroCopy: "记录库存、翻看菜谱、做饭时核对用量、缺什么就添到购物单——都在一个 App 里，不用来回切换。",
    explore: "探索功能", comingSoon: "即将上线", downloadApk: "下载 APK · 65 MB", proofLocal: "本地数据", proofBilingual: "中英双语", proofConfirm: "操作前确认", scroll: "向下浏览",
    overviewEyebrow: "库存、菜谱、购物，本来就该是一回事", overviewTitle: "先看看家里还有什么，再决定今天吃什么，购物单会自己排除已经有的。",
    overviewCopy: "入库、做饭、买菜这几件事，在 Mise 里是互相通的：这批食材什么时候过期、这道菜要用多少、购物单上还缺什么，都对得上号——但要不要这么做，还是你说了算。",
    statFlows: "个环节", statLanguages: "种语言", statDatabase: "部手机就够",
    inventoryEyebrow: "库存不糊涂", inventoryTitle: "同一样食材，这次买的和上次买的，分开算。",
    inventoryCopy: "再买一次同样的食材，数量是加上去，不是盖过去。每一批都记着自己的购买日期、保质期、存放位置，快过期了会提醒你，找东西也能直接搜。",
    inventoryPoint1: "独立库存批次与保质期", inventoryPoint2: "按位置、分类与临期状态筛选", inventoryPoint3: "批量管理、移动和删除",
    inboundEyebrow: "智能入库", inboundTitle: "拍张照，或者说一句话，Mise 帮你填好表格，你看一眼再确认。",
    inboundCopy: "照片或语音会被整理成可以修改的字段——分类、位置、保质期都帮你猜好了。猜得不对，或者干脆没识别出来，手动表单随时都在。",
    inboundPoint1: "照片、文字和组合输入", inboundPoint2: "语音转文字", inboundPoint3: "AI 只预填，不自动写入",
    recipeEyebrow: "菜谱与做饭", recipeTitle: "菜谱是菜谱，库存是库存，两边不会互相拖累。",
    recipeCopy: "用标签和搜索找菜谱，调个份数就知道大概要扣多少库存，你点了确认才真的扣。哪怕把食材从库存删了，菜谱也不会跟着坏掉，做过什么饭都能翻记录。",
    recipePoint1: "可编辑的食材、步骤与标签", recipePoint2: "标签筛选、搜索与批量管理", recipePoint3: "份数换算、库存预览与做饭历史",
    shoppingEyebrow: "少买不重买", shoppingTitle: "挑几个菜谱，购物单自己算出还差什么。",
    shoppingCopy: "选好想做的几道菜，清单会自动减掉家里已经有的，只留下真正要买的量。买完回来，勾一下就能重新计入库存，不用再手动录一遍。",
    shoppingPoint1: "基于库存计算采购缺口", shoppingPoint2: "按卖场区域分组并勾选", shoppingPoint3: "一键回填已购买食材",
    workflowEyebrow: "从入库到下一次采购", workflowTitle: "从冰箱，到餐桌，再到下一次购物车。",
    step1Title: "入库", step1Copy: "记录批次与日期", step2Title: "选菜谱", step2Copy: "按标签快速筛选", step3Title: "做饭", step3Copy: "确认库存扣减", step4Title: "采购", step4Copy: "只买缺少的数量", step5Title: "回填", step5Copy: "让库存重新准确",
    privacyEyebrow: "你的数据，你做主", privacyTitle: "你家冰箱里有什么，只有你的手机知道。",
    privacyCopy: "库存、菜谱、购物清单、做饭记录，都存在你手机本地。只有你用拍照识别或语音输入这些功能时，信息才会传到服务器处理一下；平时你家里有什么、做过什么菜，都不会传出你的手机。",
    localTitle: "存在手机里", localCopy: "核心数据都在你手机里，卸载 App 之前一直都在。", backendTitle: "服务器不存数据", backendCopy: "服务器只处理你发起的识别请求，不会用来存你的库存数据。", controlTitle: "你说了算", controlCopy: "AI 给的结果先给你看一遍、改一改，你点确认了才算数。",
    closingEyebrow: "Mise · 食序", closingTitle: "冰箱里有什么，今晚吃什么，心里都有数。", footerCopy: "一个人做的小工具，希望能让你少纠结“今天吃什么”。",
    inventoryAlt: "Mise 库存界面", inboundAlt: "Mise 智能入库弹窗", recipesAlt: "Mise 菜谱界面", cookAlt: "Mise 做饭界面", shoppingAlt: "Mise 购物界面"
  },
  en: {
    skip: "Skip to main content", navFeatures: "Features", navWorkflow: "Workflow", navPrivacy: "Privacy",
    heroEyebrow: "A kitchen helper that lives in your phone", heroCopy: "Track what's in stock, browse recipes, check off what a dish uses, and add what's missing to the list — all in one app, no more switching between four different things.",
    explore: "Explore features", comingSoon: "Coming soon", downloadApk: "Download APK · 65 MB", proofLocal: "Local data", proofBilingual: "Bilingual", proofConfirm: "Confirm before action", scroll: "Scroll to explore",
    overviewEyebrow: "Inventory, recipes, and shopping were always one thing", overviewTitle: "Check what's already home, then decide what to cook — the shopping list already knows what to skip.",
    overviewCopy: "Adding stock, cooking, and shopping talk to each other in Mise: when something expires, how much a recipe needs, what's still missing — it all lines up. Whether you actually go through with it is still up to you.",
    statFlows: "steps", statLanguages: "languages", statDatabase: "phone, that's it",
    inventoryEyebrow: "Never lose track of what's in stock", inventoryTitle: "Buy the same thing twice, and it's still two separate batches.",
    inventoryCopy: "Buy more of something and it adds on top, it doesn't overwrite what's already there. Every batch remembers its own purchase date, expiry date, and spot in the kitchen — you'll get a nudge before things expire, and you can just search for what you need.",
    inventoryPoint1: "Independent batches and expiry dates", inventoryPoint2: "Filter by location, category, or urgency", inventoryPoint3: "Batch management, moving, and deletion",
    inboundEyebrow: "Smart inbound", inboundTitle: "Snap a photo or say it out loud, and Mise fills in the form for you.",
    inboundCopy: "Photos or voice get turned into fields you can edit — category, location, and shelf life are all guessed for you. Guessed wrong, or didn't recognize it at all? The manual form is always right there.",
    inboundPoint1: "Photo, text, and combined input", inboundPoint2: "Speech to text", inboundPoint3: "AI prefills but never saves automatically",
    recipeEyebrow: "Recipes and cooking", recipeTitle: "Recipes are recipes, inventory is inventory — neither one breaks the other.",
    recipeCopy: "Find a recipe by tag or search, adjust the servings, and see roughly what it'll use — nothing gets deducted until you confirm it. Delete an ingredient from inventory and the recipe still works fine, and everything you've cooked stays in your history.",
    recipePoint1: "Editable ingredients, steps, and tags", recipePoint2: "Tag filters, search, and batch management", recipePoint3: "Serving scale, inventory preview, and history",
    shoppingEyebrow: "Buy less, buy it once", shoppingTitle: "Pick a few recipes, and the list figures out what's missing.",
    shoppingCopy: "Choose the meals you want to cook, and the list subtracts what's already in the kitchen — you'll only see what you actually need to buy. Check it off after shopping and it goes straight back into inventory, no re-typing.",
    shoppingPoint1: "Calculate purchase gaps from inventory", shoppingPoint2: "Group and check off by store aisle", shoppingPoint3: "Restock purchased ingredients",
    workflowEyebrow: "From inbound to the next shop", workflowTitle: "From the fridge, to the table, to the next cart.",
    step1Title: "Add stock", step1Copy: "Record batches and dates", step2Title: "Pick recipes", step2Copy: "Filter quickly by tag", step3Title: "Cook", step3Copy: "Confirm inventory use", step4Title: "Shop", step4Copy: "Buy only the gap", step5Title: "Restock", step5Copy: "Keep inventory accurate",
    privacyEyebrow: "Your data, your call", privacyTitle: "What's in your fridge stays between you and your phone.",
    privacyCopy: "Inventory, recipes, shopping lists, and cooking history all stay on your phone. Only when you use photo recognition or voice input does anything get sent off for processing — the rest of the time, what's in your kitchen never leaves your phone.",
    localTitle: "Stored on your phone", localCopy: "Your data stays on your phone, for as long as the app stays installed.", backendTitle: "The server doesn't store your data", backendCopy: "The server only handles the recognition requests you send it — it's never used to store your kitchen data.", controlTitle: "You call the shots", controlCopy: "AI results show up as a draft you can edit — nothing is saved until you confirm it.",
    closingEyebrow: "Mise · 食序", closingTitle: "Know what's in the fridge. Know what's for dinner.", footerCopy: "A one-person side project, made to take some of the guesswork out of 'what's for dinner.'",
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
  document.title = language === "zh" ? "Mise 食序 — 知道冰箱里有什么" : "Mise 食序 — Know what's in your fridge";
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
