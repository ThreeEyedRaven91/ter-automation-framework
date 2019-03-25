#!/usr/bin/env node

import Helper from '../helpers';
import Convert from './convert';

if (Helper.argv.targets && Helper.argv.targets.length) {
  Convert.convert({
    inputPath: Helper.argv.options.source,
    outputPath: Helper.argv.options.target,
  });
}