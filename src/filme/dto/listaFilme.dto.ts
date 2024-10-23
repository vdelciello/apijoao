export class listaFilmeDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly DURACAO: number,
        readonly SINOPSE: string,
        readonly ANO: string,
       

    ){}
}

export class ListagemFilmesDTO{
    constructor(
        readonly filme: listaFilmeDTO[],
    ){}
}