import { NestInterceptor, CallHandler, createParamDecorator, UseInterceptors } from "@nestjs/common";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { plainToClass } from 'class-transformer'

interface SerializeConstructor<T> {
  new(...args: any[]): T
}

export function Serialize<T>(dto: SerializeConstructor<T>) {
  return UseInterceptors(new SerializeInterceptor(dto))
}

export class SerializeInterceptor<T> implements NestInterceptor {
  constructor(private dto: SerializeConstructor<T>) { }

  intercept(context: never, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true
        })
      })
    )
  }
}