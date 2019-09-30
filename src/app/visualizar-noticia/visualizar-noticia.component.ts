import { Component, OnInit } from '@angular/core';

import { CompartirNoticiaService } from '../servicios/compartir-noticia.service';
import { Noticia } from '../clases/noticia';

@Component({
	selector: 'app-visualizar-noticia',
	templateUrl: './visualizar-noticia.component.html',
	styleUrls: ['./visualizar-noticia.component.scss']
})
export class VisualizarNoticiaComponent implements OnInit {

	noticiaElegida: Noticia[]; //
	validarEnvio = [];

	constructor(private servicioCompartirNoticia: CompartirNoticiaService) { 
	    this.servicioCompartirNoticia.noticiaElegidaActual.subscribe(e => this.noticiaElegida = e);
		this.servicioCompartirNoticia.validarOperacionActual.subscribe(e => this.validarEnvio = e);
	}

	ngOnInit() { }

}
