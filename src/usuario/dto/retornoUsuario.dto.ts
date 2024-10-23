

import { USUARIO } from "../usuario.entity";


export class RetornoUsuarioDTO {
  
    readonly status: string;

    
    readonly usuario: USUARIO;

    constructor(status: string, usuario: USUARIO) {
        this.status = status;
        this.usuario = usuario;
    }
}
