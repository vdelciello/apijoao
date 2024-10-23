import { SERIE } from "../serie.entity";

export class listaSerieDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly TEMPORADA: string,
        readonly EPISODIO: String,

    ){}
}

const series = new listaSerieDTO("1", "Nome da Serie", "Temporada da Serie", "Episódio");
console.log(series);