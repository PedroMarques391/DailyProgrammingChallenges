import QRCODE from 'qr-image'
import fs from 'fs'

const url: string = 'https://github.com/PedroMarques391'
const name: string = 'GITHUB'

function myQrCode (URL: string, name: string): void {
  const qrCode = QRCODE.image(URL, { type: 'png' })
  qrCode.pipe(fs.createWriteStream(`${name}.png`))
}

myQrCode(url, name)
