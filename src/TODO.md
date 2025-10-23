Core Utilities

src/components/common/utils/throttle.ts:2,8 – replace any with unknown via T extends (...args: unknown[]) => unknown and return a throttled function typed with Parameters<T>/ReturnType<T>.
src/components/common/utils/splitDataAttributes.ts:6 – make helpers generic (<S extends Record<string, unknown>, D extends Record<string, unknown>>) instead of accepting any.
src/components/common/utils/splitDataAttributes.ts:26 – return Partial<Record<string, string | number | boolean>> instead of Record<string, any> when collecting data attributes.
src/components/common/utils/cleanUpStoriesProps.ts:1 – accept Record<string, unknown> and return Partial<Record<string, unknown>> to avoid Record<any, any>.
src/components/Dropdown/utils.ts:10 – have calcNextFocus return Element | null so moveFocus works without any.
Form Wrappers

src/components/Field/index.tsx:169 – type fieldContainerProps as React.HTMLAttributes<HTMLDivElement> (or a dedicated FieldContainerProps) rather than Record<string, any>.
src/components/form/InputField/index.tsx:50 – share a typed FieldContainerProps interface instead of casting to Record<string, any>.
src/components/form/SelectField/index.tsx:50 – same pattern; reuse the shared field prop type so data attributes stay strongly typed.
src/components/form/SliderRangeField/index.tsx:51 – tighten to { 'data-field-id': string; 'data-field-name'?: string } & FieldOwnProps.
src/components/form/PhoneInputField/index.tsx:47 – avoid Record<string, any> by leveraging the shared container prop helper.
Navigation & Sliders

src/components/Range/index.tsx:14,141,170,201 – define onChange/handlers as (event: MouseEvent | TouchEvent, value: NumberRange) and propagate that type through throttled callbacks instead of any.
src/components/Slider/TickMarks.tsx:50,79,86 – type onPointClick as React.MouseEvent<HTMLDivElement> and use React.CSSProperties for style rather than any.
src/components/PaginationTwo/index.tsx:57,138,168 – use React.MouseEvent<HTMLButtonElement>/React.FormEvent<HTMLFormElement> for handlers to drop the any.
src/components/PaginationTwo/Items.tsx:116 – align item onClick to React.MouseEvent<HTMLButtonElement> to match the button element.
src/components/PaginationOne/index.tsx:132 & src/components/PaginationOne/Menu.tsx:80 – replace variadic ...props: any and Record<string, any> with concrete signatures (page: number, totalPages: number) etc. and Partial<Record<data-..., string | number | boolean>>.
Table

src/components/Table/types.ts:83 – make renderCell generic over row data (<TRow extends TableRow>), accepting keyof TRow instead of data: any.
src/components/Table/types.ts:120,131,139 – likewise type row arguments as TableRow (or a generic) rather than any.
src/components/Table/index.tsx:451,457 – switch casts (row as any) to safe indexed access by constraining TableRow to Record<string, unknown>.
src/components/Table/OverflowMenu.tsx:67 – type row as TableRow so consumers get proper completion.
src/components/Table/dragObserver.ts:16,46,99 – introduce a DragContext interface and explicit MouseEvent/HTMLElement types instead of pervasive any.
Calendar & Formatting

src/components/Calendar/dateUtils.ts:48 – define type AugmentedDate = Date & { utc: boolean } so you can drop the d: any cast.
src/components/Calendar/dateUtils.ts:75 – model the parser accumulator with an explicit interface (ParsedDateState) instead of dt: any.
src/components/Calendar/dateUtils.ts:107 – type arg1 as string | ParsedDateState and avoid chaining any.
src/components/Calendar/locales.ts:47 – replace (...props: any) with explicit signatures ((page: number, totalPages: number) => string, etc.) for locale callbacks.
src/components/Calendar/date-utils.ts:307 – accept date: unknown and narrow with instanceof Date before checking isNaN.
Misc Components

src/components/input/NumberInput/AutoSizeInput.tsx:227,233 – change newValue: any to string | undefined (matching input value) and update state setters accordingly.
src/components/Menu/SubMenuContainer.tsx:43 – replace useState<any>(null) with a boolean or counter (e.g. useState(0)) to retrigger layout without any.
src/components/Tooltip/utils.ts:27 – return InternalTooltipPositionType rather than any.
src/components/SelectTree/index.tsx:42 – type e as MouseEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLLIElement> instead of any.
src/components/Chips/index.tsx:139 – avoid e as any by exposing an onActivate prop that accepts React.KeyboardEvent | React.MouseEvent or by translating the keyboard event to a synthetic click.