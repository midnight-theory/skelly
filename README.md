[![Build Status](https://api.travis-ci.org/midnight-theory/skelly.svg?branch=master)](https://travis-ci.org/midnight-theory/skelly)
[![license](https://img.shields.io/github/license/midnight-theory/skelly.svg)](https://github.com/midnight-theory/skelly/blob/master/LICENSE)

# Introduction
**Skelly** (v0.1.0) is collection of vanilla skeleton loader components.

This package is inspired by [vue-skelly](https://github.com/kyleoliveiro/vue-skelly).


## Usage
### Install the package
```bash
# For yarn
$ yarn add @midnight-theory/skelly

# For npm
$ npm i @midnight-theory/skelly
```

### Import component into your project
```javascript
import { InitAll } from "skelly";
import "skelly/dist/bundle.min.css";

window.onload = () => {
    // Invoke the script
    InitAll();
}
```

In your html:
```html
<div class="skelly-circle"></div>
```

## For development
```bash
$ git clone https://github.com/midnight-theory/skelly
$ yarn && yarn start
```