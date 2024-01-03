import { UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

import { diskStorage } from 'multer'
import { extname } from 'path'
import { randomUUID } from 'crypto'

const storage = diskStorage({
  destination: 'upload/images',
  filename: (req, file, cb) => {
    const ext = extname(file.originalname)
    cb(null, `${randomUUID()}${ext}`)
  },
})

export function UploadImage(type: string) {
  return UseInterceptors(FileInterceptor(type, { storage }))
}
