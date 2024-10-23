
export class ListaUsuarioDTO{

    constructor(
            readonly ID: string, 
            readonly NOME:string,
            readonly TELEFONE: string,
            readonly SENHA: string
    ){}
}

export class ListagemUsuariosDTO{
    constructor(
        readonly usuario: ListaUsuarioDTO[],
    ){}
}