import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar'; 
/***Componentes***/
import { DetalleComponent } from './componentes/detalle/detalle.component'; 

/***Material***/
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar/toolbar.component'; 
import {MatListModule} from '@angular/material/list';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    DetalleComponent,
    ToolbarComponent,
    MenuListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule
  ]  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
