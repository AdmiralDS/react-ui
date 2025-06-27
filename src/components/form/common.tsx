import styled from 'styled-components';
import { FORM_FIELD_DATA_CONTAINER_ATTRIBUTE } from '#src/components/common/utils/splitDataAttributes';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

export const DataAttributesDescription = () => (
  <Desc>
    Компоненту можно прокидывать дата аттрибуты вида [{FORM_FIELD_DATA_CONTAINER_ATTRIBUTE}-...]. Этот аттрибут попадет
    только на контейнер самого компонента.
    <br /> Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут
    data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.
  </Desc>
);
