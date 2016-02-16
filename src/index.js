#! /usr/bin/env node

'use strict';

const pckg = require('../package.json');
const uppercase = require('./uppercase');
const program = require('commander');

program.version(pckg.version, '-v, --version')
  .option('-l, --locale [string]', 'set locale', function (locale) {
    const locales = ['en', 'no'];

    if (locales.indexOf(locale) === -1) {
      console.error('Locale ' + locale + ', not supported. Supported locales: ' + locales.join(', '));

      return 'en';
    }

    return locale;

  }, 'en')
  .parse(process.argv);

const words = require('./locale/' + program.locale);

console.log(words.map(uppercase).join(''));