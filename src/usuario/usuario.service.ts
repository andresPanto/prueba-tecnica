import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateUsuarioDTO } from './dto/create-usuario.dto';
import { UpdateUsuarioDTO } from './dto/update-usuario.dto';
import { Usuario } from './usuario.model';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [];

  crearUsuario(createUsuarioDTO: CreateUsuarioDTO): Usuario {
    const { nombre, apellido, email, password } = createUsuarioDTO;

    const usuario: Usuario = {
      nombre,
      apellido,
      email,
      password,
    };

    this.usuarios.push(usuario);

    console.log('usuarioo');
    console.log(usuario);
    return usuario;
  }

  eliminarUsuario(email) {
    const usuario = this.usuarios.find((usuario) => usuario.email == email);
    console.log(usuario);
    const index = this.usuarios.indexOf(usuario);
    console.log(index);
    if (index > -1) {
      this.usuarios.splice(index, 1);
    } else {
      throw new NotFoundException();
    }
  }

  actualizarUsuario(nuevoUsuario: CreateUsuarioDTO, email: string): Usuario {
    const usuario = this.usuarios.find((usuario) => usuario.email == email);
    console.log(usuario);
    const index = this.usuarios.indexOf(usuario);
    if (index > -1) {
      this.usuarios[index] = nuevoUsuario;
      return this.usuarios[index];
    } else {
      throw new NotFoundException();
    }
  }

  actualizarDatosUsuario(
    nuevoUsuario: UpdateUsuarioDTO,
    emailUsuario: string,
  ): Usuario {
    const usuario = this.usuarios.find(
      (usuario) => usuario.email == emailUsuario,
    );
    console.log(usuario);
    const index = this.usuarios.indexOf(usuario);
    if (index > -1) {
      const { nombre, apellido, email, password } = nuevoUsuario;
      if (nombre) this.usuarios[index].nombre = nombre;
      if (apellido) this.usuarios[index].apellido = apellido;
      if (email) this.usuarios[index].email = email;
      if (password) this.usuarios[index].password = password;

      return this.usuarios[index];
    } else {
      throw new NotFoundException();
    }
  }
}
