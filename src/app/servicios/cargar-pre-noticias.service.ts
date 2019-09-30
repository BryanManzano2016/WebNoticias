import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Noticia } from '../clases/noticia';

@Injectable({
	providedIn: 'root'
})

export class CargarPreNoticiasService {
  	noticias: Noticia[];
	noticia: Noticia;

  	constructor(private http: HttpClient) { }

	leerPreNoticias() {
		this.noticias = [];
		this.http.get('http://192.168.100.33:3000/leerPreNoticias').
			toPromise().then( (data: any) => {  
				this.noticias =  data;
		});
	}

	leerNoticia(id: string) {
		const httpOptions = { params: new HttpParams().set('id', id) };
		this.http.get('http://192.168.100.33:3000/leerNoticia', httpOptions).
			toPromise().then( (data: any) => {  
				this.noticia =  data[0];
		});
	}

}
