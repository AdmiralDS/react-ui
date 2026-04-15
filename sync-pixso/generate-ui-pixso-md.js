const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const readline = require('readline');

const ROOT_DIR = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(ROOT_DIR, 'src', 'components');
const INPUT_XLSX = path.join(__dirname, 'ui-pixso-sync.xlsx');
const INPUT_XLSX_LOCKED_FALLBACK = path.join(__dirname, 'ui-pixso-sync.locked.xlsx');
const OUTPUT_ROOT = __dirname; // sync-pixso/

const CATEGORIES = [
  'data-input',
  'form',
  'table',
  'navigation',
  'overlays',
  'data-picker',
  'data-display',
  'react-primitives',
  'tokens',
  'other',
];

function parseArgs(argv) {
  const args = new Set(argv.slice(2));
  return {
    force: args.has('--force') || args.has('-f') || process.env.SYNC_FORCE === '1',
  };
}

function normalizeYesNo(answer) {
  const a = String(answer ?? '')
    .trim()
    .toLowerCase();
  if (['y', 'yes', 'д', 'да'].includes(a)) return true;
  if (['n', 'no', 'н', 'нет'].includes(a)) return false;
  return null;
}

async function confirmOverwriteMarkdown(rootDir) {
  if (!process.stdin.isTTY) return false;

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const answer = await new Promise((resolve) =>
        rl.question(`\nSome .md files already exist under: ${rootDir}\nOverwrite existing .md files? (y/n): `, resolve),
      );
      const yn = normalizeYesNo(answer);
      if (yn !== null) return yn;
    }
  } finally {
    rl.close();
  }
}

function sanitizeFileName(name) {
  return String(name)
    .trim()
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, '_')
    .replace(/\s+/g, ' ')
    .slice(0, 180);
}

function collectMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectMarkdownFiles(fullPath));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) out.push(fullPath);
  }
  return out;
}

function removeMarkdownFiles(dir) {
  collectMarkdownFiles(dir).forEach((filePath) => {
    try {
      fs.unlinkSync(filePath);
    } catch {
      // ignore
    }
  });
}

function collectStories(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...collectStories(fullPath));
    else if (entry.isFile() && entry.name.endsWith('.stories.tsx')) files.push(fullPath);
  }
  return files;
}

function makeStorybookIdBase(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseStoriesFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const titleMatch = content.match(/title:\s*'([^']+)'/);
  if (!titleMatch) return null;

  const title = titleMatch[1];

  const storyNameRegex = /name:\s*'([^']+)'/g;
  const featureNames = [];
  const seen = new Set();
  let m;
  while ((m = storyNameRegex.exec(content)) !== null) {
    const label = m[1].trim();
    if (label && !seen.has(label)) {
      seen.add(label);
      featureNames.push(label);
    }
  }

  return { title, filePath, featureNames };
}

function extractIdBaseFromLink(link) {
  const m = String(link).match(/\/docs\/(.+?)--(?:docs|page)\b/);
  return m ? m[1] : null;
}

function classifyCategory(storyFilePath, storyTitle, componentName) {
  const p = String(storyFilePath || '')
    .replace(/\//g, '\\')
    .toLowerCase();
  const title = String(storyTitle || '').toLowerCase();
  const name = String(componentName || '').toLowerCase();

  // Tokens / themes
  if (
    p.includes('\\csscustomprops\\') ||
    title.includes('css custom properties') ||
    name.includes('css custom properties')
  ) {
    return 'tokens';
  }

  // React primitives (basic building blocks)
  const primitiveNames = new Set([
    'button',
    'buttongroup',
    'iconbutton',
    'iconbuttongroup',
    'iconplacement',
    'link',
    'text button',
    'textbuttonmenu',
    'divider',
    'flex.container',
    't',
    'hint',
  ]);
  if (primitiveNames.has(name)) return 'react-primitives';

  if (p.includes('\\input\\')) return 'data-input';
  if (p.includes('\\form\\')) return 'form';

  // Data pickers
  if (
    p.includes('\\calendar\\') ||
    p.includes('\\dateinput\\') ||
    p.includes('\\timepicker\\') ||
    p.includes('\\timeinput\\') ||
    p.includes('\\datetime') ||
    title.includes('calendar') ||
    title.includes('date') ||
    title.includes('time')
  ) {
    return 'data-picker';
  }

  // Tables
  if (p.includes('\\table\\') || title.includes('data table') || title.includes('/table')) return 'table';

  // Overlays / popups
  if (
    p.includes('\\modal\\') ||
    p.includes('\\drawer\\') ||
    p.includes('\\toast\\') ||
    p.includes('\\tooltip') ||
    p.includes('\\overflowmenu\\') ||
    (p.includes('\\menu\\') &&
      p.includes('\\stories\\') &&
      (title.includes('menu') || name.includes('menu')) &&
      !p.includes('\\tagmenu\\'))
  ) {
    return 'overlays';
  }

  // Navigation
  if (
    p.includes('\\breadcrumbs\\') ||
    p.includes('\\pagination') ||
    p.includes('\\stepper\\') ||
    p.includes('\\tab') ||
    p.includes('\\menu\\') ||
    p.includes('\\anchor\\')
  ) {
    return 'navigation';
  }

  // Data display (default for many visuals)
  if (
    p.includes('\\accordion\\') ||
    p.includes('\\carousel\\') ||
    p.includes('\\avatar') ||
    p.includes('\\badge') ||
    p.includes('\\chips\\') ||
    p.includes('\\list\\') ||
    p.includes('\\tag') ||
    p.includes('\\typography\\') ||
    p.includes('\\spinner\\') ||
    p.includes('\\progress') ||
    title.includes('accordion') ||
    title.includes('carousel')
  ) {
    return 'data-display';
  }

  // Fall back: try to map "Data Table" group from title
  if (title.includes('data table')) return 'table';

  return 'other';
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

async function main() {
  const { force } = parseArgs(process.argv);
  const pkgPath = path.join(ROOT_DIR, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const libVersion = pkg.version;

  if (!fs.existsSync(INPUT_XLSX) && !fs.existsSync(INPUT_XLSX_LOCKED_FALLBACK)) {
    console.error(`Input XLSX not found: ${INPUT_XLSX}`);
    process.exit(1);
  }
  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.error(`Components directory not found: ${COMPONENTS_DIR}`);
    process.exit(1);
  }

  // Prepare categories folders
  CATEGORIES.forEach((c) => ensureDir(path.join(OUTPUT_ROOT, c)));

  if (!force) {
    const existing = CATEGORIES.flatMap((c) => collectMarkdownFiles(path.join(OUTPUT_ROOT, c)));
    if (existing.length > 0) {
      const ok = await confirmOverwriteMarkdown(OUTPUT_ROOT);
      if (!ok) {
        console.error('Aborted: markdown output already exists.');
        process.exit(1);
      }
    }
  }

  // If we're going to overwrite, wipe previously generated markdown first,
  // so that moves between categories don't leave duplicates behind.
  if (force || !process.stdin.isTTY) {
    // In non-interactive runs, overwrite was either forced or already allowed to proceed.
    CATEGORIES.forEach((c) => removeMarkdownFiles(path.join(OUTPUT_ROOT, c)));
  } else {
    // In interactive runs we only get here after user confirmation (see block above).
    CATEGORIES.forEach((c) => removeMarkdownFiles(path.join(OUTPUT_ROOT, c)));
  }

  // Parse stories and map by idBase
  const storiesFiles = collectStories(COMPONENTS_DIR);
  const byIdBase = new Map(); // idBase => { title, filePath, featureNames[] }

  storiesFiles.forEach((filePath) => {
    const parsed = parseStoriesFile(filePath);
    if (!parsed) return;
    const idBase = makeStorybookIdBase(parsed.title);

    const existing = byIdBase.get(idBase);
    if (!existing) {
      byIdBase.set(idBase, { ...parsed });
    } else {
      // Merge features (keep stable order)
      const merged = [...existing.featureNames];
      const seen = new Set(merged);
      parsed.featureNames.forEach((f) => {
        if (!seen.has(f)) {
          seen.add(f);
          merged.push(f);
        }
      });
      byIdBase.set(idBase, { ...existing, featureNames: merged });
    }
  });

  // Read XLSX order (already edited by you)
  const xlsxToRead = fs.existsSync(INPUT_XLSX_LOCKED_FALLBACK) ? INPUT_XLSX_LOCKED_FALLBACK : INPUT_XLSX;
  const wb = XLSX.readFile(xlsxToRead);
  const ws = wb.Sheets['UI KIT'];
  if (!ws) {
    console.error(`Sheet 'UI KIT' not found in ${xlsxToRead}`);
    process.exit(1);
  }

  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true });
  const header = rows[0] ?? [];
  const componentIdx = header.indexOf('Component');
  const linkIdx = header.indexOf('Link');
  if (componentIdx < 0 || linkIdx < 0) {
    console.error(`Cannot find required columns in XLSX header: ${header.join(', ')}`);
    process.exit(1);
  }

  let written = 0;
  const selectModeBlocks = [];
  const selectModeFilePath = path.join(OUTPUT_ROOT, 'data-input', 'Select.md');

  for (let i = 1; i < rows.length; i += 1) {
    const row = rows[i] ?? [];
    const componentName = row[componentIdx];
    const link = row[linkIdx];
    if (!componentName) continue;
    if (String(componentName) === 'Общие примеры' || String(componentName).toLowerCase() === 'common examples')
      continue;

    // Special-case Select modes: XLSX links contain percent-encoded Cyrillic, while story IDs in codebase resolve to ASCII.
    const normalizedIdBase =
      componentName === 'SearchSelect режим'
        ? 'admiral-2-1-input-select-searchselect'
        : componentName === 'Select режим'
          ? 'admiral-2-1-input-select-select'
          : null;

    const idBase = normalizedIdBase ?? extractIdBaseFromLink(link);
    const storyInfo = idBase ? byIdBase.get(idBase) : null;
    const features = storyInfo?.featureNames ?? [];
    const category = classifyCategory(storyInfo?.filePath, storyInfo?.title, componentName);

    const blockLines = [];
    blockLines.push(`Component: ${componentName}`);
    blockLines.push('Features:');
    if (features.length === 0) blockLines.push(`✅ Нет отдельных демонстрационных сценариев (v${libVersion})`);
    else features.forEach((f) => blockLines.push(`✅ ${f} (v${libVersion})`));
    blockLines.push('');

    // Keep Select modes together in one file.
    if (componentName === 'SearchSelect режим' || componentName === 'Select режим') {
      selectModeBlocks.push(blockLines.join('\n'));
      continue;
    }

    const fileName = `${sanitizeFileName(componentName)}.md`;
    const outPath = path.join(OUTPUT_ROOT, category, fileName);
    fs.writeFileSync(outPath, blockLines.join('\n'), 'utf8');
    written += 1;
  }

  if (selectModeBlocks.length > 0) {
    ensureDir(path.dirname(selectModeFilePath));
    fs.writeFileSync(selectModeFilePath, selectModeBlocks.join('\n'), 'utf8');
  }

  // Cleanup legacy per-mode files (older naming from Storybook title segment)
  ['режим _searchSelect_.md', 'режим _select_.md'].forEach((legacyFile) => {
    const legacyPath = path.join(OUTPUT_ROOT, 'data-input', legacyFile);
    try {
      if (fs.existsSync(legacyPath)) fs.unlinkSync(legacyPath);
    } catch {
      // ignore
    }
  });

  // eslint-disable-next-line no-console
  console.log(`Generated ${written} markdown files under: ${OUTPUT_ROOT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
