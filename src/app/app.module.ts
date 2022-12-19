import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarcadoresComponent } from './marcadores/marcadores.component';
import { DeportesComponent } from './deportes/deportes.component';
import { EquiposComponent } from './equipos/equipos.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcadoresComponent,
    DeportesComponent,
    EquiposComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
