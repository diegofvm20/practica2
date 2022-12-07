import { Injectable } from '@nestjs/common';
// Importamos el modelo de camioneta
import { Camioneta } from '../models/Camioneta.model';

@Injectable()
export class CamionetaService {

   // Como no hay base de datos aun empleamos una variable en memoria:
   private camionetas: Camioneta[] = [{
      marca: 'audi',
      color: 'rojo',
      modelo: 2002,
      placa: 'ssh229',
      espacio_trasero: '100x100'
   }]

   /**
    * Método para obtener todas las camionetaes
    */
   public listar() : Camioneta[] {
      return this.camionetas
   }

   /**
    * Método para crear un camioneta
    */
   public crear(camioneta: Camioneta): Camioneta {
      this.camionetas.push(camioneta);
      return camioneta;
   }

   /**
    * Método para modificar un camioneta
    */
   public modificar(id: number, camioneta: Camioneta): Camioneta {
         this.camionetas[id] = camioneta
         return this.camionetas[id];
   }

   /**
    * Método para eliminar una camioneta
    * Debido a que usamos un filtro, para validar si se elimina el camioneta, 
    * primero se determina cuantos elementos hay en el arreglo y luego se hace una comparación.
    */
   public eliminar(id: number): boolean {
      const totalcamionetaesAntes = this.camionetas.length;
      this.camionetas = this.camionetas.filter((val, index) => index != id);
      if(totalcamionetaesAntes == this.camionetas.length){
         return false;
      }
      else{
         return true;
      }
   }

   /**
    * Método para modificar la edad de un camioneta
    */
   public cambiarModelo(id: number, modelo: number): Camioneta {
      this.camionetas[id].modelo = modelo;
      return this.camionetas[id];
   }

}
