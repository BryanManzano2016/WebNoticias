import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionEditorComponent } from './seccion-editor/seccion-editor.component';
import { SeccionNoticiasComponent } from './seccion-noticias/seccion-noticias.component';
import { VisualizarNoticiaComponent } from './visualizar-noticia/visualizar-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionEditorComponent,
    SeccionNoticiasComponent,
    VisualizarNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
