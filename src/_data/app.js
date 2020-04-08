/**
 * App
 * 
 * Project: Baythium Packer
 * File: /src/_data/app.js
 * Initial author: Damien Bayes <damien.bayes.db@gmail.com>
 */

"use strict";

const pack = require("../../package.json");

const options = {
  name: "Baythium Packer",
  version: pack.version,
  url: "https://packer.baythium.com",
  description: pack.description,
  keywords: [],

  author: {
    name: "Damien Bayes",
    email: "damien.bayes.db@gmail.com",
    github: "https://github.com/damien-bayes",
    facebook: "https://www.facebook.com/damien.bayes.db1",
    twitter: "https://twitter.com/damien_bayes"
  },

  company: {
    name: "Baythium Ecosystem"
  },

  locale: "en",
  languages: [
    {
      label: "English",
      code: "en"
    },
    {
      label: "Русский",
      code: "ru"
    },
    {
      label: "Deutsche",
      code: "de"
    }
  ],
  
  buildTime: new Date(),
  environment: process.env.ELEVENTY_ENV,
  
  pageNotFoundUrl: "images/page-not-found.svg",
};

console.info(`${options.name} is in ${options.environment} state`);

module.exports = options;
