import { InputField } from '#src/components/form';
import type { TooltipHocProps } from '..';
import { TooltipHoc } from '..';

const TooltipedInput = TooltipHoc(InputField);

// Компонент для генерации таблицы с TooltipHocProps. К сожалению storybook пока не умеет корректно работать напрямую с HOC
// В компонент обязательно должны передаваться TooltipHocProps для правильной генерации таблицы с пропсами в storybook
export const TooltipHocStory = (props: TooltipHocProps) => <TooltipedInput {...props} />;
