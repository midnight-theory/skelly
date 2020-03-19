# Introduction
**Skelly** (v0.1.0) is collection of vanilla skeleton loader components.

This package is inspired by [vue-skelly](https://github.com/kyleoliveiro/vue-skelly).


## Usage
### Install the package
```bash
# For yarn
$ yarn add skelly

# For npm
$ npm i skelly
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