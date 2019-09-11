import angular from "angular";
import ngRoute from "angular-route";
import ngMessages from "angular-messages";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
//import servicesmodule from "./services/services.module";
//import routesConfig from './routes';
import ogrlistmodule from "./components/ogr-list/ogr-list.module";
import ogreditmodule from "./components/ogr-edit/ogr-edit.module";
var app = angular.module('myApp', [ngRoute,ogrlistmodule,ogreditmodule,ngMessages])
.config(function($routeProvider) {
    $routeProvider
    .when('/ogrenciler', {
    template :"<ogr-list></ogr-list>"
    })    
    .when('/edit/:Id', {
        template :"<ogr-edit></ogr-edit>"
        })  
    .when('/edit/', {
        template :"<ogr-edit></ogr-edit>"
        })   
    .otherwise({redirectTo: '/ogrenciler'});
    });
