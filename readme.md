# TER Automation Framework

## Motivation

The most painful think about all the automation testing framework is you need to know how to code (script, at least).
This framework allow you to write automation testing script without any coding knowledge.

## Function

* **Write automation test script with JSON format**
* **Convert JSON test script to automation framework script (cypress, nightwatch, detox, ...)**
* **Support module, for shorter script**
* **Support GUI in the future**

## Quick start

* Install the library
```
yarn global add ter-automation-framework
# or
npm install ter-automation-framework -g
```

* Create the config with following tree
```
.ter/
└── automation-framework
    └── config.json
```

* Content of `config.json` (for example: cypress)
```
{
  "input_folder": "test/testcase",
  "module_folder": "test/module",
  "output_folder": "test/cypress/integration",
  "output_platform": "cypress"
}
```

* Write test case

* Convert
```
ter-automation-framework convert
```

## User manual

* [Quick start](/docs/quickstart.md)
* [How to use module](/docs/how_to_use_module.md')
* [Support matrix](/docs/support_matrix.md)