interface CatExpedienteModel {
  descripcionTipo: string;
  idTipo: number;
  idAcl?: number;
  nombreAcl: string;
  n_permiso: number;
  c_nombre: string;
}

interface MenuModel {
  idMenu: number;
  titulo: string;
  ruta: string;
  icono: string;
  mostrarInicio: boolean;
  descripcion: string;
}

interface ModuloModel {
  idModulo: number;
  modulo: string;
  ruta: string;
  titulo: string;
  idMenu: number;
}

interface InfUsuarioModel {
  idUser: number;
  apellidoMaterno?: any;
  apellidoPaterno: string;
  bloqueado: boolean;
  email: string;
  fechaCreacion: string;
  loginName: string;
  nombre: string;
  group: number[];
  catExpedientes: CatExpedienteModel[];
  menu: MenuModel[];
  modulo: ModuloModel[];
}

interface DataModel {
  token: string;
  refreshToken: string;
  changePassword: boolean;
  infUsuario: InfUsuarioModel;
}

export default interface LoginResModel {
  exito: boolean;
  mensaje: string;
  data: DataModel;
}
