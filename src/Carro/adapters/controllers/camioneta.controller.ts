import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { CamionetaService } from '../../domain/services/camioneta.service';

import {Camioneta} from '../../domain/models/Camioneta.model';
import { AuthGuard } from '@nestjs/passport';


const errReturn = (e: Error, message: string) => {
   return {
      message: message,
      error: e
   }
}
   
@Controller('camionetas')
export class CamionetaController{
constructor(private readonly camionetaService: CamionetaService) { }

   @Get()
   getHello() {
      try{
         return this.camionetaService.listar();
      }
      catch(e){
         return errReturn(e, "Error al listar camionetas");
      }
   }
   
   @UseGuards(AuthGuard('local'))
   @Post()
   crear(@Body() datos: Camioneta) {
      try{
         return this.camionetaService.crear(datos);
      }
      catch(e){
         return errReturn(e, "Error al crear camioneta");
      }
   }

   @Put(":id")
   modificar(@Body() datos: Camioneta, @Param('id') id: number) {
      try{
         return this.camionetaService.modificar(id, datos);
      }
      catch(e){
         return errReturn(e, "Error al modificar camioneta");
      }
   }

   @Delete(":id")
   eliminar(@Param('id') id: number) {
      try{
         return this.camionetaService.eliminar(id);
      }
      catch(e){
         return errReturn(e, "Error al eliminar camioneta");
      }
   }

   @Patch(":id/modelo/:modelo")
   cambiarmModelo(@Param('id') id: number, @Param('modelo') modelo: number) {
      try{
         return this.camionetaService.cambiarModelo(id, modelo);
      }
      catch(e){
         return errReturn(e, "Error al modificar edad del camioneta");
      }
   }
}
