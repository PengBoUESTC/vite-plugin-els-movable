
import { PluginOption } from 'vite'
import { bindForEles } from './script'
import bindMove from 'touch-move-script'

export interface MovableOptions {
  calssPrefix: string
}

export default function elsMovable(options: Partial<MovableOptions>):PluginOption {
  const { calssPrefix = 'movable' } = options

  return {
    enforce: 'post',
    name: 'vite:els-movable',
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
                __bindForEles__('${calssPrefix}', __bindMove__)
              `
            },
          ],
        }
      },
    },
  }
}
