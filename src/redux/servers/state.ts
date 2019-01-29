import Server from '../../db/entities/Server';
import { ServersState } from './types';

export const defaultServer: Server = {
  id: 0,
  name: 'loading',
  ip: 'loading',
  port: 0,
  password: 'THisIsCool324HashMan',
  active: true,
  selfHosted: false,
  rootPath: ''
};

export default [] as ServersState;