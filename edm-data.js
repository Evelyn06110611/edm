/**
 * edm-data.js
 * ============================================================
 * 在這個檔案裡新增你的 EDM 資料。
 * 每一個物件代表一份 EDM，欄位說明如下：
 *
 *   id      : 唯一識別碼（數字或字串，不可重複）
 *   title   : 電子報標題
 *   date    : 發送日期，格式 "YYYY-MM-DD"
 *   tag     : 分類標籤，例如 "活動", "促銷", "公告" ...
 *   desc    : 簡短描述（顯示在卡片與燈箱）
 *   file    : EDM 的 HTML 檔案路徑（相對於網站根目錄）
 *             或填入完整網址（https://...）
 *   cover   : 封面圖片路徑（可選）。留空 "" 會自動顯示漸層背景。
 *   color   : 卡片強調色（可選，CSS 顏色值，留空使用預設）
 *
 * 範例（請依照格式新增，並把這段範例改成真實資料）：
 * ============================================================
 */

const EDM_LIST = [
  {
    id: 1,
    title: "AIA人工智慧應用國際認證",
    date: "2026-05-05",
    tag: "AIA",
    desc: "發證單位：Stichting IPOE Education Foundation[艾葆科教基金會]",
    file: "AIA.html",
    cover: "",
    color: "#e05a2b"
  },
  {
    id: 2,
    title: "AIE人工智慧專業能力國際認證",
    date: "2026-05-06",
    tag: "AIE",
    desc: "發證單位：Stichting IPOE Education Foundation[艾葆科教基金會]",
    file: "AIE.html",
    cover: "",
    color: "#2e7d5e"
  },
  {
    id: 3,
    title: "SEC軟體工程師國際認證",
    date: "2026-05-05",
    tag: "SEC",
    desc: "發證單位：Stichting IPOE Education Foundation[艾葆科教基金會]",
    file: "SEC.html",
    cover: "",
    color: "#4a5568"
  },
  {
    id: 4,
    title: "WIA職場智能應用國際認證",
    date: "2026-05-06",
    tag: "WIA",
    desc: "發證單位：Stichting IPOE Education Foundation[艾葆科教基金會]",
    file: "WIA.html",
    cover: "",
    color: "#7b2d8b"
  }
 {
    id: 5,
    title: "ESG永續經營國際認證",
    date: "2026-05-07",
    tag: "WIA",
    desc: "發證單位：Stichting IPOE Education Foundation[艾葆科教基金會]",
    file: "ESG.html",
    cover: "",
    color: "#7b2d8b"

  // ↑ 在這裡繼續新增更多 EDM 物件，用逗號隔開
];
