import angular from 'angular';
import servicesmodule from "./../../services/services.module";
import ogrEditComponent from './ogr-edit.component';
let OgrEditModule = 
angular.module('ogrEdit',[servicesmodule])
 .component('ogrEdit',ogrEditComponent);

export default OgrEditModule.name;
