#! /usr/bin/env node

'use strict';

const passlawl = require('passlawl.js');
const locales = passlawl.getAvailableLocales();
const chalk = require('chalk');
const pckg = require('../package.json');
const program = require('commander');
let validLocale = true;

program.version(pckg.version, '-v, --version')
  .option('-l, --locale [string]', 'set locale. available locales: ' + locales.join(', '), function (locale) {
    if (locales.indexOf(locale) === -1) {
      validLocale = false;
      return 'en';
    }

    return locale;

  }, 'en')
  .parse(process.argv);

if (validLocale) {
  console.log(chalk.yellow(passlawl.locale(program.locale).get()));
} else {
  console.log(chalk.bgRed('Given locale not supported. Supported locales: ' + locales.join(', ')));
}