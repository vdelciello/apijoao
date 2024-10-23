import { DateOptions } from './../../node_modules/@sinclair/typebox/typebox.d';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SERIE } from './serie.entity';
import { SerieService } from './serie.service';
import { CriaSerieDTO } from './dto/criaSerie.dto';
import { AlteraSerieDTO } from './dto/atualizaSerie.dto';


@Controller("/serie")
export class SerieController{
    constructor(private readonly SerieService: SerieService){ 

    }

    @Get("listar")
    async listar (): Promise<SERIE[]>{
        return this.SerieService.listar();
    }

    @Post("")
    async criaSerie(@Body() dados: CriaSerieDTO): Promise<RetornoCadastroDTO>{
        return this.SerieService.inserir(dados)
    }

    @Put (":id")
    async alterarSerie(@Body() dados: AlteraSerieDTO, @Param("id") id: string): Promise<RetornoCadastroDTO>{
        return this.SerieService.alterar(id,dados)
    }

    @Get("ID-:id")
    async listarID(@Param("id") id:string): Promise<SERIE>{
        return this.SerieService.localizarID(id);
    }

    @Delete("remove-:id")
    async removeSerie(@Param("id") id: string): Promise<RetornoObjDTO>{
        return this.SerieService.remover(id);
    }
}