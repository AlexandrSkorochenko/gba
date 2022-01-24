import { useCallback, useContext, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { TranslationsContext } from './const';
import { PrimitiveType } from './types';

export const useTranslate = () => {
  const context = useContext(TranslationsContext);

  if (!context) {
    throw new Error('useTranslation should be used within a TranslationsContext');
  }

  const { language, setLanguage } = context;
  const intlObj = useIntl();

  const t = useCallback(
    (message: string, values?: Record<string, PrimitiveType>): string => {
      if (!message) return '';

      return intlObj.formatMessage({ id: message }, values);
    },
    [intlObj],
  );

  return useMemo(() => ({ t, language, setLanguage }), [
    t,
    language,
    setLanguage,
  ]);
};
