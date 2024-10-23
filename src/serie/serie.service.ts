import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import {v4 as uuid} from "uuid";
import {RetornoCadastroDTO, RetornoObjDTO} from "src/dto/retorno.dto";
import { SERIE } from "./serie.entity";
import { CriaSerieDTO } from "./dto/criaSerie.dto";
import { AlteraSerieDTO } from "./dto/atualizaSerie.dto";




@Injectable ()
export class SerieService {
    constructor(
        @Inject("SERIE_REPOSITORY")
        private serieRepository: Repository<SERIE>,
    ){}

    async listar (): Promise <SERIE[]> {
        return this.serieRepository.find();
    }

    async inserir (dados: CriaSerieDTO) : Promise<RetornoCadastroDTO>{
        let serie = new SERIE();
        serie.ID = uuid();
        serie.NOME = dados.NOME;
        serie.EPISODIO = dados.EPISODIO;
        serie.TEMPORADA = dados.TEMPORADA;

        return this.serieRepository.save(serie)
        .then((result) => {
            return <RetornoCadastroDTO>{
                id: serie.ID,
                message: "Serie cadastrado!"
            };
        })
        .catch((error) => {
            return <RetornoCadastroDTO>{
            id: "",
            message: "Houve um erro ao cadastrar." + error.message
        };
        })
    }

    localizarID(ID: string) : Promise<SERIE> {
        return this.serieRepository.findOne({
            where: {
                ID,
            },
        });
    }

    localizarNome(NOME: string) : Promise<SERIE> {
        return this.serieRepository.findOne({
            where: {
                NOME,
            },
        });
    }

    async remover (id: string) : Promise <RetornoObjDTO>{
        const serie = await this.localizarID(id);

        return this.serieRepository.remove(serie)
        .then((result) => {
            return <RetornoObjDTO>{
                return: serie,
                message: "serie excluido!"
            };
        })

        .catch((error) => {
            return <RetornoObjDTO>{
                return: serie,
                message: " Houve um erro ao excluir." + error.message
            };
        });
    }

    async alterar (id: string, dados: AlteraSerieDTO) : Promise <RetornoCadastroDTO>{
        const serie = await this.localizarID(id);

        Object.entries(dados).forEach(
            ([chave, valor]) => {
                if (chave === "id"){
                    return;
                }
                serie[chave] = valor;
            }
        )

        return this.serieRepository.save(serie)
        .then((result) => {
            return <RetornoCadastroDTO>{
                id: serie.ID,
                message: "serie alterado!"
            };
        })

        .catch((error) => {
            return <RetornoCadastroDTO>{
                id: "",
                message: " Houve um erro ao alterar." + error.message
            };
        });
    }

    

}