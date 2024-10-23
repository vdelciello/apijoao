export class listaGeneroDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly DESCRICAO: string

    ){}
}
const genero = new listaGeneroDTO("1", "Nome do genero", "Descrição do genero");
console.log(genero);