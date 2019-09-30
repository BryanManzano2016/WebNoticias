import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SeccionNoticiasComponent } from './seccion-noticias/seccion-noticias.component';
import { VisualizarNoticiaComponent } from './visualizar-noticia/visualizar-noticia.component';

@NgModule({
  declarations: [
    AppComponent,    
    SeccionNoticiasComponent,
    VisualizarNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
