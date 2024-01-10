import {
  BadRequestException,
  Injectable,
  PipeTransform,
  UploadedFile,
} from '@nestjs/common'
import * as sharp from 'sharp'
import * as fs from 'fs'
import { join, parse, relative } from 'path'

export function SharpImage(width: number) {
  return UploadedFile(new SharpPipe(width))
}

@Injectable()
export class SharpPipe
  implements PipeTransform<Express.Multer.File, Promise<string>>
{
  constructor(private width: number) {}
  async transform(image: Express.Multer.File): Promise<string> {
    if (!image) {
      throw new BadRequestException('No file provided')
    }
    const { name } = parse(image.filename)
    const outputFilePath = relative(
      process.cwd(),
      join('uploads', 'images', `${name}.webp`)
    )

    try {
      await sharp(relative(process.cwd(), image.path))
        .resize(this.width)
        .toFormat('webp')
        .toFile(outputFilePath)
    } catch (sharpError) {
      throw new BadRequestException('Invalid input')
    }

    fs.unlink(relative(process.cwd(), image.path), (err) => {
      if (err) {
        console.error('Error: ', err)
      }
    })

    return outputFilePath
  }
}
