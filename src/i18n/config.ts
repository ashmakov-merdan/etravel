import { LocalePrefix, Pathnames } from "next-intl/routing"

export const locales = ["en", "ru", "tm"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  '/': '/'
}

export const localePrefix: LocalePrefix<Locales> = "always";