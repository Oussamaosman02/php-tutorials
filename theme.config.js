import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  en: "Question? Give us feedback →",
};

const SEARCH_PLACEHOLDER_WITH_TRANSLATIONS = {
  en: "Search documentation...",
  es: "Bucar documento...",
};

const EDIT_TEXT = {
  en: "Edit this page on GitHub →",
  es: "Edite esta página en GitHub →",
};

const TABLE_OF_CONTENTS_TITLE = {
  en: "On This Page",
  es: "En esta página",
};

const config = {
  logo: <span>PHP</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  toc: {
    float: true,
    title: () => {
      const { locale } = useRouter();
      return TABLE_OF_CONTENTS_TITLE[locale] || TABLE_OF_CONTENTS_TITLE["en"];
    },
  },
  search: {
    placeholder: () => {
      const { locale } = useRouter();
      return (
        SEARCH_PLACEHOLDER_WITH_TRANSLATIONS[locale] ||
        SEARCH_PLACEHOLDER_WITH_TRANSLATIONS["en"]
      );
    },
  },
  editLink: {
    text: () => {
      const { locale } = useRouter();
      return EDIT_TEXT[locale] || EDIT_TEXT["en"];
    },
  },
  feedback: {
    content: () => {
      const { locale } = useRouter();
      return (
        FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
        FEEDBACK_LINK_WITH_TRANSLATIONS["en"]
      );
    },
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "es", text: "Español" },
  ],
};

export default config;
