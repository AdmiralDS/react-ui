import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { InputStatus } from '#src/components/input/types';
import { skeletonMixin } from '#src/components/input/Container';
import { CharacterCounter } from '#src/components/input/TextArea/CharacterCounter';
import { AdditionalLabel, Label, MainLabel } from '#src/components/Label';
import { uid } from '#src/components/common/uid';
import { typography } from '#src/components/Typography';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

const ContentWrapper = styled.div`
  min-width: 0;
`;

const inlineMixin = css`
  flex-direction: row;
  align-items: center;

  ${Label} {
    margin: 0 8px 0 0;
  }

  ${ContentWrapper} {
    flex: 1 1 auto;
  }
`;

const Container = styled.div<{ $displayInline?: boolean }>`
  display: flex;
  overflow: hidden;
  ${(props) => (props.$displayInline ? inlineMixin : 'flex-direction: column;')}
`;

const SkeletonLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 50%;
  margin-bottom: 8px;
  ${skeletonMixin}
`;

const LabelContainer = styled.div`
  position: relative;
  text-align: left;
`;

const textSkeletonMixin = css`
  color: transparent;
`;

const StyledLabel = styled(Label)<{ $skeleton?: boolean }>`
  ${(p) => p.$skeleton && textSkeletonMixin};
`;

const containerSkeletonMixin = css`
  visibility: hidden;
`;

export const ExtrasContainer = styled.div<{ $skeleton?: boolean }>`
  display: flex;
  justify-content: space-between;
  min-width: 0;
  ${(p) => p.$skeleton && containerSkeletonMixin};
`;

export const ExtraTextContainer = styled.div<{ $cssMixin?: ReturnType<typeof css> }>`
  flex: 1 1 auto;
  min-width: 0;

  && {
    overflow-wrap: break-word;
  }

  padding-top: 8px;

  text-align: left;

  ${typography['Body/Body 2 Short']}

  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});

  [data-disabled] & {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  [data-status='error'] & {
    color: var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  [data-status='success'] & {
    color: var(--admiral-color-Success_Success50Main, ${(p) => p.theme.color['Success/Success 50 Main']});
  }

  &&& {
    ${(p) => p.$cssMixin && p.$cssMixin}
  }
`;

export interface FieldOwnProps {
  /** Текст будет виден ниже компонента */
  extraText?: React.ReactNode;

  /** Установка статуса поля */
  status?: InputStatus;

  /** Установка статуса поле обязательно для заполнения */
  required?: boolean;

  /** Установка статуса disabled */
  disabled?: boolean;

  readOnly?: boolean;

  /**  Имя поля формы */
  label?: React.ReactNode;
  /**  Дополнительное имя поля формы */
  additionalLabel?: React.ReactNode;

  /** Отключает показ tooltip для лейблов при переполнении текста.
   * По умолчанию все тултипы отключены (все значения = true) */
  disableLabelTooltips?: {
    /** Отключает tooltip для основного лейбла (label) */
    label?: boolean;
    /** Отключает tooltip для дополнительного лейбла (additionalLabel) */
    additionalLabel?: boolean;
    /** Отключает tooltip для дополнительного текста (extraText) */
    extraText?: boolean;
  };

  /** CSS миксины для переопределения стилей лейблов */
  labelCssMixins?: {
    /** CSS миксин для переопределения стилей основного лейбла (MainLabel) */
    label?: ReturnType<typeof css>;
    /** CSS миксин для переопределения стилей дополнительного лейбла (AdditionalLabel) */
    additionalLabel?: ReturnType<typeof css>;
    /** CSS миксин для переопределения стилей дополнительного текста (ExtraTextContainer) */
    extraText?: ReturnType<typeof css>;
  };

  /** Отображать лейбл в одну строчку с инпутом */
  displayInline?: boolean;

  /** Максимальное количество символов для ввода */
  maxLength?: number;

  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;

  /**
   * Позволяет отключать появление счетчика символов при задании maxLength
   */
  displayCharacterCounter?: boolean;

  /** Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
   *  0 - всегда видим
   *  1 - всегда невидим
   *  по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества */
  characterCounterVisibilityThreshold?: number;

  /** Состояние skeleton */
  skeleton?: boolean;
}

const PositionedCharacterCounter = styled(CharacterCounter)`
  flex: 0 0 auto;
  padding: 8px 0 0 8px;
`;

type LabelComponent = typeof MainLabel | typeof AdditionalLabel | typeof ExtraTextContainer;

interface LabelWithTooltipProps {
  children: React.ReactNode;
  disableTooltip?: boolean;
  cssMixin?: ReturnType<typeof css>;
  Component: LabelComponent;
}

const LabelWithTooltip = ({ children, disableTooltip = true, cssMixin, Component }: LabelWithTooltipProps) => {
  const labelRef = useRef<HTMLDivElement>(null);
  const [overflowActive, setOverflowActive] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useLayoutEffect(() => {
    if (labelRef.current && checkOverflow(labelRef.current) !== overflowActive) {
      setOverflowActive(checkOverflow(labelRef.current));
    }
  }, [tooltipVisible, overflowActive]);

  useEffect(() => {
    if (disableTooltip) {
      setTooltipVisible(false);
      return;
    }
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const label = labelRef.current;
    if (label) {
      label.addEventListener('mouseenter', show);
      label.addEventListener('mouseleave', hide);
      return () => {
        label.removeEventListener('mouseenter', show);
        label.removeEventListener('mouseleave', hide);
      };
    }
  }, [disableTooltip]);

  const showTooltip = !disableTooltip && tooltipVisible && overflowActive && typeof children === 'string';

  return (
    <>
      <Component ref={labelRef} $cssMixin={cssMixin}>
        {children}
      </Component>
      {showTooltip && <Tooltip targetElement={labelRef.current} renderContent={() => children} />}
    </>
  );
};

export interface FieldProps extends FieldOwnProps, React.HTMLAttributes<HTMLDivElement> {}

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      children,
      maxLength,
      inputRef,
      displayCharacterCounter = true,
      characterCounterVisibilityThreshold = 0.8,
      ...props
    }: FieldProps,
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasFocus, setFocus] = useState(false);

    const {
      className,
      style,
      displayInline,
      status,
      extraText,
      label,
      additionalLabel,
      required,
      disabled,
      id,
      skeleton = false,
      labelCssMixins,
      disableLabelTooltips = { label: true, additionalLabel: true, extraText: true },
      ...restFieldProps
    } = props;
    const [defaultID] = useState(uid());
    const fieldContainerProps = { className, style, ...restFieldProps } as Record<string, unknown>;

    const labelProps = { htmlFor: id ?? defaultID, required, disabled };

    useEffect(() => {
      const onFocusIn = () => {
        setFocus(true);
      };
      const onFocusOut = () => {
        setFocus(false);
      };

      const containerNode = containerRef.current;
      if (containerNode) {
        containerNode.addEventListener('focusin', onFocusIn);
        containerNode.addEventListener('focusout', onFocusOut);
      }
      return () => {
        if (containerNode) {
          containerNode.removeEventListener('focusin', onFocusIn);
          containerNode.removeEventListener('focusout', onFocusOut);
        }
      };
    }, []);

    return (
      <Container
        {...fieldContainerProps}
        $displayInline={displayInline}
        data-status={status}
        data-focus-within={hasFocus ? '' : undefined}
        data-required-within={required ? '' : undefined}
        data-disabled={disabled ? '' : undefined}
        data-read-only={props.readOnly ? true : undefined}
        ref={refSetter(containerRef, ref)}
      >
        {(label || additionalLabel) && (
          <LabelContainer>
            {skeleton && <SkeletonLabel />}
            <StyledLabel $skeleton={skeleton} {...labelProps}>
              {label && (
                <LabelWithTooltip
                  disableTooltip={disableLabelTooltips.label}
                  cssMixin={labelCssMixins?.label}
                  Component={MainLabel}
                >
                  {label}
                </LabelWithTooltip>
              )}
              {additionalLabel && !displayInline && (
                <LabelWithTooltip
                  disableTooltip={disableLabelTooltips.additionalLabel}
                  cssMixin={labelCssMixins?.additionalLabel}
                  Component={AdditionalLabel}
                >
                  {additionalLabel}
                </LabelWithTooltip>
              )}
            </StyledLabel>
          </LabelContainer>
        )}
        <ContentWrapper>
          {children}
          <ExtrasContainer $skeleton={skeleton}>
            {extraText && (
              <LabelWithTooltip
                disableTooltip={disableLabelTooltips.extraText}
                cssMixin={labelCssMixins?.extraText}
                Component={ExtraTextContainer}
              >
                {extraText}
              </LabelWithTooltip>
            )}

            {displayCharacterCounter && inputRef && maxLength !== undefined && (
              <>
                {/* div необходим для сдвига счетчика вправо при отсутствии текста */}
                <div></div>
                <PositionedCharacterCounter
                  maxLength={maxLength}
                  visibilityThreshold={characterCounterVisibilityThreshold}
                  inputRef={inputRef}
                />
              </>
            )}
          </ExtrasContainer>
        </ContentWrapper>
      </Container>
    );
  },
);

Field.displayName = 'Field';
