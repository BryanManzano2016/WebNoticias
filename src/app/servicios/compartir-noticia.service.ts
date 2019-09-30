import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Noticia } from '../clases/noticia';

@Injectable({
  	providedIn: 'root'
})

export class CompartirNoticiaService {
  
	private noticiaElegida = new BehaviorSubject([]);
	noticiaElegidaActual = this.noticiaElegida.asObservable();

	private validarOperacion = new BehaviorSubject([]);
  	validarOperacionActual = this.validarOperacion.asObservable();

  	constructor() { 
	}

	cambiarNoticiaElegida(data: Noticia[]) {
    	this.noticiaElegida.next(data);
  	}

	cambiarValidar(data: boolean[]) {
		this.validarOperacion.next(data);
	}	  
	
}
