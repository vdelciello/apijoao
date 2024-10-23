import { IsDate, IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";


export class CriaPessoaDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    NOME: string;

    @IsDate()
    @IsNotEmpty({message: "Nascimento não pode ser vazio"})
    NASCIMENTO: Date;

    @IsString()
    @IsNotEmpty({message: "Pais não pode ser vazio"})
    PAIS: string;
}