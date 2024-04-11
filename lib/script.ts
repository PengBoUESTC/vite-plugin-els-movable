import BindMoveFn from 'touch-move-script'

export const bindForEles = (classPrefix: string, bindMove: typeof BindMoveFn) => {
  const els = [...document.querySelectorAll(`[class^=${classPrefix}]`)] as HTMLElement[]

  els.forEach(ele => {
    bindMove(ele, { })
  })
}