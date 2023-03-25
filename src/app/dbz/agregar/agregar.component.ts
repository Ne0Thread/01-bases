import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() nuevo:Personaje ={
    nombre :'',
    poder : 0
  }
  agregar(){
    // event.preventDefault()
    // console.log(this.nuevo)
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    console.log(this.nuevo);
    
    this.nuevo ={
      nombre: '',
      poder:0
    }

  }

}
