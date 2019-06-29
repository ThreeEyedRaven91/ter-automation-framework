#!/usr/bin/env node

import Helper from '../helpers';
import Convert from './convert';
import Converter from "../converters";

if (Helper.argv.targets && Helper.argv.targets.length) {
  if (Helper.argv.targets.indexOf("convert") !== -1) {
    Convert.convert({
      inputPath: Helper.config.content.input_folder,
      outputPath: Helper.config.content.output_folder,
      modulePath: Helper.config.content.module_folder,
      converter: Converter[Helper.config.content.output_platform],
    });
  }
  else if (Helper.argv.targets.indexOf("serve") !== -1) {
    require('../server/index');
  }
}