/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from 'src/entity/mensaje.entity';
import { CreateMensajeDto } from 'src/Model/create-mensaje-dto';
import { Repository } from 'typeorm';

@Injectable()
export class MensajeService {

  constructor(
    @InjectRepository(Mensaje)
    private mensajeRepository: Repository<Mensaje>,
  ) { }

  async getAll(): Promise<Mensaje[]>  {
    //metodo asincrono  -> find es obtener todos los mensajes 
    return await this.mensajeRepository.find();
  }

  async createmensaje(mensajeNuevo: CreateMensajeDto):Promise<Mensaje> {
    // se crea un objeto de tipo entity para crear el mensaje y luego se guarda
    const nuevo = new Mensaje();
    nuevo.mensaje = mensajeNuevo.mensaje;
    nuevo.nick = mensajeNuevo.nick;
   
    return  this.mensajeRepository.save(nuevo);
  }

  async updatemensaje(mensajeactualizar: CreateMensajeDto, idmensaje: number):Promise<Mensaje>{
    // se busca el mensaje que se desea actualizar
    const mensajeupdate = await this.mensajeRepository.findOne(idmensaje);
    mensajeupdate.nick= mensajeactualizar.nick;
    mensajeupdate.mensaje= mensajeactualizar.mensaje;

    return await this.mensajeRepository.save(mensajeupdate);
  }

  async deletemensaje(idmensaje: number):Promise<any>{
    return  await this.mensajeRepository.delete(idmensaje);

  }
}
