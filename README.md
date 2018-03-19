# vfg-field-object

![Rollup badge](https://img.shields.io/badge/Rollup-^0.53.3-ff69b4.svg)
![Jest](https://img.shields.io/badge/Jest-^22.0.4-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg)
![Storybook](https://img.shields.io/badge/Storybook-^3.3.3-ff70a3.svg)
![Commitizen](https://img.shields.io/badge/Commitizen-enabled-brightgreen.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Npm badge](https://img.shields.io/npm/v/vfg-field-object.svg)
[![Build Status](https://travis-ci.org/gwenaelp/vfg-field-object.svg?branch=master)](https://travis-ci.org/gwenaelp/vfg-field-object)

> A vue-form-generator field to handle objects, with or without schemas.

## Examples

### Without schema

![Without schema](https://github.com/gwenaelp/vfg-field-sourcecode/blob/master/docs/preview1.png)

```
{
  model: {
    object: {
      field1: "value1"
    }
  },
  schema: {
    fields: [
      {
        type: "object",
        label: "Object field",
        model: "object"
      }
    ]
  }
}
```

### With schema

![With schema](https://github.com/gwenaelp/vfg-field-sourcecode/blob/master/docs/preview2.png)

```
{
  model: {
    object: {
      field: "value1"
    }
  },
  schema: {
    fields: [
      {
        type: "object",
        label: "Object field",
        model: "object",
        schema: {
          fields: [
            {
              type: "input",
              inputType: "number",
              label: "Label",
              model: "number"
            },
            {
              type: "input",
              inputType: "text",
              label: "Field",
              model: "field"
            }
          ]
        }
      }
    ]
  }
}
```

## Installation
```
npm install vfg-field-object
```
vfg-field-object can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, vfg-field-object will register all the components to vue by itself.</p>

### ES6
```js
//
// You can register a component manually
//
import { FieldObject } from 'vfg-field-object';

export default {
  ...
  components: {
    'field-object': FieldObject
  },
  ...
};

//
// or register the whole module with vue
//
import ModuleLibrary from 'vfg-field-object';

// Install this library
Vue.use(ModuleLibrary);
```

### CommonJS
```js
//
// You can register a component manually
//
var Vue = require('vue');
var ModuleLibrary = require('vfg-field-object');

var YourComponent = Vue.extend({
  ...
  components: {
    'field-object': ModuleLibrary.FieldObject
  },
  ...
});

//
// or register the whole module with vue
//
var Vue = require('vue');
var ModuleLibrary = require('vfg-field-object');

// Install this library
Vue.use(ModuleLibrary);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vfg-field-object/dist/vfg-field-object.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it in your templates:

```html
<field-object></field-object>
```

## Changelog

See the GitHub [release history](https://github.com/gwenaelp/vfg-field-object/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).



> Generated using [vue-cli-template-library](https://github.com/julon/vue-cli-template-library).
