import React from 'react';

import { Translations } from './types';

const DEFAULT_VALUE: {
  language: Translations;
  setLanguage: (language: Translations) => void;
} = {
  language: Translations.en,
  setLanguage(language) {
    this.language = language;
  },
};

export const TranslationsContext = React.createContext(DEFAULT_VALUE);
