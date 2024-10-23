import { DateOptions } from './../../node_modules/@sinclair/typebox/typebox.d';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { CriaGeneroDTO } from './dto/criaGenero.dto';
import { GENERO } from './genero.entity';
import { GeneroService } from './genero.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AlteraGeneroDTO } from './dto/atualizaGenero.dto';

@Controller("/genero")
export class GeneroController{
    constructor(private readonly GeneroService: GeneroService){}

    @Get("listar")
    async listar (): Promise<GENERO[]>{
        return this.GeneroService.listar();
    }

    @Post("")
    async criaGenero(@Body() dados: CriaGeneroDTO): Promise<RetornoCadastroDTO>{
        return this.GeneroService.inserir(dados)
    }

    @Put (":id")
    async alterarGenero(@Body() dados: AlteraGeneroDTO, @Param("id") id: string): Promise<RetornoCadastroDTO>{
        return this.GeneroService.alterar(id,dados)
    }

    @Get("ID-:id")
    async listarID(@Param("id") id:string): Promise<GENERO>{
        return this.GeneroService.localizarID(id);
    }

    @Delete("remove-:id")
    async removeGenero(@Param("id") id: string): Promise<RetornoObjDTO>{
        return this.GeneroService.remover(id);
    }
}