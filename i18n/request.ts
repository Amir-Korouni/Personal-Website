import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

import en from "../message/en.json";
import fa from "../message/fa.json";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "fa")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: locale === "fa" ? fa : en,
  };
});
