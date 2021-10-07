import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  bandera = false;
  
@Output () eventoSide: EventEmitter<boolean> = new EventEmitter(false);
  constructor() { }

  ngOnInit(): void {

  }

  toggleSidenav=()=>{
    let aux = !this.bandera;
    this.bandera = aux;
    this.eventoSide.emit(this.bandera);
    console.log(this.bandera)
  }

}
