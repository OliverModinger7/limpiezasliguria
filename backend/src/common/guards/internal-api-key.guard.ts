import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';

@Injectable()
export class InternalApiKeyGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const provided = request.header('x-api-key');
    const expected = this.config.get<string>('INTERNAL_API_KEY');

    if (!expected) {
      throw new UnauthorizedException('Servicio no configurado.');
    }

    if (!provided || provided !== expected) {
      throw new UnauthorizedException('No autorizado.');
    }

    return true;
  }
}
