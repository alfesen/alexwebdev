import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('uploads')
export class FileController {

  @Get('images/:filename')
  getImage(@Param('filename') filename: string) {
    const path = join(process.cwd(), 'uploads', 'images', filename)
    const file = createReadStream(path)
    return new StreamableFile(file)
  }
}
