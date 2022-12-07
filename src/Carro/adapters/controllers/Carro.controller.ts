import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { threadId } from 'worker_threads';
import { CarroService } from '../../domain/services/Carro.service';

interface Carro {
  marca: string,
  color: string,
  modelo: number,
  placa: string

  
}

@Controller()
export class CarroController {
  constructor(private readonly appService: CarroService) { }

  private Carros : Carro[] = [{
    marca: "mazda",
    color: "rojo",
    modelo: 2007,
    placa: "shj123"
  }]


  @Get()
  getHello(): Carro[] {
    return this.Carros;
  }


  @Post()
  crear(@Body() datos: Carro): Carro {
    this.Carros.push(datos);
    return datos;
  }

  @Put(":id")
  modificar(@Body() datos: Carro, @Param('id') id: number): Carro | string {
    try{
    this.Carros[id] = datos
    return this.Carros[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number){
    try{
      this.Carros = this.Carros.filter((val, index) => index != id);
      return true;
    }
    catch{
      return false;
    }
  }

  @Patch(":id/modelo/:modelo")
  cambiarEdad(@Param('modelo') id: number, @Param('modelo') modelo: number): Carro | string{
    try{
      this.Carros[id].modelo = modelo;
      return this.Carros[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`
    }
  }
}