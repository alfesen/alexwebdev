import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common'
import { Request, Response } from 'express'
import * as fs from 'fs'

export type MulterFiles = {
  [fieldname: string]: Express.Multer.File[]
}

@Catch(HttpException)
export class UploadExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    if (request.file) {
      fs.unlink(request.file.path, (err) => {
        console.log(err)
      })
    }

    if (request.files) {
      const files = request.files as MulterFiles
      for (const key in files) {
        fs.unlink(files[key][0].path, (err) => {
          console.log(err)
        })
      }
    }

    const status = exception.getStatus() || 500

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message || 'Unhandled Server Error',
    })
  }
}
