import { Optional } from "@nestjs/common";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class alteraPessoaDTO {
    @IsString()
    @Optional()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    NOME: string;

    

    @IsDate()
    @Optional()
    @IsNotEmpty({message: "Nascimento não pode ser vazio"})
    NASCIMENTO: Date;

    @IsString()
    @Optional()
    @IsNotEmpty({message: "Pais não pode ser vazio"})
    PAIS: string;
}