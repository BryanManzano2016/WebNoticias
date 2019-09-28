import { Component, OnInit } from '@angular/core';
import { CargarPreNoticiasService } from '../servicios/cargar-pre-noticias.service';
import { Noticia } from '../clases/noticia';

@Component({
	selector: 'app-seccion-noticias',
	templateUrl: './seccion-noticias.component.html',
	styleUrls: ['./seccion-noticias.component.scss']
})
export class SeccionNoticiasComponent implements OnInit {

	noticias: Noticia[];
	indices: number[];
	noticiaPort: Noticia[];
	indicesPort: number[];

	constructor(private servicioGeneradorTags: CargarPreNoticiasService) { }

	ngOnInit() {	
		this.leerPreNoticias();
	}

	leerPreNoticias() {

		this.servicioGeneradorTags.leerPreNoticias();
		setTimeout(() => {
			this.noticias = this.servicioGeneradorTags.obtenerNoticias();									
			if (this.noticias !== null) {
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
}


// // console.log(Date().substring(0, 24));