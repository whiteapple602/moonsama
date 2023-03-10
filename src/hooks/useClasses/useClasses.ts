import { useMemo } from 'react';
import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';

export const useClasses = (stylesElement: any) => {
  const theme = useTheme();
  return useMemo(() => {
    const rawClasses =
      typeof stylesElement === 'function'
        ? stylesElement(theme)
        : stylesElement;
    const prepared: any = {};

    Object.entries(rawClasses).forEach(([key, value = {}]) => {
      prepared[key] = css(value as any);
    });

    return prepared;
  }, [stylesElement, theme]);
};
