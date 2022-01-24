import React, {
  FC, Fragment, useState, useMemo,
} from 'react';
import { IntlProvider } from 'react-intl';
import { TranslationsContext } from './const';
import { Translations, TranslationsTypes } from './types';
import en from './messages/en.json';

export const TranslationsProvider: FC = (
  {
    children,
  },
) => {
  const [language, setLanguage] = useState(Translations.en);

  const value = useMemo(() => ({ language, setLanguage }), [
    language,
    setLanguage,
  ]);

  const messages: TranslationsTypes = {
    en,
  };

  return (
    <TranslationsContext.Provider value={value}>
      <IntlProvider
        key={language}
        locale={language}
        textComponent={Fragment}
        messages={messages[language]}
      >
        {children}
      </IntlProvider>
    </TranslationsContext.Provider>
  );
};
