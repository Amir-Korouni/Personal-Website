"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === "en" ? "fa" : "en";

    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

    router.push(newPathname);
  };

  return (
    <button
      onClick={switchLocale}
      className="cursor-pointer"
      aria-label="Change language"
    >
      <Languages />
    </button>
  );
};

export default LanguageSwitcher;
