## vite-plugin-els-movable

> plugin for `server` mode or **not** `production` env

```javascript
import elsMovable from 'vite-plugin-els-movable'

{
  plugins: [
    // interface MovableOptions {
    //   classPrefix: string
    // }
    // selector '[class^=movable]''
    elsMovable({ classPrefix: 'movable' })
    // selector '[class^=movable],[class^=heihei]'
    elsMovable({ classPrefix: 'movable,heihei' })
  ]
}
```