import { GENERO } from "src/genero/genero.entity";
import { PESSOA } from "src/pessoa/pessoa.entity";
import { SERIE } from "src/serie/serie.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class FILME{
    @PrimaryColumn()
    ID: string;

    @Column({length: 255}) 
    NOME: string;

    @Column("int")
    DURACAO: number;

    @Column({length: 255})
    SINOPSE: string;

    @Column({length: 255})
    ANO: string;


    @ManyToOne(() => GENERO, genero => genero.filmes)
    @JoinColumn({name: "NOME", referencedColumnName:"NOME"})
    genero:GENERO;
    
    // @ManyToOne(() => GENERO, genero => genero.filmes)
    // @JoinColumn({ name: 'IDGENERO', referencedColumnName:'ID'})
    // genero: GENERO;

    @ManyToMany(
        () => PESSOA,
        ator => ator.filmes,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
      )
    atores?: PESSOA[];

    @OneToOne(() => SERIE, series => series.filme)
    @JoinColumn({name: "NOME", referencedColumnName:"NOME"})
        series:SERIE;

    
    
}

