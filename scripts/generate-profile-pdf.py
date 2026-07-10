#!/usr/bin/env python3
from __future__ import annotations

import base64
import shutil
import subprocess
from html import escape
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
TMP = ROOT / "tmp" / "profile-pdf"
BACKGROUND = PUBLIC / "og-image.png"
LOCALES = ["ja", "en", "th", "dz", "ne", "my"]

FONT_STACKS = {
    "ja": '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Apple SD Gothic Neo", sans-serif',
    "en": 'Inter, "Helvetica Neue", Arial, sans-serif',
    "th": 'Thonburi, "Noto Sans Thai", Tahoma, sans-serif',
    "dz": 'Kailasa, "Noto Sans Tibetan", "Arial Unicode MS", sans-serif',
    "ne": '"Devanagari Sangam MN", "Noto Sans Devanagari", "Arial Unicode MS", sans-serif',
    "my": '"Noto Sans Myanmar", "Myanmar Sangam MN", "Myanmar MN", sans-serif',
}

DATA = {
    "ja": {
        "lang": "ja",
        "name": "永田 右京",
        "subtitle": "行政学・経営学の研究者 / 株式会社MaaS Creative 代表取締役",
        "affiliation": "岩手県立大学 博士後期課程",
        "labels": {
            "profile": "プロフィール",
            "current": "現在の活動",
            "themes": "研究テーマ",
            "papers": "論文・出版物",
            "projects": "プロジェクト概要",
            "links": "リンク",
            "generated": "ukyonagata.jp のサイトアセットから自動生成",
        },
        "profile": [
            "行政学・経営学の研究者。鉄道やバス、航空機、船舶、タクシーなどの公共交通政策を舞台にした評価研究を専門としています。",
            "生成AI時代における人間の創造性を最大限発揮させ、誰もが社会を「そうぞう」できる政策技術の開発・検証に取り組んでいます。",
        ],
        "current": [
            "株式会社MaaS Creativeの代表として、生成AIをツール、UIの両面で活用した評価システムや計画技術の支援ツールなどを開発しています。",
            "「More Creative Public.」をテーマに、AIと人間の協働を通じて人間の可能性を最大化する技術の実装に取り組んでいます。",
        ],
        "themes": ["公共政策学", "政治学", "地域公共交通政策とガバナンス", "公共政策におけるAI活用", "創造性、官民連携、モビリティ、MaaS、政策形成"],
        "papers": [
            "「日本版MaaS」は「交通まちづくり」の一類型として捉えられるか？ - 目標とガバナンスについての一考察",
            "地域公共交通のあるべき補助方式への一考察 - 赤字補填からの脱却の主張に着目して",
        ],
        "projects": [
            ("MaaS Creative", "「More Creative Public.」をテーマに、AIと人間の協働を通じて人間の可能性を最大化する技術を開発する事業会社です。"),
            ("Liquitous", "参加型ガバナンスと合意形成のためのシビックエンゲージメントプラットフォームを開発する企業です。公共交通に関するプロジェクトに関わっています。"),
            ("Rule Makers DAO", "法・民・政が連携してルールメイキングを行う一般社団法人。同団体内で、システム開発・パブリックアフェアーズに関する研究・実践を行っています。"),
            ("NPO法人みなとメディアミュージアム", "茨城県ひたちなか市那珂湊駅周辺で芸術祭を開催する文化芸術NPO。DAOの仕組みを導入し、芸術実践・地域実践を支える方法の確立に取り組んでいます。"),
        ],
    },
    "en": {
        "lang": "en",
        "name": "Ukyo Nagata",
        "subtitle": "Researcher in public administration and management science / CEO, MaaS Creative Inc.",
        "affiliation": "Doctoral Program, Iwate Prefectural University",
        "labels": {
            "profile": "Profile",
            "current": "Current Work",
            "themes": "Research Themes",
            "papers": "Papers and Publications",
            "projects": "Project Summaries",
            "links": "Links",
            "generated": "Generated from ukyonagata.jp site assets",
        },
        "profile": [
            "Researcher in public administration and management science, specializing in evaluation research focused on public transportation policy including railways, buses, aviation, maritime transport, and taxis.",
            "Committed to developing and validating policy technologies that maximize human creativity in the age of generative AI.",
        ],
        "current": [
            "As CEO of MaaS Creative Inc., he develops evaluation systems and planning support tools that use generative AI as both a tool and an interface.",
            'The work is guided by the theme "More Creative Public" and focuses on human-AI collaboration.',
        ],
        "themes": ["Public policy", "Political science", "Regional public transportation policy and governance", "AI utilization in public policy", "Creativity, mobility, MaaS, public-private partnership, and policy formation"],
        "papers": [
            'Can "Japanese MaaS" be considered as a type of "Transportation Community Development"? - A study on objectives and governance',
            "A Study on Ideal Subsidy Systems for Regional Public Transportation - Focusing on arguments for escaping deficit compensation",
        ],
        "projects": [
            ("MaaS Creative", 'A business company developing technologies that maximize human potential through AI-human collaboration under the theme "More Creative Public."'),
            ("Liquitous", "A company that develops civic engagement platforms for participatory governance and consensus-building. Involved in public transportation projects."),
            ("Rule Makers DAO", "A general incorporated association where law, civil society, and government collaborate on rule-making. He conducts research and practice in system development and public affairs."),
            ("NPO Minato Media Museum", "A cultural arts NPO that hosts art festivals around Nakaminato Station in Hitachinaka City, Ibaraki. He works to introduce DAO mechanisms that support artistic and community practice."),
        ],
    },
}

for locale in ["th", "dz", "ne", "my"]:
    DATA[locale] = DATA["en"] | {
        "lang": {"th": "th", "dz": "dz", "ne": "ne", "my": "my"}[locale],
        "subtitle": {
            "th": "นักวิจัยด้านรัฐประศาสนศาสตร์และวิทยาการจัดการ / CEO, MaaS Creative Inc.",
            "dz": "Ukyo Nagata / MaaS Creative Inc.",
            "ne": "सार्वजनिक प्रशासन र व्यवस्थापन विज्ञानका अनुसन्धानकर्ता / CEO, MaaS Creative Inc.",
            "my": "အုပ်ချုပ်ရေးနှင့် စီမံခန့်ခွဲမှုသိပ္ပံပညာရှင် / CEO, MaaS Creative Inc.",
        }[locale],
        "labels": DATA["en"]["labels"] | {
            "profile": {"th": "โปรไฟล์", "dz": "Profile", "ne": "प्रोफाइल", "my": "ကိုယ်ရေးအကျဉ်း"}[locale],
            "current": {"th": "งานปัจจุบัน", "dz": "Current Work", "ne": "हालको काम", "my": "လက်ရှိလုပ်ငန်း"}[locale],
            "themes": {"th": "หัวข้อวิจัย", "dz": "Research Themes", "ne": "अनुसन्धान विषय", "my": "သုတေသနအကြောင်းအရာများ"}[locale],
            "papers": {"th": "บทความและสิ่งพิมพ์", "dz": "Papers and Publications", "ne": "लेख र प्रकाशन", "my": "စာတမ်းများနှင့် ထုတ်ဝေမှုများ"}[locale],
            "projects": {"th": "สรุปโครงการ", "dz": "Project Summaries", "ne": "परियोजना सारांश", "my": "ပရောဂျက်အကျဉ်းချုပ်"}[locale],
            "links": {"th": "ลิงก์", "dz": "Links", "ne": "लिङ्कहरू", "my": "လင့်ခ်များ"}[locale],
        },
    }


def asset_data_url(path: Path) -> str:
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:image/png;base64,{encoded}"


def paragraphs(items: list[str]) -> str:
    return "\n".join(f"<p>{escape(item)}</p>" for item in items)


def bullets(items: list[str]) -> str:
    return "<ul>" + "\n".join(f"<li>{escape(item)}</li>" for item in items) + "</ul>"


def project_blocks(items: list[tuple[str, str]]) -> str:
    return "\n".join(
        f"<article class=\"project\"><h3>{escape(title)}</h3><p>{escape(summary)}</p></article>"
        for title, summary in items
    )


def render_html(locale: str, background_url: str) -> str:
    data = DATA[locale]
    labels = data["labels"]
    font_stack = FONT_STACKS[locale]
    return f"""<!doctype html>
<html lang="{escape(data["lang"])}">
<head>
<meta charset="utf-8">
<style>
  @page {{ size: A4; margin: 0; }}
  * {{ box-sizing: border-box; }}
  body {{
    margin: 0;
    color: #233b30;
    background: white;
    font-family: {font_stack};
    letter-spacing: 0;
    -webkit-font-smoothing: antialiased;
  }}
  .page {{
    width: 210mm;
    height: 297mm;
    position: relative;
    overflow: hidden;
    page-break-after: always;
    background: url("{background_url}") center / cover no-repeat;
    padding: 18mm 18mm;
  }}
  .sheet {{
    width: 100%;
    height: 100%;
    border-radius: 8mm;
    background: rgba(255, 255, 255, 0.92);
    padding: 18mm 16mm;
    display: flex;
    flex-direction: column;
  }}
  h1 {{
    margin: 0 0 5mm;
    color: #145232;
    font-size: 31pt;
    line-height: 1.12;
    font-weight: 700;
  }}
  .subtitle, .affiliation {{
    margin: 0;
    color: #1a5276;
    font-size: 12.5pt;
    line-height: 1.55;
    font-weight: 500;
  }}
  .rule {{
    height: 1.2pt;
    margin: 10mm 0 12mm;
    background: #2d8f5e;
  }}
  section {{ margin: 0 0 8mm; }}
  h2 {{
    margin: 0 0 3.5mm;
    color: #145232;
    font-size: 16pt;
    line-height: 1.35;
    font-weight: 700;
  }}
  h3 {{
    margin: 0 0 1.2mm;
    color: #145232;
    font-size: 11.5pt;
    line-height: 1.45;
    font-weight: 700;
  }}
  p, li {{
    margin: 0 0 3.4mm;
    font-size: 10.7pt;
    line-height: 1.75;
    font-weight: 400;
    overflow-wrap: anywhere;
  }}
  ul {{
    margin: 0;
    padding-left: 6mm;
  }}
  li {{ padding-left: 1mm; }}
  .project {{ margin: 0 0 5mm; }}
  .footer {{
    margin-top: auto;
    color: #3d5c4a;
    font-size: 8.5pt;
    text-align: right;
  }}
  html[lang="ja"] p, html[lang="ja"] li {{
    line-height: 1.85;
    text-align: left;
  }}
  html[lang="th"] p, html[lang="th"] li,
  html[lang="my"] p, html[lang="my"] li,
  html[lang="ne"] p, html[lang="ne"] li {{
    line-height: 1.9;
  }}
</style>
</head>
<body>
  <main>
    <section class="page">
      <div class="sheet">
        <h1>{escape(data["name"])}</h1>
        <p class="subtitle">{escape(data["subtitle"])}</p>
        <p class="affiliation">{escape(data["affiliation"])}</p>
        <div class="rule"></div>
        <section><h2>{escape(labels["profile"])}</h2>{paragraphs(data["profile"])}</section>
        <section><h2>{escape(labels["current"])}</h2>{paragraphs(data["current"])}</section>
        <section><h2>{escape(labels["themes"])}</h2>{bullets(data["themes"])}</section>
        <div class="footer">{escape(labels["generated"])}</div>
      </div>
    </section>
    <section class="page">
      <div class="sheet">
        <section><h2>{escape(labels["papers"])}</h2>{bullets(data["papers"])}</section>
        <section><h2>{escape(labels["projects"])}</h2>{project_blocks(data["projects"])}</section>
        <section><h2>{escape(labels["links"])}</h2>{bullets(["https://ukyonagata.jp", "https://maas-creative.com", "https://researchmap.jp/ukyonagata", "https://x.com/ukyokyongt"])}</section>
        <div class="footer">{escape(labels["generated"])}</div>
      </div>
    </section>
  </main>
</body>
</html>"""


def generate() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)
    TMP.mkdir(parents=True, exist_ok=True)
    background_url = asset_data_url(BACKGROUND)
    outputs: list[Path] = []

    for locale in LOCALES:
        html = render_html(locale, background_url)
        html_path = TMP / f"profile-{locale}.html"
        output = PUBLIC / f"ukyo-nagata-profile-{locale}.pdf"
        html_path.write_text(html, encoding="utf-8")
        subprocess.run(["weasyprint", str(html_path), str(output)], check=True)
        outputs.append(output)

    shutil.copyfile(PUBLIC / "ukyo-nagata-profile-ja.pdf", PUBLIC / "ukyo-nagata-profile.pdf")
    print("Generated:")
    for output in outputs:
        print(f"- {output.relative_to(ROOT)}")
    print("- public/ukyo-nagata-profile.pdf")


if __name__ == "__main__":
    generate()
