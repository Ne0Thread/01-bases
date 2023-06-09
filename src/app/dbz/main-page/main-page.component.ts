import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes:Personaje[]=[
    {
      nombre: "Goku", 
      poder:15000
    },
    {
      nombre: "Vegeta",
      poder: 7500
    }
  ]
  nuevo:Personaje={
    nombre: 'Maestro Roshi',
    poder: 10000
  }
 
  cambiarNombre(event:any){
    console.log(event.target.value)
  }
  agregarNuevoPersonaje(argumento:Personaje){
    // console.log('MAin page component')
    // console.log(argumento);
    this.personajes.push(argumento);
  }

 

}
