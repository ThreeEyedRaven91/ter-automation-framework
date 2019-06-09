# Quick start

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