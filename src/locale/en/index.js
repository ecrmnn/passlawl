'use strict';

const adjectives = require('./adjectives');
const nouns = require('./nouns');
const verbs = require('./verbs');
const adverbs = require('./adverbs');

const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const noun = nouns[Math.floor(Math.random() * nouns.length)];
const verb = verbs[Math.floor(Math.random() * verbs.length)];
const adverb = adverbs[Math.floor(Math.random() * adverbs.length)];

module.exports = [adjective, noun, adverb, verb];