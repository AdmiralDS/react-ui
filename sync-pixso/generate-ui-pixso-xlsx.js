const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const readline = require('readline');

const ROOT_DIR = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(ROOT_DIR, 'src', 'components');
const OUTPUT_XLSX = path.join(__dirname, 'ui-pixso-sync.xlsx');
const LOCKED_FALLBACK_XLSX = path.join(__dirname, 'ui-pixso-sync.locked.xlsx');

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

async function confirmOverwrite(filePath) {
  if (!process.stdin.isTTY) return false;

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const answer = await new Promise((resolve) =>
        rl.question(`A .xlsx file already exists under: ${filePath}\nOverwrite? (y/n): `, resolve),
      );
      const yn = normalizeYesNo(answer);
      if (yn !== null) return yn;
    }
  } finally {
    rl.close();
  }
}

/**
 * Recursively collect all *.stories.tsx files under a directory.
 * @param {string} dir
 * @returns {string[]}
 */
function collectStories(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectStories(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.stories.tsx')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Derive Storybook docs ID base from a Storybook title.
 * Mirrors Storybook's default ID generation: lowercased, non-alphanumerics replaced with dashes.
 * @param {string} title
 * @returns {string}
 */
function makeStorybookIdBase(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Parse a *.stories.tsx file to extract Storybook title and component name.
 * @param {string} filePath
 */
function parseStoriesFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  const titleMatch = content.match(/title:\s*'([^']+)'/);
  if (!titleMatch) return null;

  const title = titleMatch[1];
  const segments = title.split('/');
  const componentName = segments[segments.length - 1].trim();

  // Exclude "common examples" pseudo-components from mapping output
  if (componentName === 'Общие примеры' || componentName.toLowerCase() === 'common examples') {
    return null;
  }

  return { title, componentName };
}

function buildWorkbookRows(components) {
  const header = ['Component', 'Pixso', 'UI KIT', 'Status', 'Link'];
  const rows = [header];

  components.forEach((component) => {
    // Special-case Select "modes" (Storybook IDs are percent-encoded for Cyrillic segments)
    if (component.componentName === 'режим "searchSelect"') {
      rows.push([
        'SearchSelect режим',
        '',
        '✅',
        '',
        'https://admiralds.github.io/react-ui/?path=/docs/admiral-2-1-input-select-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC-searchselect--docs',
      ]);
      return;
    }
    if (component.componentName === 'режим "select"') {
      rows.push([
        'Select режим',
        '',
        '✅',
        '',
        'https://admiralds.github.io/react-ui/?path=/docs/admiral-2-1-input-select-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC-select--docs',
      ]);
      return;
    }

    const idBase = makeStorybookIdBase(component.title);
    const link = `https://admiralds.github.io/react-ui/?path=/docs/${idBase}--docs`;
    rows.push([component.componentName, '', '✅', '', link]);
  });

  return rows;
}

function writeXlsx(rows) {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, 'UI KIT');
  try {
    XLSX.writeFile(wb, OUTPUT_XLSX);
    return OUTPUT_XLSX;
  } catch (e) {
    if (e && (e.code === 'EBUSY' || e.code === 'EPERM')) {
      XLSX.writeFile(wb, LOCKED_FALLBACK_XLSX);
      return LOCKED_FALLBACK_XLSX;
    }
    throw e;
  }
}

async function main() {
  const { force } = parseArgs(process.argv);

  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.error(`Components directory not found: ${COMPONENTS_DIR}`);
    process.exit(1);
  }

  fs.mkdirSync(__dirname, { recursive: true });

  if (fs.existsSync(OUTPUT_XLSX) && !force) {
    const ok = await confirmOverwrite(OUTPUT_XLSX);
    if (!ok) {
      console.error('Aborted: output XLSX already exists.');
      process.exit(1);
    }
  }

  const storiesFiles = collectStories(COMPONENTS_DIR);
  const parsed = storiesFiles.map(parseStoriesFile).filter(Boolean);

  // De-duplicate by title
  const byTitle = new Map();
  parsed.forEach((item) => {
    if (!byTitle.has(item.title)) byTitle.set(item.title, item);
  });

  const components = Array.from(byTitle.values()).sort((a, b) => a.componentName.localeCompare(b.componentName, 'ru'));
  const outPath = writeXlsx(buildWorkbookRows(components));

  // eslint-disable-next-line no-console
  console.log(`Generated: ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
