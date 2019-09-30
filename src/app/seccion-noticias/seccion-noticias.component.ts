import { Component, OnInit } from '@angular/core';
import { CargarPreNoticiasService } from '../servicios/cargar-pre-noticias.service';

import { CompartirNoticiaService } from '../servicios/compartir-noticia.service';
import { Noticia } from '../clases/noticia';

@Component({
	selector: 'app-seccion-noticias',
	templateUrl: './seccion-noticias.component.html',
	styleUrls: ['./seccion-noticias.component.scss']
})
export class SeccionNoticiasComponent implements OnInit {

	noticias: Noticia[]; //
	indices: number[];
	noticiaPort: Noticia[]; //
	indicesPort: number[];
	noticiaElegida: Noticia[]; //
	validarEnvio = [];


	constructor(private servicioCargarNoticias: CargarPreNoticiasService,
		private servicioCompartirNoticia: CompartirNoticiaService) {
	    
		this.servicioCompartirNoticia.noticiaElegidaActual.subscribe( e => this.noticiaElegida = e );
		this.servicioCompartirNoticia.validarOperacionActual.subscribe(e => this.validarEnvio = e);
      	this.servicioCompartirNoticia.cambiarValidar([true]);
		
	}

	ngOnInit() {	
		this.leerPreNoticias();
	}

	leerPreNoticias() {

		this.servicioCargarNoticias.leerPreNoticias();
		setTimeout(() => {
			this.noticias = this.servicioCargarNoticias.noticias;
			if (this.noticias !== undefined) {
				if (this.noticias.length > 0) {
					this.range(1, this.noticias.length);
					this.noticiaPortada();
				}
			}		
		}, 3000);

	}
	// Generar rango para noticias de portada y secundarias
	range(start: number, end: number) {
		this.indices = Array.from({length: (end - start)}, (v, k) => k + start);
		this.indicesPort = Array.from({length: (start - 0)}, (v, k) => k + 0);
	}
	// Copiar las noticias de portada
	noticiaPortada() {
		this.noticiaPort = [];
		for (let index = 0; index < 1; index++) {
			this.noticiaPort.push(this.noticias[index]);
		}
	}
	// cuando click en noticia
	elegirNoticia(id: string) {
		this.servicioCargarNoticias.leerNoticia(id);
		setTimeout(() => {
			this.noticiaElegida[0] = this.servicioCargarNoticias.noticia;
			if (this.noticiaElegida !== undefined) {
				if (this.noticiaElegida.length > 0) {
      				this.servicioCompartirNoticia.cambiarValidar([false]);
				}
			}		
		}, 3000);		
	}

}
