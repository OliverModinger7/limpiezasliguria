import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private readonly transporter: Transporter;
  private readonly mailTo: string;
  private readonly mailFrom: string;

  constructor(private readonly config: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.config.get<string>('SMTP_HOST'),
      port: this.config.get<number>('SMTP_PORT', 587),
      secure: this.config.get<string>('SMTP_SECURE', 'false') === 'true',
      auth: {
        user: this.config.get<string>('SMTP_USER'),
        pass: this.config.get<string>('SMTP_PASS'),
      },
    });

    this.mailTo = this.config.get<string>(
      'MAIL_TO',
      'contacto@limpiezasliguria.cl',
    );
    this.mailFrom = this.config.get<string>(
      'MAIL_FROM',
      'no-reply@limpiezasliguria.cl',
    );
  }

  async sendQuoteRequest(dto: CreateContactDto): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: `"Formulario Liguria" <${this.mailFrom}>`,
        to: this.mailTo,
        replyTo: dto.email,
        subject: `Nueva cotización: ${dto.name}`,
        html: this.buildHtml(dto),
      });
    } catch (err) {
      this.logger.error('Error enviando el correo de contacto', err as Error);
      throw new InternalServerErrorException('No se pudo enviar la solicitud.');
    }
  }

  private buildHtml(dto: CreateContactDto): string {
    const escape = (value: string) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    return `
      <h2>Nueva solicitud de cotización</h2>
      <p><strong>Nombre:</strong> ${escape(dto.name)}</p>
      <p><strong>Correo:</strong> ${escape(dto.email)}</p>
      <p><strong>Teléfono:</strong> ${escape(dto.phone)}</p>
      <p><strong>Servicio:</strong> ${escape(dto.service)}</p>
    `;
  }
}
