import styled from 'styled-components';
import { gapMixin } from '@admiral-ds/react-ui';
import type { GapMixinType } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ExampleCard = styled.article`
  padding: 20px;
  border-radius: 16px;
  border: 1px solid var(--admiral-color-Neutral_Neutral20, ${({ theme }) => theme.color['Neutral/Neutral 20']});
  background: var(--admiral-color-Opacity_Neutral1, ${({ theme }) => theme.color['Opacity/Neutral 08']});
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ExampleTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  color: var(--admiral-color-Neutral_Neutral90, ${({ theme }) => theme.color['Neutral/Neutral 90']});
`;

const ExampleDescription = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: var(--admiral-color-Neutral_Neutral70, ${({ theme }) => theme.color['Neutral/Neutral 70']});
`;

const ComparisonGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const ComparisonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ComparisonLabel = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: var(--admiral-color-Neutral_Neutral60, ${({ theme }) => theme.color['Neutral/Neutral 60']});
`;

const FlexContainer = styled.div<{ $direction?: 'row' | 'column'; $wrap?: boolean; $width?: number }>`
  display: flex;
  flex-direction: ${({ $direction = 'row' }) => $direction};
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
  width: ${({ $width }) => ($width ? `${$width}px` : 'auto')};
  padding: 12px;
  border-radius: 12px;
  background: var(--admiral-color-Neutral_Neutral05, ${({ theme }) => theme.color['Neutral/Neutral 05']});
`;

const GapFlexContainer = styled(FlexContainer)<{ $gap: number; $type?: GapMixinType }>`
  ${gapMixin}
`;

const HorizontalFlexWithGap = styled(FlexContainer)`
  gap: 12px;
`;

const VerticalFlexWithGap = styled(FlexContainer)`
  flex-direction: column;
  gap: 12px;
`;

const GridGapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 140px;
  padding: 12px;
  border-radius: 12px;
  gap: 12px;
  background: var(--admiral-color-Neutral_Neutral05, ${({ theme }) => theme.color['Neutral/Neutral 05']});
`;

const Item = styled.div.attrs({ 'data-testid': 'gapExampleItem' })`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--admiral-color-Primary_Primary60Main, ${({ theme }) => theme.color['Primary/Primary 60 Main']});
`;

const ItemSet = () => (
  <>
    {[0, 1, 2, 3].map((index) => (
      <Item key={index} />
    ))}
  </>
);

export const GapMixinTemplate = () => {
  return (
    <Wrapper>
      <ExampleCard>
        <ExampleTitle>Горизонтальное сравнение</ExampleTitle>
        <ExampleDescription>
          Слева обычный flex с CSS gap, справа — тот же flex без gap, но с горизонтальным gapMixin.
        </ExampleDescription>

        <ComparisonGrid>
          <ComparisonColumn>
            <ComparisonLabel>CSS flex gap</ComparisonLabel>
            <HorizontalFlexWithGap data-testid="cssHorizontalFlex">
              <ItemSet />
            </HorizontalFlexWithGap>
          </ComparisonColumn>
          <ComparisonColumn>
            <ComparisonLabel>gapMixin horizontal</ComparisonLabel>
            <GapFlexContainer $gap={12} $type="horizontal" data-testid="mixinHorizontalFlex">
              <ItemSet />
            </GapFlexContainer>
          </ComparisonColumn>
        </ComparisonGrid>
      </ExampleCard>

      <ExampleCard>
        <ExampleTitle>Вертикальное сравнение</ExampleTitle>
        <ExampleDescription>Flex-колонка с CSS gap и gapMixin c типом vertical.</ExampleDescription>

        <ComparisonGrid>
          <ComparisonColumn>
            <ComparisonLabel>CSS flex column gap</ComparisonLabel>
            <VerticalFlexWithGap data-testid="cssVerticalFlex">
              <ItemSet />
            </VerticalFlexWithGap>
          </ComparisonColumn>
          <ComparisonColumn>
            <ComparisonLabel>gapMixin vertical</ComparisonLabel>
            <GapFlexContainer $gap={12} $type="vertical" $direction="column" data-testid="mixinVerticalFlex">
              <ItemSet />
            </GapFlexContainer>
          </ComparisonColumn>
        </ComparisonGrid>
      </ExampleCard>

      <ExampleCard>
        <ExampleTitle>Двухмерное сравнение</ExampleTitle>
        <ExampleDescription>Grid с gap против flex-wrap без gap, но с gapMixin типа both.</ExampleDescription>

        <ComparisonGrid>
          <ComparisonColumn>
            <ComparisonLabel>CSS grid gap</ComparisonLabel>
            <GridGapContainer data-testid="cssGridLayout">
              <ItemSet />
            </GridGapContainer>
          </ComparisonColumn>
          <ComparisonColumn>
            <ComparisonLabel>gapMixin both</ComparisonLabel>
            <GapFlexContainer $gap={12} $type="both" $wrap $width={140} data-testid="mixinBothFlex">
              <ItemSet />
            </GapFlexContainer>
          </ComparisonColumn>
        </ComparisonGrid>
      </ExampleCard>
    </Wrapper>
  );
};
