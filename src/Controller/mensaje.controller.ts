/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMensajeDto } from 'src/Model/create-mensaje-dto';

@Controller("mensaje")
export class MensajeController {
    // Registrar
    @Post()
    create(@Body() CreateMensajeDto: CreateMensajeDto) {
        return 'mensaje creado';
    }
    //Obtener
    @Get()
    getAll() {
        return 'Lista de mensaje';
    }

    // actualizar mensajes 
    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto) {
        return 'mensaje actualizado';
    }

    // elminiar mensajes
    @Delete(':id')
    delete(){
        return 'mensaje eliminado';
    }
}

