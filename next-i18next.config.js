const path = require("path");

module.exports = {
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
    localeDetection: true,
    localePath: path.resolve("./public/locales"),
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
