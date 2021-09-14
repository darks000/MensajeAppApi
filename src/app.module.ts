import { MensajeService } from './services/mensaje.service';
import { MensajeController } from './Controller/mensaje.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensaje } from './entity/mensaje.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dario',
      password: '123',
      database: 'sendapp_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    // Aqui se importa los services que se utlizan
    TypeOrmModule.forFeature([Mensaje])
  ],
  controllers: [
    MensajeController, AppController],
  providers: [
    MensajeService, AppService],
})
export class AppModule { }
