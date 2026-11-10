#!/usr/bin/env python3
"""Generate the official M1 deliverable PDF for PROINZ G07 SpasiZalogaj.

Concatenates the M1 documentation chapters, renders HTML with academic styling,
and invokes macOS Headless Google Chrome to produce the deliverable PDF:
docs/deliverables/PROINZ26_G07_SpasiZalogaj_v1.pdf
"""

import html
import os
import re
import subprocess
import sys
from typing import List, Optional, Tuple

DOCS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "docs"))
DELIVERABLES_DIR = os.path.join(DOCS_DIR, "deliverables")
OUTPUT_PDF = os.path.join(DELIVERABLES_DIR, "PROINZ26_G07_SpasiZalogaj_v1.pdf")
CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

M1_FILES = [
    "Home.md",
    "1-Projekt.md",
    "2-Analiza-zahtjeva.md",
    "3-Obrasci-uporabe.md",
    "4-Arhitektura-i-oblikovanje.md",
    "6-Postavljanje-instalacija-i-konfiguracija.md",
    "A-Pregled-aktivnosti-grupe.md",
]


def build_title_page_html() -> str:
    """Generate the official FER project title page HTML."""
    return """
    <div class="title-page">
        <div class="header-institution">
            <h2>SVEUČILIŠTE U ZAGREBU</h2>
            <h3>FAKULTET ELEKTROTEHNIKE I RAČUNARSTVA</h3>
            <p>Zavod za elektroniku, mikroelektroniku, računalne i inteligentne sustave</p>
            <p>Kolegij: Programsko inženjerstvo (PROINZ 2026/27)</p>
        </div>
        <hr class="title-separator" />
        <div class="title-main">
            <h1>SpasiZalogaj</h1>
            <h2>Projektna dokumentacija – Ciklus 1 (M1)</h2>
            <p class="subtitle">Sustav za smanjenje otpada od hrane i povezivanje trgovina s građanima i humanitarnim udrugama</p>
        </div>
        <div class="title-meta">
            <p><strong>Grupa:</strong> G07</p>
            <p><strong>Tim:</strong> Menzory</p>
            <p><strong>Nositelj kolegija:</strong> prof. dr. sc. Vlado Sruk</p>
            <p><strong>Asistentica:</strong> doc. dr. sc. Iva Sović</p>
            <p><strong>Datum:</strong> Studeni 2026.</p>
        </div>
    </div>
    <div class="page-break"></div>
    """


def get_css_styles() -> str:
    """Return academic print stylesheet for PDF rendering."""
    return """
    @page {
        size: A4;
        margin: 22mm 18mm 22mm 18mm;
        @bottom-right {
            content: counter(page);
        }
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 10.5pt;
        line-height: 1.55;
        color: #212529;
        background: #FFFFFF;
    }
    .title-page {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 85vh;
        text-align: center;
        padding-top: 40px;
    }
    .header-institution h2 { font-size: 16pt; margin: 4px 0; letter-spacing: 0.5px; }
    .header-institution h3 { font-size: 13pt; margin: 4px 0; font-weight: normal; }
    .header-institution p { font-size: 10pt; color: #495057; margin: 2px 0; }
    .title-separator { border: none; border-top: 2px solid #1971c2; margin: 40px 0; }
    .title-main h1 { font-size: 28pt; margin: 10px 0; color: #1971c2; font-weight: bold; }
    .title-main h2 { font-size: 18pt; margin: 10px 0; color: #343a40; font-weight: 600; }
    .title-main .subtitle { font-size: 12pt; color: #495057; margin-top: 15px; max-width: 80%; margin-left: auto; margin-right: auto; }
    .title-meta { margin-top: 80px; text-align: left; font-size: 10pt; background: #f8f9fa; padding: 20px; border-radius: 6px; border: 1px solid #dee2e6; }
    .title-meta p { margin: 4px 0; }
    .page-break { page-break-after: always; }
    .chapter-break { page-break-before: always; }
    h1 { font-size: 18pt; color: #1971c2; border-bottom: 2px solid #1971c2; padding-bottom: 6px; margin-top: 30px; margin-bottom: 16px; }
    h2 { font-size: 14pt; color: #212529; border-bottom: 1px solid #dee2e6; padding-bottom: 4px; margin-top: 24px; margin-bottom: 12px; }
    h3 { font-size: 12pt; color: #343a40; margin-top: 18px; margin-bottom: 8px; }
    h4 { font-size: 11pt; color: #495057; margin-top: 14px; margin-bottom: 6px; }
    p { margin: 8px 0; text-align: justify; }
    ul, ol { margin: 8px 0 8px 24px; padding: 0; }
    li { margin: 3px 0; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 9.5pt; }
    th, td { border: 1px solid #ced4da; padding: 7px 10px; text-align: left; vertical-align: top; }
    th { background: #f1f3f5; font-weight: 600; color: #212529; }
    tr:nth-child(even) td { background: #fcfcfc; }
    pre { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 4px; padding: 10px 14px; font-family: "SF Mono", Monaco, Consolas, monospace; font-size: 8.5pt; overflow-x: auto; margin: 12px 0; white-space: pre-wrap; }
    code { font-family: "SF Mono", Monaco, Consolas, monospace; font-size: 9pt; background: #f1f3f5; padding: 2px 5px; border-radius: 3px; color: #d6336c; }
    blockquote { border-left: 4px solid #1971c2; margin: 12px 0; padding: 6px 16px; background: #e7f5ff; color: #1864ab; }
    img { max-width: 100%; height: auto; display: block; margin: 16px auto; }
    details { margin: 12px 0; padding: 8px 12px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 4px; }
    summary { font-weight: 600; cursor: pointer; color: #1971c2; }
    hr { border: none; border-top: 1px solid #dee2e6; margin: 24px 0; }
    """


def resolve_image_path(match: re.Match, base_dir: str) -> str:
    """Rewrite relative markdown image links to absolute file URLs."""
    alt = match.group(1)
    rel_path = match.group(2)
    abs_path = os.path.abspath(os.path.join(base_dir, rel_path))
    return f'<div class="diagram-wrapper"><img src="file://{abs_path}" alt="{html.escape(alt)}" /></div>'


def render_markdown_table(table_lines: List[str]) -> str:
    """Convert markdown table lines into clean HTML table markup."""
    if len(table_lines) < 2:
        return ""
    header_cols = [c.strip() for c in table_lines[0].strip().strip("|").split("|")]
    rows_html = []

    for line in table_lines[2:]:
        cols = [c.strip() for c in line.strip().strip("|").split("|")]
        cells = "".join(f"<td>{inline_markdown(c)}</td>" for c in cols)
        rows_html.append(f"<tr>{cells}</tr>")

    header_html = "".join(f"<th>{inline_markdown(c)}</th>" for c in header_cols)
    return f"<table><thead><tr>{header_html}</tr></thead><tbody>{''.join(rows_html)}</tbody></table>"


def inline_markdown(text: str) -> str:
    """Parse basic inline markdown: bold, italic, code, links."""
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"\*([^*]+)\*", r"<em>\1</em>", text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r"\1", text)
    return text


def parse_heading_line(stripped: str, is_first_chapter: bool) -> Optional[str]:
    """Parse markdown headings (# to ####) into HTML tags."""
    if stripped.startswith("# "):
        cls = "first-chapter" if is_first_chapter else "chapter-break"
        return f'<h1 class="{cls}">{inline_markdown(stripped[2:])}</h1>'
    if stripped.startswith("## "):
        return f"<h2>{inline_markdown(stripped[3:])}</h2>"
    if stripped.startswith("### "):
        return f"<h3>{inline_markdown(stripped[4:])}</h3>"
    if stripped.startswith("#### "):
        return f"<h4>{inline_markdown(stripped[5:])}</h4>"
    return None


def parse_block_line(stripped: str) -> str:
    """Parse blockquotes, lists, rules, and standard paragraphs."""
    if stripped.startswith(">"):
        return f"<blockquote>{inline_markdown(stripped.lstrip('> '))}</blockquote>"
    if stripped.startswith("- ") or stripped.startswith("* "):
        return f"<ul><li>{inline_markdown(stripped[2:])}</li></ul>"
    if re.match(r"^\d+\.\s+", stripped):
        item = re.sub(r"^\d+\.\s+", "", stripped)
        return f"<ol><li>{inline_markdown(item)}</li></ol>"
    if stripped in ("<details>", "</details>") or stripped.startswith("<summary>"):
        return stripped
    if stripped == "---":
        return "<hr />"
    return f"<p>{inline_markdown(stripped)}</p>"


def parse_line_element(stripped: str, is_first_chapter: bool) -> str:
    """Route a single non-empty line to heading or block parser."""
    heading = parse_heading_line(stripped, is_first_chapter)
    if heading is not None:
        return heading
    return parse_block_line(stripped)


def handle_code_toggle(in_code: bool, code_lines: List[str], html_out: List[str]) -> bool:
    """Handle code fence toggle and append rendered code block."""
    if in_code:
        html_out.append(f"<pre><code>{html.escape(chr(10).join(code_lines))}</code></pre>")
        code_lines.clear()
    return not in_code


def flush_table_if_active(in_table: bool, table_lines: List[str], html_out: List[str]) -> bool:
    """Flush pending table lines into html_out if table mode was active."""
    if in_table:
        html_out.append(render_markdown_table(table_lines))
        table_lines.clear()
    return False


def parse_markdown_to_html(md_content: str, base_dir: str, is_first_chapter: bool) -> str:
    """Parse a single markdown file content into structured HTML."""
    md_content = re.sub(r"!\[(.*?)\]\((.*?)\)", lambda m: resolve_image_path(m, base_dir), md_content)
    html_out: List[str] = []
    in_code = False
    code_lines: List[str] = []
    in_table = False
    table_lines: List[str] = []

    for line in md_content.splitlines():
        if line.strip().startswith("```"):
            in_code = handle_code_toggle(in_code, code_lines, html_out)
            continue
        if in_code:
            code_lines.append(line)
            continue
        if "|" in line and (line.strip().startswith("|") or in_table):
            in_table = True
            table_lines.append(line)
            continue
        in_table = flush_table_if_active(in_table, table_lines, html_out)
        stripped = line.strip()
        if stripped:
            html_out.append(parse_line_element(stripped, is_first_chapter))

    flush_table_if_active(in_table, table_lines, html_out)
    return "\n".join(html_out)


def compile_full_html() -> str:
    """Concatenate M1 documents and build the comprehensive HTML document."""
    sections = [build_title_page_html()]
    for idx, fname in enumerate(M1_FILES):
        fpath = os.path.join(DOCS_DIR, fname)
        if not os.path.exists(fpath):
            continue
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        parsed = parse_markdown_to_html(content, DOCS_DIR, is_first_chapter=(idx == 0))
        sections.append(parsed)

    return f"""<!DOCTYPE html>
<html lang="hr">
<head>
    <meta charset="utf-8" />
    <title>SpasiZalogaj – M1 Projektna dokumentacija</title>
    <style>{get_css_styles()}</style>
</head>
<body>
{''.join(sections)}
</body>
</html>
"""


def generate_pdf() -> None:
    """Generate the M1 deliverable PDF using macOS Google Chrome headless."""
    os.makedirs(DELIVERABLES_DIR, exist_ok=True)
    temp_html_path = "/tmp/spasizalogaj_m1.html"

    print("Compiling markdown chapters into unified HTML...")
    full_html = compile_full_html()
    with open(temp_html_path, "w", encoding="utf-8") as f:
        f.write(full_html)

    print(f"Printing PDF via headless Chrome to: {OUTPUT_PDF}...")
    cmd = [
        CHROME_BIN,
        "--headless",
        "--disable-gpu",
        f"--print-to-pdf={OUTPUT_PDF}",
        "--no-pdf-header-footer",
        temp_html_path,
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error during PDF generation: {res.stderr}", file=sys.stderr)
        sys.exit(1)

    if os.path.exists(OUTPUT_PDF):
        size_kb = round(os.path.getsize(OUTPUT_PDF) / 1024, 1)
        print(f"SUCCESS: Deliverable PDF created at {OUTPUT_PDF} ({size_kb} KB)")
    else:
        print("ERROR: PDF file was not created.", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    generate_pdf()
