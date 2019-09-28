export class Noticia {
	prioridad: number;
	fecha: string;
	lugar: string;
	etiquetas: [];
	titulo: string;
	contenido: string;

	toString() {
		return this.prioridad + this.titulo + this.fecha + this.lugar;
	}
}
