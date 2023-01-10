import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/create-usuario.dto';
import { UpdateUsuarioDTO } from './dto/update-usuario.dto';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private _ususarioService: UsuarioService) {}

  @Post()
  crearUsuario(@Body() createUsuarioDTO: CreateUsuarioDTO): Usuario {
    return this._ususarioService.crearUsuario(createUsuarioDTO);
  }

  @Delete('/:email')
  eliminarUsuario(@Param('email') email: string): void {
    return this._ususarioService.eliminarUsuario(email);
  }

  @Put('/:email')
  actualizarUsuario(
    @Body() createUsuarioDTO: CreateUsuarioDTO,
    @Param('email') email: string,
  ): Usuario {
    return this._ususarioService.actualizarUsuario(createUsuarioDTO, email);
  }

  @Patch(':/email')
  actualizarDatosUsuario(
    @Body() updateUsuarioDTO: UpdateUsuarioDTO,
    @Param('email') email: string,
  ) {
    return this._ususarioService.actualizarDatosUsuario(
      updateUsuarioDTO,
      email,
    );
  }

  /*@Delete('/:id')
  deleteProjectByID(@Param('id') id: string) {
    return this.projectService.deleteProjectByID(id);
  }*/
}
