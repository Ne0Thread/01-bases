import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public heroes : string[]=['spiderman','ironMan','Hulk','Thor'];
  public heroBorrado: string = '';

  borrarHeroe(){
    this.heroBorrado = this.heroes.pop() || '';
    console.log(this.heroBorrado);
  }
}
