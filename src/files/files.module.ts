import { Module } from "@nestjs/common";
import { FileController } from "./files.controller";
import { FilesService } from "./files.service";
import { filesProviders } from "./files.providers";
import { DatabaseModule } from "src/database/database.module";


@Module({
    imports: [DatabaseModule],
    controllers:[FileController],
    providers: [...filesProviders,
        FilesService,]
})

export class FilesModule{
    
}
