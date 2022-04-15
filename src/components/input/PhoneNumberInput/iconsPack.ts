import metadata from '@admiral-ds/icons/metadata.json';
import * as FlagsIcons from '#src/icons/IconComponents-flags';
import { ElementType } from 'react';
import { CountryName } from '#src/components/input/PhoneNumberInput/constants';

type IconMeta = {
  name: string;
  path: string;
  svg: string;
  type: string;
};

type IconComponents = {
  name: string;
  SvgComponent: ElementType;
};

type Metadata = Record<string, Array<IconMeta>>;

const iconsPack: Array<IconComponents> = (metadata as Metadata)['flags'].map((iconMetaInfo: IconMeta) => {
  return {
    name: iconMetaInfo.name,
    SvgComponent: (FlagsIcons as { [key: string]: ElementType })[iconMetaInfo.name],
  };
});

export const getIcon = (name: CountryName): ElementType | null => {
  const item = iconsPack.find((flag: IconComponents) => flag.name === name);

  return item ? item.SvgComponent : null;
};
