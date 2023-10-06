import Editor from '@hufe921/canvas-editor'
import barcode2DPlugin from './barcode2d'

window.onload = function () {
  const container = document.querySelector<HTMLDivElement>('#editor')!
  const instance = new Editor(container, {
    main: []
  })
  instance.use(barcode2DPlugin, {
    isRegisterDetectorContextMenu: true
  })
  const command = instance.command

  document.querySelector('button')!.onclick = () => {
    command.executeInsertBarcode2D('https://hufe.club/canvas-editor', 200, 200)
  }
}
