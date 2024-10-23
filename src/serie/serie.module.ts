import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { serieProviders } from "./serie.providers";
import { SerieService } from "./serie.service";
import { SerieController } from "./serie.controller";



@Module({
    imports: [DatabaseModule],
    controllers: [SerieController],
    providers: [
        ...serieProviders,
        SerieService,
    ],
    exports: [SerieService],
})

export class SerieModule {}