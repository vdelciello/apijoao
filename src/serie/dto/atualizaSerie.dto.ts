import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsString } from "class-validator";


export class AlteraSerieDTO {
    @IsString()
    @Optional()
    @IsNotEmpty ({message: "Nome não pode ser vazio"})
    NOME: string;

    @IsString()
    @Optional()
    @IsNotEmpty({message: " Episódio não pode ser vazio"})
    EPISODIO: string;

    @IsString()
    @Optional()
    @IsNotEmpty({message: " Temporada não pode ser vazio"})
    TEMPORADA: string;
}
