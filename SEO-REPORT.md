# EXCORDER SEO改善記録 — 2026-09-10

## 修正前の調査

公開LPはHTTP 200で取得でき、作業開始時のローカルindex.htmlとバイト単位で一致した。

| 項目 | 修正前 |
|---|---|
| title | EXCORDER — Turn Your iPhone into a Pocket Field Scanner |
| description | Explore the sensors already inside your iPhone with EXCORDER, a futuristic real-time interface for imaging, location, motion, magnetic fields, sound, and more. |
| canonical | https://northfoxjp.github.io/excorder/（適切） |
| robots | meta robotsなし。取得したHTTPヘッダーにX-Robots-Tagなし。noindexなし |
| lang / 言語切り替え | 初期lang=en。ボタンでdata-lang要素のhiddenとlangを切り替える同一URL方式。title/metaは英語のまま |
| hreflang | なし |
| Open Graph | type / site_name / title / description / url / image / 画像寸法 / altあり。titleはExtended Sensing for iPhone |
| Twitter/X | summary_large_image、site、title、description、imageあり |
| 見出し | H1はEXCORDERのみ。H2/H3は機能などで使用しているが英日両方がHTMLにあり片方を非表示 |
| 本文 | 通常のDOMテキストで実装。機能・ハードウェア・開発背景に説明が分散 |
| alt | 全画像に存在。一部は画面名のみ |
| JSON-LD | なし |
| sitemap.xml | 既存LP・support・releases・privacy・termsの5URL。LPのlastmodは2026-09-05 |
| robots.txt | ドメイン直下 https://northfoxjp.github.io/robots.txt は404。ローカルにもなし |

用途を示すtitle/H1、検索から到達できる日本語URL、センサーと表示内容の対応説明が主な不足だった。

## 変更ファイル

- `index.html`: 英語LPのメタデータ、静的英語本文、H1、導入文、センサーセクション、alt、言語リンク。
- `ja/index.html`: 既存日本語訳の全文を独立した静的LPとして追加。相対リンクを調整。
- `landing.css`: 言語リンクの外観、H1内のブランドと説明の表示、導入文を調整。
- `sitemap.xml`: 日本語LPを追加し、英日LPの更新日を更新。
- `SEO-REPORT.md`: この調査・実装記録。

`landing.js`はリリースページでも使われるため変更していない。画像、動画リンク、App Storeリンク、料金表示は維持。新しいJSライブラリや外部サービスは追加していない。

## en — index.html

- **title**: EXCORDER — iPhone Sensor App & Field Scanner
- **meta description**: EXCORDER is an iPhone sensor app that visualizes camera, LiDAR, magnetic field, GPS, barometer, motion and microphone data in a real-time pocket field scanner.
- **H1**: EXCORDER iPhone Sensor App & Pocket Field Scanner
- **追加H2**: iPhone Sensors Used by EXCORDER
- **canonical**: https://northfoxjp.github.io/excorder/

### JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://northfoxjp.github.io/excorder/#app",
  "name": "EXCORDER",
  "operatingSystem": "iOS",
  "description": "EXCORDER is an iPhone sensor app that visualizes camera, LiDAR, magnetic field, GPS, barometer, motion and microphone data in a real-time pocket field scanner.",
  "url": "https://northfoxjp.github.io/excorder/",
  "downloadUrl": "https://apps.apple.com/app/id6806745218"
}
```

### 追加本文（ヒーロー直下）

EXCORDER is an iPhone sensor app that transforms the sensors already inside your iPhone into a real-time field scanner. Explore camera images, LiDAR distance on supported models, magnetic fields, GPS position, air pressure, motion and microphone audio in one interface.

### 追加本文（センサー別）

**Camera & LiDAR**

The rear camera shows a live view with heading and device vertical angle. On supported LiDAR-equipped iPhones, EXCORDER also displays approximate distance at the center of the image. The color spectrum is simulated from camera RGB data; it is not a physical spectrometer reading.

**Magnetometer & Compass**

Inspect three-axis magnetic field readings, total strength in µT, vector direction and a 3D projection. Compass heading helps you orient the camera and navigation views.

**GPS & Barometer**

See your position on a map, coordinates and GPS altitude. The barometer provides air pressure and relative altitude changes. Local temperature and humidity come from the Open-Meteo weather service, not from built-in temperature or humidity sensors.

**Accelerometer & Device Motion**

Follow three-axis acceleration sampled at 100 Hz and a 0–50 Hz vibration spectrum with peak frequency and amplitude. Core Motion combines motion sensor data, including gyroscope input, for device orientation used in the vertical-angle and magnetic-vector displays.

**Microphone**

View relative microphone level in dBFS and a 40 Hz–16 kHz audio spectrum. Adjustable digital boost helps inspect quieter signals. These are relative digital audio levels, not calibrated sound pressure measurements.

### スクリーンショットalt

- `overview.png`: EXCORDER overview combining camera, navigation and acoustic sensor panels
- `overview.png`: EXCORDER overview combining camera, navigation and acoustic sensor panels
- `imaging-1.png`: EXCORDER rear-camera view with targeting brackets, heading and distance readout
- `imaging-2.png`: EXCORDER camera color spectrum simulated from RGB values
- `navigation-1.png`: EXCORDER map, coordinates, altitude and environmental readings
- `navigation-2.png`: EXCORDER three-axis magnetic field, acceleration trace and vibration spectrum
- `audio.png`: EXCORDER microphone level, audio spectrum and Voice Decode panel

## ja — ja/index.html

- **title**: EXCORDER — iPhone センサー アプリ / フィールドスキャナー
- **meta description**: EXCORDERは、カメラ、LiDAR、磁気センサー、GPS、気圧計、加速度センサー、マイクなどの情報をリアルタイムに可視化するiPhone センサー アプリです。LiDARによる距離表示は対応機種で利用できます。
- **H1**: EXCORDER iPhoneをフィールドスキャナーに変えるセンサーアプリ
- **追加H2**: EXCORDERで使えるiPhoneのセンサーと表示内容
- **canonical**: https://northfoxjp.github.io/excorder/ja/

### JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://northfoxjp.github.io/excorder/#app",
  "name": "EXCORDER",
  "operatingSystem": "iOS",
  "description": "EXCORDERは、カメラ、LiDAR、磁気センサー、GPS、気圧計、加速度センサー、マイクなどの情報をリアルタイムに可視化するiPhone センサー アプリです。LiDARによる距離表示は対応機種で利用できます。",
  "url": "https://northfoxjp.github.io/excorder/ja/",
  "downloadUrl": "https://apps.apple.com/app/id6806745218"
}
```

### 追加本文（ヒーロー直下）

EXCORDERは、iPhoneに搭載された複数のセンサー情報をリアルタイムに可視化するiPhone センサー アプリです。カメラ映像、対応機種でのLiDAR距離、磁場、GPS位置、気圧、動き、マイク音声を、ひとつのインターフェースで探索できます。

### 追加本文（センサー別）

**カメラ・LiDAR**

背面カメラのライブ映像に方位と端末の垂直角を重ねて表示します。LiDAR搭載の対応iPhoneでは、画面中央までの概算距離も表示できます。カメラの色スペクトラムはRGB値から生成した疑似表示で、分光器による実測ではありません。

**磁気センサー・コンパス**

iPhoneの磁気センサーから得られる3軸の磁場、合成強度（µT）、ベクトル方向を数値と3D投影で確認できます。コンパスの方位はカメラ画面とナビゲーション画面にも表示されます。

**GPS・気圧計**

地図上の現在地、緯度・経度、GPS高度を確認できます。気圧計は気圧と相対高度の変化を表示します。周辺の気温・湿度はOpen-Meteoの気象情報であり、iPhone内蔵の温度・湿度センサーによる実測ではありません。

**加速度センサー・端末の姿勢**

100 Hzで取得する3軸加速度と、0〜50 Hzの振動スペクトラム、ピーク周波数・振幅を確認できます。垂直角や磁場ベクトルの表示には、ジャイロスコープなどのモーションセンサー情報を統合するCore Motionの端末姿勢情報を利用します。

**マイク**

マイク入力の相対レベル（dBFS）と40 Hz〜16 kHzの音響スペクトラムを表示します。デジタルブーストを調整して小さな信号を確認できます。表示はデジタル音声の相対レベルであり、校正済みの音圧測定ではありません。

### スクリーンショットalt

- `overview.png`: カメラ・ナビゲーション・音響のセンサー情報を一覧表示するEXCORDER
- `overview.png`: カメラ・ナビゲーション・音響のセンサー情報を一覧表示するEXCORDER
- `imaging-1.png`: 照準・方位・距離の表示を重ねたEXCORDERの背面カメラ画面
- `imaging-2.png`: RGB値から生成した色の疑似スペクトラムを表示するEXCORDER
- `navigation-1.png`: 地図・座標・高度・環境情報を表示するEXCORDER
- `navigation-2.png`: 3軸磁場・加速度波形・振動スペクトラムを表示するEXCORDER
- `audio.png`: マイクレベル・音響スペクトラム・音声デコードを表示するEXCORDER

## 共通の設定・判断

- 両LPから `hreflang=en` → `https://northfoxjp.github.io/excorder/`、`ja` → `https://northfoxjp.github.io/excorder/ja/`、`x-default` → 英語LPを相互指定。各ページのcanonicalは自分自身。日本語を英語にcanonical統合しない。
- html langは英語en、日本語ja。言語選択は実際のURLを持つリンクで、JavaScriptなしでも全文を読める。リダイレクトや言語の自動推定なし。
- OGとTwitter/Xのtitle・descriptionは各ページの内容に一致させ、og:urlとog:localeも言語別に設定。既存SNS画像と寸法を維持。
- SoftwareApplicationには確認できる名前・iOS・説明・公式LP・App Store URLのみを設定。ストア上のカテゴリ未確認につきapplicationCategoryは省略。レビュー、評価、未確認の機能は作成していない。Googleのアプリ用リッチリザルトに必要な評価・オファーを一式設定したものではなく、リッチリザルト対応完了とは扱わない。
- sitemapは6URL。英日LPのlastmodは2026-09-10。hreflangはHTMLで指定しているためsitemapで重複管理しない。
- robots.txtは追加しない。GitHub Pagesのプロジェクト配下 `/excorder/robots.txt` はドメイン直下のrobots.txtの代わりにならない。現在はrobotsによるクロール禁止がなく、index/followは既定動作なので冗長なmeta robotsも追加しない。
- ジャイロスコープは独立した角速度計表示とは説明せず、Core Motionが統合する姿勢情報として説明。MotionService.swiftのdevice motion / gravity / attitudeと整合。
- 温湿度はCurrentWeatherService.swiftで確認したOpen-Meteo由来。LiDARの機種制限、RGB疑似スペクトラム、dBFSの相対値も明記。
- 既存日本語の「画像・距離」カードも、RGB疑似スペクトラムがLiDAR必須と読めない表現へ訂正。

## ターゲット検索意図への対応

- **iPhone sensor app**: 英語title・H1でアプリ種別を明示。descriptionとヒーロー直下の導入文で自然に使用。センサーセクションのH2/H3と本文で「どのセンサーを使い、何が見えるか」に回答。
- **iPhone センサー アプリ**: 日本語title・description・ヒーロー直下の導入文に使用。H1の「センサーアプリ」とセンサー別の日本語本文が用途を説明。独立URL、静的な日本語全文、lang、自己canonical、相互hreflangにより日本語検索の着地先を用意。

キーワード羅列や隠しSEOテキストは追加していない。既存の開発背景・SFの世界観は維持している。

## 検証と公開状態

- HTMLのタグの対応、H1が各1個、ID重複なし、言語別静的本文、JSON構文、sitemap XML、canonical/hreflangを検証。
- 両LPの全ローカルリンク・画像・CSS・JS・ページ内アンカーの参照先を確認。既存の外部リンク集合とApp Store導線2個を比較し、一致を確認。
- 画像のwidth/heightと遅延読み込みを維持。追加本文は初期HTMLに存在し、遅延挿入しない。
- `git diff`で変更を確認し、`git diff --check`で空白エラーなし。
- Chrome実描画で英日320px・390px・768px、およびデスクトップ表示を検証。横はみ出しなし、全画像読込成功、ヒーロー内App Store導線を確認。スクリーンショットで配色・画像・見出し・価格表示を確認。センサー一覧は狭い画面で1列、768pxで2列、1440pxで3列。
- 共有CSSではリリースページ用の言語ボタンのスタイルも保持。
- 初回レポート作成時点ではローカル実装のみ。その後、ユーザーからこの内容で公開サイトへpushする指示を受領。公開後のGoogleへの登録・順位・Core Web Vitalsは未測定。

## 参照したGoogle公式資料

- 多言語ページと相互hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- robots.txt: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- SoftwareApplication: https://developers.google.com/search/docs/appearance/structured-data/software-app

## ローカルプレビューの修正

file://でフォルダーURLを開くとindex.htmlが自動解決されないため、LPの言語切り替えとロゴのリンクにindex.htmlを明記した。英日間のリンクが実ファイルを指すことを確認。canonical・hreflang・sitemapの正式URLは末尾スラッシュのまま維持。
