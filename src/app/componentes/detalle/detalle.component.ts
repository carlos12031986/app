import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  detalle:any=null;
  constructor( @Inject(MAT_DIALOG_DATA) private data: any) {
      this.detalle = data.info;
     }

  ngOnInit(): void {
  }

}
