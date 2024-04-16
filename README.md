## vite-plugin-els-movable

```javascript
import elsMovable from 'vite-plugin-els-movable'

{
  plugins: [
    // interface MovableOptions {
    //   calssPrefix: string
    // }
    // selector '[class^=movable]''
    elsMovable({ calssPrefix: 'movable' })
    // selector '[class^=movable],[class^=heihei]'
    elsMovable({ calssPrefix: 'movable,heihei' })
  ]
}
```