# TER Automation Framework's Module
## What is module

Imagine the case that you write 1000 test cases and all start with login, you have 2 options.
First option is copy-paste the code all the time.
Second option is write it with a function.

That's the case you `code` it. But with TER Automation Framework, you mostly `design` it with JSON file.
To support ability to write a `function`, TER Automation Framework provide you `module` with a same methodology.

Module is just an input set and a list of steps to run.

## Getting started

* Create a new module inside module folder (that you declare in config file) named `login.json` with following content

```
{
  "title": "Login with username and password",
  "input": [
  
  ],
  "steps": [
    {
      "type": "url",
      "url": "/"
    },
    {
      "type": "type",
      "element": "#tf_username",
      "text": "admin"
    },
    {
      "type": "type",
      "element": "#tf_password",
      "text": "admin"
    },
    {
      "type": "click",
      "element": "#btn_login"
    }
  ]
}
```

* Create a test case `login_spec.json` inside input folder with following content

```
{
  "title": "Login test case",
  "steps": [
    {
      "type": "auth/login"
    }
  ]
}
```

* Convert with `ter-automation-framework convert` and you will get the result in output folder

```
describe('Login test case', () => {
  it('Login test case', async () => {
    
    cy.visit('/');
    
    cy.get('#tf_username').type('admin');
    
    cy.get('#tf_password').type('admin');
    
    cy.get('#btn_login').click();
    
  });
});
```

## User variable

* Add input section to module `login.json`

```
{
  ...
  "input": [
    {
      "type": "string",
      "key": "username"
    },
    {
      "type": "string",
      "key": "password"
    }
  ],
  ...
}
```

* Change the typing action with variable

```
{
  ...
  "steps": [
    ...
    {
      "type": "type",
      "element": "#tf_username",
      "text": "{username}"
    },
    {
      "type": "type",
      "element": "#tf_password",
      "text": "{password}"
    },
    ...
  ]
}
```

* Use variable when use action

```
{
  "title": "Login test case",
  "steps": [
    {
      "type": "auth/login",
      "username": "admin",
      "password": "admin"
    }
  ]
}
```

* Run convert then get the 

```
describe('Login test case', () => {
  it('Login test case', async () => {
    
    cy.visit('/');
    
    cy.get('#tf_username').type('admin');
    
    cy.get('#tf_password').type('admin');
    
    cy.get('#btn_login').click();
    
  });
});
```

### And good news: module now can call other module inside the steps. But plz don't make any circular dependency. We haven't handle it yet