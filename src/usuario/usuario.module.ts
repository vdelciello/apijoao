
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usuarioProviders } from './usuario.providers';
import { UsuarioService } from './usuario.service';
import { pessoaProviders } from 'src/pessoa/pessoa.providers';
import { PessoaService } from 'src/pessoa/pessoa.service';
import { emailUnicoValidator } from './validacao/email-unico.validator';


@Module({  
  imports: [DatabaseModule],
  controllers: [UsuarioController],  
  providers: [
    ...usuarioProviders,
    UsuarioService,
    ...pessoaProviders,
    PessoaService,
    emailUnicoValidator
  ],
  exports: [UsuarioService],
})
export class UsuarioModule {}
