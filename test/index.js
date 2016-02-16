'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const en = require('../src/locale/en');
const no = require('../src/locale/en');

describe('Generator test', function () {
  'use strict';

  it('returns array', function () {
    expect(en).to.be.instanceof(Array);
    expect(no).to.be.instanceof(Array);
  });

  it('returned array contains 4 words', function () {
    expect(en).to.have.length(4);
    expect(no).to.have.length(4);
  });
});