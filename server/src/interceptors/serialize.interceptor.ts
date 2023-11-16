import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { plainToClass } from 'class-transformer'
import { map } from 'rxjs/operators'

interface ClassConstructor {
  new (...args: any[]): object
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto))
}

export class SerializeInterceptor<ClassConstructor> implements NestInterceptor {
  constructor(private dto: new () => ClassConstructor) {}
  intercept(
    context: ExecutionContext,
    handler: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    return handler.handle().pipe(
      map((data: any) => {
        return plainToClass(this.dto, data, { excludeExtraneousValues: true })
      })
    )
  }
}
