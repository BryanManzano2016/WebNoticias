import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Noticia } from '../clases/noticia';

@Injectable({
	providedIn: 'root'
})

export class CargarPreNoticiasService {
  	noticias: Noticia[];

  	constructor(private http: HttpClient) { }

	leerPreNoticias() {
		this.noticias = [];
		this.http.get('http://localhost:3000/leerPreNoticias').
			toPromise().then( (data: any) => {  
				this.noticias =  data;
		});
	}

	obtenerNoticias (): Noticia[] {
		return this.noticias;
	}

	leerNoticia(id: string) {
		// http://localhost:3000/leerNoticia?id=5d8e2f98c9c34e1cccd138ea
		const httpOptions = { params: new HttpParams().set('id', id) };
		this.http.get('http://localhost:3000/leerNoticia', httpOptions).
			toPromise().then( (data: any) => {  
				console.log(data);
		});
	}

}
