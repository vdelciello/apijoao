import { IsDate, isDate, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CriaFilmeDTO {
    @IsString()
    @IsNotEmpty ({message: "Nome não pode ser vazio"})
    NOME: string;

    @IsNumber()
    @IsNotEmpty({message: " Duração não pode ser vazio"})
    DURACAO: number;

    @IsString()
    @IsNotEmpty ({message: "Sinopse não pode ser vazio"})
    SINOPSE: string;

    @IsString()
    @IsNotEmpty ({message: "Ano não pode ser vazio"})
    ANO: string;

    @IsString()
    @IsNotEmpty ({message: "Ano não pode ser vazio"})
    GENERO: string;


    
} 