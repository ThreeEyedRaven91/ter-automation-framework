import argv from 'argv';

argv.option({
  name: 'source',
  short: 's',
  type: 'string',
  description: 'Source file / folder',
});

argv.option({
  name: 'target',
  short: 't',
  type: 'string',
  description: 'Target file / folder',
});

const argvHelper = {
  ...argv.run(),
  argv,
};

export default argvHelper;