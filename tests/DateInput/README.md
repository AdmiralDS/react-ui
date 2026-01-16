# DateInput Tests

Этот каталог содержит E2E тесты для компонента DateInput.

## Доступные тесты

### dateInputUndo.spec.ts
Проверяет, что нативная функция undo отключена для DateInput.

### dateInputCalendar.spec.ts
Проверяет корректное поведение календаря DateInput:

1. **preserves year when calendar is reopened with previously selected date**
   - Проверяет, что при повторном открытии календаря сохраняется выбранный год (не сбрасывается на текущий)
   - Тестовый сценарий:
     - Открыть календарь
     - Выбрать дату из предыдущего года (например, 15.11.2023)
     - Закрыть календарь
     - Открыть календарь снова
     - Убедиться, что год 2023 отображается, а не текущий год

2. **preserves year when date is typed manually and calendar is reopened**
   - Проверяет, что год сохраняется, когда дата введена вручную
   - Тестовый сценарий:
     - Ввести дату вручную (например, 20.03.2022)
     - Открыть календарь
     - Убедиться, что календарь показывает март 2022, а не текущую дату
     - Закрыть и открыть снова
     - Убедиться, что год все еще 2022

3. **preserves year for future dates when calendar is reopened**
   - Проверяет, что год сохраняется для будущих дат
   - Тестовый сценарий:
     - Ввести дату из будущего (например, 01.06.2027)
     - Открыть календарь
     - Убедиться, что календарь показывает июнь 2027

4. **preserves year when switching between dates with different years**
   - Проверяет, что при смене дат с разными годами календарь корректно обновляется
   - Тестовый сценарий:
     - Установить дату 10.05.2020
     - Открыть календарь и проверить год 2020
     - Изменить дату на 25.12.2024
     - Открыть календарь и проверить, что год обновился на 2024

### dateInputRangeCalendar.spec.ts
Проверяет корректное поведение календаря DateInput в режиме выбора диапазона дат:

1. **preserves year when range calendar is reopened with previously selected date range**
   - Проверяет, что при повторном открытии календаря сохраняется год начальной даты диапазона

2. **preserves year when range dates are typed manually and calendar is reopened**
   - Проверяет, что год сохраняется для диапазона дат, введенного вручную

3. **preserves start date year when range spans multiple years**
   - Проверяет, что календарь открывается на начальной дате, когда диапазон пересекает границу года

## Запуск тестов

### Предварительные требования

1. Установите зависимости:
```bash
npm install
```

2. Запустите Storybook в отдельном терминале:
```bash
npm run storybook
```
Убедитесь, что Storybook доступен по адресу http://localhost:6006

### Запуск всех E2E тестов

```bash
npm run test:e2e
```

### Запуск тестов DateInput

```bash
npm run test:e2e -- tests/DateInput
```

### Запуск конкретного файла

```bash
npm run test:e2e -- tests/DateInput/dateInputCalendar.spec.ts
```

### Запуск в UI режиме (с визуализацией)

```bash
npm run test:e2e-ui
```

### Запуск в debug режиме

```bash
npx playwright test --debug tests/DateInput/dateInputCalendar.spec.ts
```

## Связанные исправления

Эти тесты покрывают исправление бага, где год сбрасывался на текущий при повторном открытии календаря DateInput с выбранной датой из другого года.

**Issue**: При использовании DateInput и выборе даты из предыдущего года, закрытии календаря и повторном открытии, год сбрасывался на текущий (день и месяц сохранялись).

**Fix**: Обновлена логика в `src/components/Calendar/index.tsx`, чтобы напрямую использовать значение `selected` или `startDate` (для режима диапазона) при обновлении `viewDate`, вместо вызова `getInitialViewDate()`, который мог возвращать текущую дату.

## Структура тестов

Все тесты используют:
- `@playwright/test` - фреймворк для E2E тестирования
- Storybook stories в качестве тестовых сред
- Вспомогательные функции из `tests/utils.ts`:
  - `getStorybookFrameLocator()` - получение фрейма Storybook
  - `clickAndWait()` - клик с ожиданием анимации
