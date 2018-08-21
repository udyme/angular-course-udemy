import { Routes } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

export const usuario_routes: Routes = [
    { path: 'nuevo', component: UsuarioNuevoComponent },
    { path: 'editar', component: UsuarioEditarComponent },
    { path: 'detalle', component: UsuarioDetalleComponent },
    { path: '**', component: UsuarioNuevoComponent },
]

