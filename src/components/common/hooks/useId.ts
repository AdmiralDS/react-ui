import * as React from 'react';
import { uid } from '../uid';

/** Хук обертка для совместимости с реакт 17 */
export const useId = React.useId || (() => React.useMemo(uid, []));
