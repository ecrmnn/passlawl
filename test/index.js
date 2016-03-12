'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const exec = require("child_process").exec;
let captured_stdout = '';

describe('Running CLI without any params', function () {
  before(function (done) {
    exec('node ./src', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('returns a password', function () {
    expect(captured_stdout).to.be.a('string');
  });
});

describe('Running CLI help command', function () {
  before(function (done) {
    exec('node ./src --help', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('returns available options', function () {
    expect(captured_stdout).to.have.string('Options:');
    expect(captured_stdout).to.have.string('--help');
    expect(captured_stdout).to.have.string('--version');
    expect(captured_stdout).to.have.string('--locale');
  });
});

describe('Running CLI with locale', function () {
  before(function (done) {
    exec('node ./src --locale no', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('returns a password in chosen language', function () {
    expect(captured_stdout).to.be.a('string');
  });
});

describe('Running CLI with invalid locale', function () {
  before(function (done) {
    exec('node ./src --locale NotValidLocale', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('returns an error message', function () {
    expect(captured_stdout).to.have.string('Given locale not supported. Supported locales:');
  });
});
