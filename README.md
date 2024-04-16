## vite-plugin-els-movable

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