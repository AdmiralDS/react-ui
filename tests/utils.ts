import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

export const UNDO_SHORTCUT = process.platform === 'darwin' ? 'Meta+KeyZ' : 'Control+KeyZ';

export const RU_MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export function getStorybookFrameLocator(page: Page) {
  return page.frameLocator('#storybook-preview-iframe');
}

/**
 * Делает click по элементу
 * и ждет timeout (по умолчанию 400) мс (для отработки анимации).
 */
export async function clickAndWait(el: Locator, page: Page, timeout?: number) {
  await el.click();
  // ждём анимацию
  await page.waitForTimeout(timeout || 400);
}

/**
 * Программно меняет размер элемента через inline-стили
 * и дожидается применения новых размеров.
 */
export async function resizeElement(locator: Locator, width?: number, height?: number) {
  await locator.evaluate(
    (el, { width, height }) => {
      if (width) (el as HTMLElement).style.width = `${width}px`;
      if (height) (el as HTMLElement).style.height = `${height}px`;
    },
    { width, height },
  );

  // ждём, пока Playwright увидит изменения
  if (width) await expect(locator).toHaveCSS('width', `${width}px`);
  if (height) await expect(locator).toHaveCSS('height', `${height}px`);
}

/**
 * Получает индексы видимых и кликабельных дней календаря
 */
export function getVisibleDayIndices(elements: Element[]): number[] {
  return elements.reduce<number[]>((indices, el, index) => {
    const style = window.getComputedStyle(el);
    if (style.opacity !== '0' && style.pointerEvents !== 'none') {
      indices.push(index);
    }
    return indices;
  }, []);
}

/**
 * Парсит дату из формата DD.MM.YYYY в Date объект (UTC)
 */
export function parseRuInputDate(value: string): Date {
  const [dd, mm, yyyy] = value.split('.').map((v) => Number(v));
  if (!dd || !mm || !yyyy) throw new Error(`Cannot parse date from "${value}"`);
  return new Date(Date.UTC(yyyy, mm - 1, dd));
}

/**
 * Форматирует Date в формат DD.MM.YYYY (UTC)
 */
export function formatRuDate(date: Date): string {
  const dd = String(date.getUTCDate()).padStart(2, '0');
  const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getUTCFullYear());
  return `${dd}.${mm}.${yyyy}`;
}

/**
 * Находит индекс дня в календаре, который больше указанного дня
 */
export function findDayIndexAfter(elements: Element[], startDay: number): { indices: number[]; targetIndex: number } {
  const visibleIndices = getVisibleDayIndices(elements);
  const targetIndex = visibleIndices.find((index) => {
    const text = elements[index].textContent?.trim() || '';
    const day = Number(text);
    return Number.isFinite(day) && day > startDay;
  });
  return {
    indices: visibleIndices,
    targetIndex: targetIndex ?? visibleIndices[0] ?? -1,
  };
}

/**
 * Получает текст месяца и года из панели календаря
 */
export async function getCalendarPanelDate(panel: Locator): Promise<{ month: string; year: string }> {
  const month = await panel.locator('h6').first().textContent();
  const year = await panel.locator('h6').nth(1).textContent();
  if (!month || !year) throw new Error('Cannot get month/year from calendar panel');
  return { month, year };
}

/**
 * Получает кнопки навигации (prev/next) из панели календаря
 */
export function getCalendarNavigationButtons(panel: Locator) {
  return {
    prev: panel.getByRole('button').first(),
    next: panel.getByRole('button').last(),
  };
}

/**
 * Проверяет, что дата находится в диапазоне (включительно)
 */
export function isDateInRange(date: Date, start: Date, end: Date): boolean {
  return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
}

/**
 * Создает дату из строки формата DD.MM.YYYY или возвращает null для маски
 */
export function parseDateOrNull(value: string): Date | null {
  if (value.includes('_') || value.trim() === '') return null;
  return parseRuInputDate(value);
}

/**
 * Валидирует формат даты DD.MM.YYYY
 */
export function isValidDateFormat(value: string): boolean {
  return /^\d{2}\.\d{2}\.\d{4}$/.test(value);
}

/**
 * Валидирует формат диапазона дат DD.MM.YYYY - DD.MM.YYYY
 */
export function isValidDateRangeFormat(value: string): boolean {
  const parts = value.split(' - ');
  return parts.length === 2 && parts.every((part) => isValidDateFormat(part) || part.includes('_'));
}
