
import { PluginOption } from 'vite'
import { bindForEles } from './script'
import bindMove from 'touch-move-script'

export interface MovableOptions {
  classPrefix: string
}

export default function elsMovable(options: Partial<MovableOptions>):PluginOption {
  const { classPrefix = 'movable' } = options

  return {
    enforce: 'post',
    name: 'vite:els-movable',
    apply(config, env) {
      const { mode, command } = env
      if (command === 'serve') return true
      return mode !== 'production'
    },
    transformIndexHtml: {
      transform(html: string) {
        return {
          html,
          tags: [
            {
              tag: 'script',
              injectTo: 'body',
              children: `
                const __bindMove__ = ${bindMove.toString()};
                const __bindForEles__ = ${bindForEles.toString()};
                __bindForEles__('${classPrefix}', __bindMove__)
              `
            },
          ],
        }
      },
    },
  }
}
