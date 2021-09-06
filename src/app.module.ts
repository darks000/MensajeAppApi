import { MensajeController } from './Controller/mensaje.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sendapp_db',
      entities: [],
      synchronize: true,
    }),],
  controllers: [
    MensajeController, AppController],
  providers: [AppService],
})
export class AppModule { }
