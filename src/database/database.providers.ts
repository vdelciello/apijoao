
import { Module } from "@nestjs/common";
import { DataSource } from "typeorm"

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            console.log('Inicializando o DataSource...');
            const dataSource = new DataSource({
                type:"mysql",
                host:"localhost",
                port: 3306,
                username:"root",
                password:"",
                database: "PROJETOAPI",
                entities: [
                    __dirname + "/../**/*.entity{.ts,.js}"
                ],
                synchronize:false,
            });
            try{
                await dataSource.initialize();
                console.log('DateSource inicializado com sucesso.');
                return dataSource;
            } catch(error){
                console.error("Erro ao inicializar o DataSource:", error);
                // throw new Error("Falha na inicialização do DataSource");
            }
        },
    },
];

@Module({
    providers: [...databaseProviders],
    exports: ['DATA_SOURCE'], 
  })
  export class DatabaseModule {}