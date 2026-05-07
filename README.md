# EDM 展示網站 🚀

靜態網站，零後端，可直接部署到 Netlify。

## 資料夾結構

```
edm-site/
├── index.html        # 主頁面
├── style.css         # 樣式
├── app.js            # 互動邏輯
├── edm-data.js       # ← 在這裡管理所有 EDM 資料
├── edms/             # 放置 EDM HTML 檔案
│   └── 2024-thank-you.html
└── README.md
```

## 如何新增 EDM

1. 將 EDM 的 HTML 檔案放入 `edms/` 資料夾
2. 在 `edm-data.js` 的 `EDM_LIST` 陣列新增一筆物件：

```js
{
  id: 5,                              // 唯一編號
  title: "我的新 EDM",
  date: "2025-06-01",
  tag: "活動",                        // 分類標籤（自由命名）
  desc: "這是一段簡短說明",
  file: "edms/my-new-edm.html",      // 檔案路徑
  cover: "images/cover.jpg",          // 封面圖（可選，留空用漸層）
  color: "#2980b9"                    // 強調色（可選）
}
```

3. 存檔，完成！

## 部署到 Netlify

### 方法一：拖曳上傳（最簡單）
1. 前往 [netlify.com](https://netlify.com) 登入
2. 在 Dashboard 點 **Add new site → Deploy manually**
3. 將整個 `edm-site` 資料夾拖曳進去
4. 幾秒後即上線 ✅

### 方法二：連結 GitHub
1. 將此專案推上 GitHub
2. 在 Netlify 點 **Add new site → Import from Git**
3. 選擇你的 repo，Build command 留空，Publish directory 填 `.`
4. 往後只要 push，網站自動更新 ✅
