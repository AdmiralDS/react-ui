import React from 'react';
import styled from 'styled-components';
import { FORM_FIELD_DATA_ATTRIBUTE } from '#src/components/common/utils/splitDataAttributes';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

export const DataAttributesDescription = () => (
  <Desc>
    Компоненту можно прокидывать дата аттрибуты вида [{FORM_FIELD_DATA_ATTRIBUTE}-...]. Этот аттрибут попадет на
    контейнер самого компонента в неизменном виде, а на контейнер input в виде [data-...].
    <br /> Например: data-container-id="fieldIdOne" Контейнер компонента получит аттрибут
    data-container-id="fieldIdOne", input получит аттрибут [data-id="fieldIdOne"].
  </Desc>
);
