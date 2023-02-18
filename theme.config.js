import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config = {
  logo: <span>PHP-Tuto</span>,
  project: {
    link: "https://github.com/Oussamaosman02/php-tutorials",
  },
  toc: {
    float: true,
  },
  docsRepositoryBase: "https://github.com/Oussamaosman02/php-tutorials",
  useNextSeoProps(){
    return{
      titleTemplate: "%s",
    };
  },
  footer: {
    text: "Docs, with Nextra",
  }
};

export default config;
