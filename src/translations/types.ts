export type PrimitiveType = string | number | boolean | null | undefined | Date;

export interface TType {
  (message: string, values?: Record<string, PrimitiveType>): string;
}

export type TranslationsTypes = {
  [translation in Translations]: {
    [key: string]: string;
  };
};

export enum Translations {
  en = 'en',
}

export interface Language {
  language: keyof typeof Translations;
}
