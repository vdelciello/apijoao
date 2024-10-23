import { Controller, Post, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { FilesService } from './files.service';
import multerConfig from './multer-config';

@Controller('arquivos') // Ajuste a rota conforme necessário
export class FileController {
    constructor(private readonly fileService: FilesService) {}

    @Post()
    @UseInterceptors(FileInterceptor('arquivo', multerConfig))
    async uploadArquivo(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
        return this.fileService.salvarDados(file, req);
    }
}
