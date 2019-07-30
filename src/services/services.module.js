import angular from 'angular';
import ogrServices from './services';

let service = angular
  .module('services', [])
  .service('OgrServices', ogrServices);

export default service.name;