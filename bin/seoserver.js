#!/usr/bin/env node
var program = require('commander');
var fs = require('fs');
var forever = require('forever-monitor');
var log = require('../lib/log');

// require our seoserver npm package

program
  .version('0.0.1')
  .option('-p, --port <location>', 'Specifiy a port to run on')


program
  .command('start')
  .description('Starts up an SeoServer on default port 3000')
  .action(function () {
    var child = new (forever.Monitor)(__dirname + '/../lib/seoserver.js', {
      options: [program.port]
    });
    child.start();
    log.info('SeoServer started in ' + __dirname);
  });

program.parse(process.argv);

