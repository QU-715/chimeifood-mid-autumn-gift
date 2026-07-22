奇美食品水果酥心理測驗 v3.0
================================

【這版新增】
1. 結果卡 PNG 圖片自動產生
2. 手機原生分享：支援時可一次帶入圖片、文字與測驗網址
3. LINE 分享：先下載結果圖片，再開啟 LINE 分享網址
4. Facebook 分享：先下載結果圖片，再開啟 Facebook 分享網址
5. 手機與桌機皆可下載結果圖片
6. GA4 事件追蹤
7. Meta Pixel 事件追蹤
8. 「立即購買」導購點擊追蹤
9. GitHub Pages 可直接部署

【先做這一步：填入追蹤 ID】
請開啟 config.js，修改：

GA4_ID: "G-XXXXXXXXXX"
META_PIXEL_ID: "XXXXXXXXXXXXXXX"
SITE_URL: "你的正式 GitHub Pages 網址"

若尚未建立 GA4 或 Meta Pixel，可以先保留預設值；網站仍可正常使用，只是不會送出追蹤事件。

【GA4 會記錄的事件】
- quiz_start：開始測驗
- quiz_answer：每題答案
- quiz_complete：完成測驗、結果、契合度
- share_menu_open：開啟分享選單
- share：手機／LINE／Facebook 分享
- result_image_download：下載結果圖
- quiz_retry：再測一次
- buy_click：點擊立即購買

GA4 自訂參數（例如 result_name、match_percent）若要在報表中直接分析，
請到 GA4 管理介面建立「自訂維度／自訂指標」。

【Meta Pixel 會記錄】
- PageView
- ViewContent：開始測驗
- CompleteRegistration：完成測驗
- InitiateCheckout：點擊立即購買
- 其他流程以自訂事件送出

【重要：購買轉換的範圍】
這個 GitHub Pages 網站只能確認「使用者點了立即購買」。
若要追蹤真正完成付款／訂單成立，必須在奇美商城的訂單完成頁加入：
- GA4 purchase 事件
- Meta Pixel Purchase 事件
並傳入訂單金額、幣別與訂單編號。

【分享限制】
瀏覽器無法保證 LINE 或 Facebook 會自動把「本機圖片＋網址」同時帶入貼文。
因此本版處理方式為：
- 支援 Web Share API 的手機：直接分享圖片＋文字＋網址
- LINE／Facebook 專用按鈕：先下載結果圖，再開啟分享頁
- 不支援分享的瀏覽器：下載圖片並複製分享文字

【GitHub Pages 上傳方式】
1. 解壓縮本 ZIP。
2. 將 index.html、style.css、script.js、config.js、README.txt 與 images 資料夾
   一起放到 Repository 最外層。
3. Settings → Pages。
4. Source 選 Deploy from a branch。
5. Branch 選 main，資料夾選 /(root)，按 Save。
6. 等待約 1～3 分鐘後重新整理網站。

【檔案結構】
index.html
style.css
script.js
config.js
README.txt
images/
  product-pineapple.jpg
  product-native-pineapple.jpg
  product-cranberry.jpg
  product-mango.jpg
  product-pomelo.jpg
  product-longan.jpg
  product-passionfruit.jpg
  product-lychee.jpg


【v3.2 修正】
1. 分享選單只保留「手機分享」與「儲存結果圖片」。
2. 結果頁與產生的分享圖皆完整顯示、不裁切。
3. 分享圖片底部網址已移除。
4. 分享文字只保留一個網址：https://reurl.cc/MWAOGK
5. 「儲存結果圖片」會優先開啟手機系統分享選單：
   - iPhone/iPad：選「儲存影像」
   - Android：依手機選「相簿／Google 相簿／儲存」
   若瀏覽器不支援，則退回下載至「檔案／下載項目」。
