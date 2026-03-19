/**
 * Приведение текста для фильтрации:
 *  - берём первые буквы слов (разделители пробелы/дефисы/подчёркивания)
 *  - если слово одно — фильтруем по его префиксу (чтобы ввод "da" находил "Dashboard")
 */
export function normalizeForFilter(text: string): string {
  return text.trim().toLowerCase();
}

export function getFirstLettersSignature(text: string): string {
  const normalized = text.trim();
  if (!normalized) return '';

  const parts = normalized.split(/[\s_-]+/).filter(Boolean);
  if (parts.length <= 1) {
    // Для одного слова поведение ближе к "по первым буквам" (префикс по самому слову).
    return normalized.toLowerCase();
  }

  return parts
    .map((p) => p[0])
    .join('')
    .toLowerCase();
}

/**
 * Совпадение query с первой-letters сигнатурой.
 * Например: "System Settings" => "ss", query "s" => match.
 */
export function matchesByFirstLetters(label: string, query: string): boolean {
  const q = normalizeForFilter(query);
  if (!q) return true;

  const sig = getFirstLettersSignature(label);
  return sig.startsWith(q);
}
