"use strict";

const CONFIG = window.QUIZ_CONFIG || {};
const BUY_URL = CONFIG.BUY_URL || "https://reurl.cc/VnENgZ";
const SITE_URL = CONFIG.SITE_URL || location.href.split("#")[0];
const TYPES = ["pineapple", "nativePineapple", "cranberry", "mango", "pomelo", "longan", "passionfruit", "lychee"];

const questions = [
  {
    icon: "🌤️",
    text: "難得多出一個完全自由的下午，你最想怎麼安排？",
    options: [
      { text: "找間舒服的店，和朋友慢慢聊天", scores: { pineapple: 3, longan: 2 } },
      { text: "窩在家裡追劇，享受安靜時光", scores: { longan: 3, pomelo: 2 } },
      { text: "立刻查景點，來一場說走就走的小旅行", scores: { passionfruit: 3, mango: 2 } },
      { text: "逛展覽或特色小店，尋找新靈感", scores: { cranberry: 3, lychee: 2 } }
    ]
  },
  {
    icon: "💬",
    text: "朋友最常用哪一句話形容你？",
    options: [
      { text: "有你在，氣氛就會變得很安心", scores: { pineapple: 3, longan: 2 } },
      { text: "看起來冷靜，其實比誰都重感情", scores: { nativePineapple: 3, longan: 2 } },
      { text: "總有讓人意想不到的新點子", scores: { cranberry: 3, mango: 2 } },
      { text: "很會照顧別人的感受，跟你相處很舒服", scores: { pomelo: 3, lychee: 2 } }
    ]
  },
  {
    icon: "🎁",
    text: "挑選禮物時，你最重視的是什麼？",
    options: [
      { text: "經典耐看，收到的人一定會喜歡", scores: { pineapple: 3, nativePineapple: 2 } },
      { text: "有故事、有質感，能代表我的心意", scores: { longan: 3, lychee: 2 } },
      { text: "口味特別，拆開時會讓人驚喜", scores: { cranberry: 3, passionfruit: 2 } },
      { text: "明亮討喜，讓人一看到就心情很好", scores: { mango: 3, pomelo: 2 } }
    ]
  },
  {
    icon: "🌈",
    text: "面對生活中的變化，你通常會怎麼做？",
    options: [
      { text: "先穩住步調，一件一件處理", scores: { nativePineapple: 3, pineapple: 2 } },
      { text: "保持彈性，順著當下找到最舒服的方法", scores: { pomelo: 3, lychee: 2 } },
      { text: "把它當成新冒險，試了再說", scores: { passionfruit: 3, mango: 2 } },
      { text: "換個角度思考，做出自己的版本", scores: { cranberry: 3, longan: 2 } }
    ]
  },
  {
    icon: "✨",
    text: "你最希望自己帶給身邊的人什麼感受？",
    options: [
      { text: "可靠踏實，重要時刻都能想到我", scores: { pineapple: 3, nativePineapple: 2 } },
      { text: "溫暖療癒，讓人可以放心做自己", scores: { longan: 3, pomelo: 2 } },
      { text: "新鮮有趣，讓日常多一點驚喜", scores: { passionfruit: 3, cranberry: 2 } },
      { text: "浪漫明亮，讓平凡日子更有儀式感", scores: { lychee: 3, mango: 2 } }
    ]
  }
];

const results = {
  pineapple: {
    name: "黃金鳳梨酥", type: "經典人氣型", image: "images/product-pineapple.jpg",
    quote: "你的魅力，就像經典鳳梨酥一樣，永遠有人喜歡。",
    description: "你親切、可靠，也懂得照顧整體氣氛。面對重要的人與事，你不靠浮誇表現，而是用穩定與真心累積信任，是大家在關鍵時刻最容易想到的人。",
    traits: ["親切", "可靠", "人氣王"]
  },
  nativePineapple: {
    name: "土鳳梨酥", type: "反差魅力型", image: "images/product-native-pineapple.jpg",
    quote: "不是每個人第一眼都懂你，但懂你的人都離不開你。",
    description: "你有清楚的原則與自己的步調，外表可能冷靜，內在卻十分重感情。你不急著討好所有人，但對認定的人非常真誠，是愈相處愈有魅力的類型。",
    traits: ["真誠", "沉穩", "有深度"]
  },
  cranberry: {
    name: "紅藜蔓越莓酥", type: "獨特創意型", image: "images/product-cranberry.jpg",
    quote: "你不需要和別人一樣，自己的版本就是最有記憶點的答案。",
    description: "你喜歡在熟悉中加入新意，觀察敏銳，也勇於展現自己的品味。你總能讓平凡的事多一點巧思，是朋友圈裡最容易被記住的存在。",
    traits: ["有個性", "創新", "與眾不同"]
  },
  mango: {
    name: "愛文芒果酥", type: "陽光感染型", image: "images/product-mango.jpg",
    quote: "你帶來的快樂很直接，和你相處總會多一點陽光。",
    description: "你真誠熱情，對喜歡的事願意全心投入。你的活力很有感染力，常常在不知不覺間帶動身邊的人，讓大家更願意嘗試與享受當下。",
    traits: ["熱情", "活潑", "行動派"]
  },
  pomelo: {
    name: "香柚酥", type: "溫柔療癒型", image: "images/product-pomelo.jpg",
    quote: "你的溫柔不張揚，卻總能在剛好的時候被感受到。",
    description: "你細膩、體貼，也很懂得保留舒服的距離。你不一定是人群中最響亮的人，卻能讓身邊的人感到自在，是一種清新而持久的陪伴。",
    traits: ["細心", "溫暖", "療癒"]
  },
  longan: {
    name: "桂圓酥", type: "暖心守護型", image: "images/product-longan.jpg",
    quote: "你的溫暖不用大聲，就足以讓人牢牢記住。",
    description: "你重感情、念舊，也願意默默照顧重要的人。你相信關係需要時間累積，因此一旦認定，就會用穩定而深厚的方式守護，是很值得信賴的依靠。",
    traits: ["穩重", "貼心", "重感情"]
  },
  passionfruit: {
    name: "金黃百香果酥", type: "冒險探索型", image: "images/product-passionfruit.jpg",
    quote: "你對世界保持好奇，人生自然會多出許多精彩支線。",
    description: "你喜歡新鮮感，也願意走出習慣的路線。面對未知，你通常先感到興奮而不是害怕；你的開放與樂觀，總能帶著大家看見更多可能。",
    traits: ["好奇", "自由", "樂觀"]
  },
  lychee: {
    name: "荔枝酥", type: "浪漫儀式型", image: "images/product-lychee.jpg",
    quote: "你擅長把普通的一天，過成值得收藏的小片段。",
    description: "你有品味、重視感受，也很懂得營造儀式感。你會留意那些容易被忽略的小細節，並用自己的方式讓生活變得更精緻、更有故事。",
    traits: ["浪漫", "精緻", "有品味"]
  }
};

const $ = (selector) => document.querySelector(selector);
const screens = [$("#startScreen"), $("#quizScreen"), $("#resultScreen")];
let currentQuestion = 0;
let scores = {};
let answers = [];
let lastResultKey = "pineapple";
let lastMatch = 95;
let cachedShareBlob = null;

function track(eventName, params = {}) {
  const cleanParams = { ...params, quiz_name: "chimei_fruit_quiz" };
  if (typeof window.gtag === "function" && CONFIG.GA4_ID && !CONFIG.GA4_ID.includes("XXXXXXXX")) {
    window.gtag("event", eventName, cleanParams);
  }
  if (typeof window.fbq === "function" && CONFIG.META_PIXEL_ID && !CONFIG.META_PIXEL_ID.includes("XXXXXXXX")) {
    const standard = {
      quiz_start: "ViewContent",
      quiz_complete: "CompleteRegistration",
      buy_click: "InitiateCheckout"
    }[eventName];
    if (standard) {
      window.fbq("track", standard, {
        content_name: cleanParams.result_name || "奇美水果酥心理測驗",
        content_category: "心理測驗",
        content_ids: cleanParams.result_key ? [cleanParams.result_key] : undefined
      });
    } else {
      window.fbq("trackCustom", eventName, cleanParams);
    }
  }
}

function resetScores() {
  scores = Object.fromEntries(TYPES.map((type) => [type, 0]));
  answers = [];
  cachedShareBlob = null;
}

function showScreen(screen) {
  screens.forEach((item) => item.classList.toggle("active", item === screen));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  currentQuestion = 0;
  resetScores();
  renderQuestion();
  showScreen($("#quizScreen"));
  track("quiz_start");
}

function renderQuestion() {
  const question = questions[currentQuestion];
  $("#progressLabel").textContent = `第 ${currentQuestion + 1} 題，共 ${questions.length} 題`;
  $("#progressBar").style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  $("#questionIcon").textContent = question.icon;
  $("#questionText").textContent = question.text;
  const options = $("#options");
  options.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option.text}</span>`;
    button.addEventListener("click", () => chooseOption(option.scores, index, option.text));
    options.appendChild(button);
  });
}

function chooseOption(optionScores, optionIndex, optionText) {
  Object.entries(optionScores).forEach(([key, value]) => { scores[key] += value; });
  answers.push(optionIndex);
  track("quiz_answer", {
    question_number: currentQuestion + 1,
    answer_letter: String.fromCharCode(65 + optionIndex),
    answer_text: optionText.slice(0, 80)
  });
  currentQuestion += 1;
  if (currentQuestion < questions.length) {
    renderQuestion();
    $("#quizScreen").classList.remove("active");
    requestAnimationFrame(() => $("#quizScreen").classList.add("active"));
  } else {
    showResult();
  }
}

function getWinner() {
  const highest = Math.max(...Object.values(scores));
  const tied = TYPES.filter((type) => scores[type] === highest);
  return tied[Math.floor(Math.random() * tied.length)];
}

function showResult() {
  lastResultKey = getWinner();
  const result = results[lastResultKey];
  const total = Object.values(scores).reduce((sum, value) => sum + value, 0) || 1;
  const ratio = scores[lastResultKey] / total;
  lastMatch = Math.min(99, Math.max(88, Math.round(86 + ratio * 25)));
  cachedShareBlob = null;

  $("#resultImage").src = result.image;
  $("#resultImage").alt = `${result.name}禮盒商品圖`;
  $("#resultType").textContent = result.type;
  $("#resultName").textContent = result.name;
  $("#resultQuote").textContent = result.quote;
  $("#resultDescription").textContent = result.description;
  $("#resultTraits").innerHTML = result.traits.map((trait) => `<span># ${trait}</span>`).join("");
  $("#shareStatus").textContent = "";
  animateMatch(lastMatch);
  showScreen($("#resultScreen"));
  track("quiz_complete", {
    result_key: lastResultKey,
    result_name: result.name,
    match_percent: lastMatch,
    answers: answers.join("-")
  });
}

function animateMatch(target) {
  const el = $("#matchNumber");
  const start = 70;
  const duration = 650;
  const started = performance.now();
  function tick(now) {
    const progress = Math.min(1, (now - started) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = `${Math.round(start + (target - start) * eased)}%`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function roundedRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const chars = Array.from(text);
  let line = "";
  let lines = [];
  for (const char of chars) {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = char;
      if (lines.length >= maxLines - 1) break;
    } else {
      line = test;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
  return y + lines.length * lineHeight;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function createShareImageBlob() {
  if (cachedShareBlob) return cachedShareBlob;
  const result = results[lastResultKey];
  const canvas = $("#shareCanvas");
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  const gradient = ctx.createLinearGradient(0, 0, W, H);
  gradient.addColorStop(0, "#fff7e7");
  gradient.addColorStop(1, "#ffdca9");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "rgba(239,126,45,.15)";
  ctx.beginPath(); ctx.arc(960, 130, 240, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "rgba(245,181,55,.18)";
  ctx.beginPath(); ctx.arc(90, 1230, 260, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = "#ad431f";
  ctx.font = '900 32px "Microsoft JhengHei", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText("奇美食品水果酥禮盒系列", W / 2, 75);

  ctx.fillStyle = "#57362d";
  ctx.font = '900 58px "Microsoft JhengHei", sans-serif';
  ctx.fillText("我的靈魂果酥是", W / 2, 150);

  // Product image card
  roundedRect(ctx, 90, 195, 900, 650, 38);
  ctx.save();
  ctx.clip();
  const image = await loadImage(result.image);
  const ratio = Math.min(900 / image.width, 650 / image.height);
  const iw = image.width * ratio;
  const ih = image.height * ratio;
  ctx.drawImage(image, 90 + (900 - iw) / 2, 195 + (650 - ih) / 2, iw, ih);
  ctx.restore();

  ctx.fillStyle = "#e96528";
  ctx.font = '900 30px "Microsoft JhengHei", sans-serif';
  ctx.fillText(result.type, W / 2, 905);

  ctx.fillStyle = "#57362d";
  ctx.font = '900 64px "Microsoft JhengHei", sans-serif';
  ctx.fillText(result.name, W / 2, 985);

  roundedRect(ctx, 365, 1015, 350, 70, 35);
  ctx.fillStyle = "#fff0ca"; ctx.fill();
  ctx.fillStyle = "#ad431f";
  ctx.font = '900 35px "Microsoft JhengHei", sans-serif';
  ctx.fillText(`契合度 ${lastMatch}%`, W / 2, 1062);

  ctx.fillStyle = "#8d4c30";
  ctx.font = '900 31px "Microsoft JhengHei", sans-serif';
  wrapText(ctx, result.quote, W / 2, 1130, 820, 48, 2);

  ctx.fillStyle = "#8b6c62";
  ctx.font = '700 24px "Microsoft JhengHei", sans-serif';
  ctx.fillText("快來測你的命定水果酥", W / 2, 1252);

  ctx.fillStyle = "#ad431f";
  ctx.font = '700 22px Arial, sans-serif';
  ctx.fillText(SITE_URL.replace(/^https?:\/\//, ""), W / 2, 1295);

  cachedShareBlob = await new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("無法產生圖片")), "image/png", 0.95);
  });
  return cachedShareBlob;
}

function fileName() {
  return `奇美水果酥心理測驗-${results[lastResultKey].name}.png`;
}

async function downloadResultImage(trackEvent = true) {
  const blob = await createShareImageBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName();
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
  if (trackEvent) track("result_image_download", { result_key: lastResultKey, result_name: results[lastResultKey].name });
  return blob;
}

function shareText() {
  const result = results[lastResultKey];
  return `我測出我的靈魂果酥是【${result.name}】！契合度 ${lastMatch}% 🎁\n快來測你的命定水果酥：\n${SITE_URL}`;
}

async function copyShareText() {
  const text = shareText();
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    window.prompt("請複製以下分享文字：", text);
  }
}

function openShareModal() {
  $("#shareModal").hidden = false;
  document.body.classList.add("modal-open");
  track("share_menu_open", { result_key: lastResultKey });
}

function closeShareModal() {
  $("#shareModal").hidden = true;
  document.body.classList.remove("modal-open");
}

async function nativeShare() {
  const result = results[lastResultKey];
  const blob = await createShareImageBlob();
  const file = new File([blob], fileName(), { type: "image/png" });
  const data = { title: "奇美水果酥心理測驗", text: shareText(), url: SITE_URL, files: [file] };

  try {
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share(data);
      $("#shareStatus").textContent = "分享視窗已開啟。";
      track("share", { method: "native_file", content_type: "result_image", item_id: lastResultKey });
    } else if (navigator.share) {
      await downloadResultImage(false);
      await navigator.share({ title: data.title, text: data.text, url: SITE_URL });
      $("#shareStatus").textContent = "結果圖片已下載，分享視窗已開啟。";
      track("share", { method: "native_url", content_type: "quiz_result", item_id: lastResultKey });
    } else {
      await downloadResultImage(false);
      await copyShareText();
      $("#shareStatus").textContent = "結果圖片已下載，分享文字與網址已複製。";
      track("share_fallback", { method: "download_copy", result_key: lastResultKey });
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      $("#shareStatus").textContent = "目前無法自動分享，已為你下載結果圖片。";
      await downloadResultImage(false);
    }
  } finally {
    closeShareModal();
  }
}

async function lineShare() {
  await downloadResultImage(false);
  await copyShareText().catch(() => {});
  const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(SITE_URL)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  $("#shareStatus").textContent = "結果圖片已下載，LINE 分享頁已開啟；可將圖片一併傳送。";
  track("share", { method: "line", content_type: "quiz_result", item_id: lastResultKey });
  closeShareModal();
}

async function facebookShare() {
  await downloadResultImage(false);
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  $("#shareStatus").textContent = "結果圖片已下載，Facebook 分享頁已開啟；可將圖片加入貼文。";
  track("share", { method: "facebook", content_type: "quiz_result", item_id: lastResultKey });
  closeShareModal();
}

$("#startButton").addEventListener("click", startQuiz);
$("#retryButton").addEventListener("click", () => {
  track("quiz_retry", { previous_result: lastResultKey });
  startQuiz();
});
$("#shareButton").addEventListener("click", openShareModal);
$("#nativeShareButton").addEventListener("click", nativeShare);
$("#lineShareButton").addEventListener("click", lineShare);
$("#facebookShareButton").addEventListener("click", facebookShare);
$("#downloadButton").addEventListener("click", async () => {
  await downloadResultImage();
  $("#shareStatus").textContent = "結果圖片已下載。";
  closeShareModal();
});
document.querySelectorAll("[data-close-share]").forEach((el) => el.addEventListener("click", closeShareModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !$("#shareModal").hidden) closeShareModal();
});
$("#buyButton").href = BUY_URL;
$("#buyButton").addEventListener("click", () => {
  track("buy_click", {
    result_key: lastResultKey,
    result_name: results[lastResultKey].name,
    link_url: BUY_URL
  });
});
resetScores();
