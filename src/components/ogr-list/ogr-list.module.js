import angular from 'angular';
import ogrListComponent from './ogr-list.component';
import servicesmodule from "./../../services/services.module";//sedrvis mock
import "./ogr-list.css"
let OgrListModule = 
angular.module('ogrList',[servicesmodule])
 .component('ogrList',ogrListComponent);

export default OgrListModule.name;
