/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateMensajeDto } from 'src/Model/create-mensaje-dto';
import { MensajeService } from 'src/services/mensaje.service';

@Controller("mensaje")
export class MensajeController {

    constructor(private mensajesService: MensajeService) {

    }
    // Registrar
    @Post()
    create(@Body() CreateMensajeDto: CreateMensajeDto, @Res() response) {
        // hay que esperar la peticion con el metodo then() y si hay error catch
         this.mensajesService.createmensaje(CreateMensajeDto).then(mensaje => {
            response.status(HttpStatus.CREATED).json(mensaje)
        }
        ).catch(()=>{ response.status(HttpStatus.FORBIDDEN).json({mensaje:'error  en la creacion del mensaje '});
        }
        );
    }
    //Obtener
    @Get()
    getAll(@Res() response) {
         this.mensajesService.getAll().then(mensajesList =>{
            response.status(HttpStatus.OK).json(mensajesList);
        }).catch(()=>{
            response.status(HttpStatus.OK).json({mensaje: 'no se pudo obtener los mensajes'});
        });
    }

    // actualizar mensajes 
    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto, @Res() response , @Param('id') idmensaje) {
        
         this.mensajesService.updatemensaje(updateMensajeDto,idmensaje).then(mensaje=>{
            response.status(HttpStatus.OK).json(mensaje); 
        }

        ).catch(()=>{
            response.status(HttpStatus.OK).json({mensaje: 'no se pudo editar el mensajes'});
        });
    }

    // elminiar mensajes
    @Delete(':id')
    delete( @Res() response , @Param('id') idmensaje) {
    this.mensajesService.deletemensaje(idmensaje).then(res =>{
        response.status(HttpStatus.OK).json(res);
    }).catch(()=>{
        response.status(HttpStatus.OK).json({mensaje: 'no se pudo eliminar el mensajes'});
    })
    }
}

