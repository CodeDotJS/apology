## apology [![Build Status](https://travis-ci.org/CodeDotJS/apology.svg?branch=master)](https://travis-ci.org/CodeDotJS/freecodecamp-podcast-dl)

> An API to generate celebrity perv apologies.


## Install

```
$ npm install --save apology
```

## Usage

```js
const apology = require('apology');

apology().then(res => {
  console.log(res)
  /*
    As a male feminist, harassment is completely unacceptable — especially when people
    find out about it. At the time I believed that my sociopathic manipulation of the 22-year-old
    in my office was consensual, and of course now I realize my behavior was wrong. In conclusion,
    I will devote my life to finding the real Golden Globes party molester.
  */
});

```

## License

MIT &copy; [Rishi Giri](http://rishigiri.ml)
