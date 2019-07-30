import "angular";
import "angular-mocks";
import "./../../index.js";

describe('Ogr List html', () => {
    var $compile;
    var $rootScope;
    var OgrServices;
    var $q;
    //var ctrl;
    beforeEach(() => {
        jasmine.addCustomEqualityTester(angular.equals);
    });
    //asdasd
    beforeEach(angular.mock.module('myApp'));
    //console.log("test");
    
    beforeEach(angular.mock.inject((_$rootScope_, _$q_, _$compile_,_OgrServices_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $q = _$q_;
       // ctrl = $componentController('ogrList');
        //console.log("test");
        OgrServices = _OgrServices_;
      //  console.log(OgrServices);
        debugger;
        spyOn(OgrServices, 'getAll').and.callFake(()=>{
           return $q.when([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);
        });
    }));
    
    it('should replace the content with the ogr-list component', function() {       
        const element = $compile('<ogr-list></ogr-list>')($rootScope.$new());
        $rootScope.$digest();
        expect(element.html()).toContain('id="karma-component-test" value="test successful"');
        expect(OgrServices.getAll).toHaveBeenCalled();
    });
   });

/*
import "angular";
import "angular-mocks";
import "./../../index.js";

describe('Ogr List html', () => {
    var $compile;
    var $rootScope;
    var OgrServices;
    var $q;
    //var ctrl;
    beforeEach(() => {
        jasmine.addCustomEqualityTester(angular.equals);
    });
    //asdasd
    beforeEach(angular.mock.module('myApp'));
    //console.log("test");
    
    beforeEach(angular.mock.inject((_$rootScope_, _$q_, _$compile_,_OgrServices_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $q = _$q_;
       // ctrl = $componentController('ogrList');
        //console.log("test");
        OgrServices = _OgrServices_;
      //  console.log(OgrServices);
        debugger;
        spyOn(OgrServices, 'getAll').and.callFake(()=>{
           return $q.when([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);
        });
    }));
    
    it('should replace the content with the ogr-list component', function() {       
        const element = $compile('<ogr-list></ogr-list>')($rootScope.$new());
        $rootScope.$digest();
        expect(element.html()).toContain('id="karma-component-test" value="test successful"');
        expect(OgrServices.getAll).toHaveBeenCalled();
    });
   });
*/











   
/*
//duzenlenecek
import "angular";
import "angular-mocks";
import "./../../index.js";
describe('OgrList Page', () => {
    var $compile;
    var $rootScope;

    beforeEach(() => {
        jasmine.addCustomEqualityTester(angular.equals);

    });

    beforeEach(angular.mock.module('myApp'));



    beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;

    }));

    it('should replace the content with the ogr-list component', function () {
        const html = "<ogr-list ></ogr-list>";
        const element = $compile(html)($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('id="karma-component-test" value="test successful"');
    });
});

*/

/*
import "angular";
import "angular-mocks";
import "./../../index.js";

describe('OgrList Page', () => {
    var $compile;
    var $rootScope;
    var mockedItemsService;

    beforeEach(() => {
        jasmine.addCustomEqualityTester(angular.equals);
        jasmine.mockedItemsService($http);

    });

    beforeEach(angular.mock.module('myApp'));


    beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should replace the content with the ogr-list component', function() {
        const html = "<ogr-list></ogr-list>";
        const element = $compile(html)($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('id="karma-component-test" value="test successful"');
    });
   });
   */

/*
import "angular";
import "angular-mocks";
import "./../../index.js";
import { element } from "protractor";

describe('Ogrenci listesi', function () {

    beforeEach(angular.mock.module('myApp'));

    describe('PersonListController', function () {
        var $compile, ctrl;

        beforeEach(angular.mock.inject(function (_$rootScope_, _$compile_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();


            // $httpBackend = _$httpBackend_;
            // $httpBackend.expectGET('http://localhost:1234/api/home/')
            //     .respond([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);

            const html = "<ogr-list></ogr-list>"

            //$compile services
           // ctrl = $componentController('ogrList');
        }));

        it('should create a `employees` property with 2 people fetched with `$http`', function () {

            $httpBackend.flush();
            expect(ctrl.ogrenciler).toEqual([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);
        });



    });

});
*/

/*
import "angular";
import "angular-mocks";
import "./../../index.js";

describe('Ogrenci listesi', function () {

    beforeEach(angular.mock.module('myApp'));

    describe('PersonListController', function () {
        var $httpBackend, ctrl;

        beforeEach(angular.mock.inject(function ($componentController, _$httpBackend_) {
            // $httpBackend = _$httpBackend_;
            // $httpBackend.expectGET('http://localhost:1234/api/home/')
            //     .respond([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);
            const html = "<ogr-list></ogr-list>"
            //$compile services
           // ctrl = $componentController('ogrList');
        }));

        it('should create a `employees` property with 2 people fetched with `$http`', function () {

            $httpBackend.flush();
            expect(ctrl.ogrenciler).toEqual([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);
        });



    });

});

*/
/*
//duzenlenecek
import "angular";
import "angular-mocks";
import "./../../index.js";
describe('OgrList Page', () => {
    var $compile;
    var $rootScope;

    beforeEach(() => {
        jasmine.addCustomEqualityTester(angular.equals);

    });

    beforeEach(angular.mock.module('myApp'));



    beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;

    }));

    it('should replace the content with the ogr-list component', function () {
        const html = "<ogr-list ></ogr-list>";
        const element = $compile(html)($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('id="karma-component-test" value="test successful"');
    });
});

*/

/*
import "angular";
import "angular-mocks";
import "./../../index.js";

describe('OgrList Page', () => {
    var $compile;
    var $rootScope;
    var mockedItemsService;

    beforeEach(() => {
        jasmine.addCustomEqualityTester(angular.equals);
        jasmine.mockedItemsService($http);

    });

    beforeEach(angular.mock.module('myApp'));


    beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should replace the content with the ogr-list component', function() {
        const html = "<ogr-list></ogr-list>";
        const element = $compile(html)($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('id="karma-component-test" value="test successful"');
    });
   });
   */

/*
import "angular";
import "angular-mocks";
import "./../../index.js";
import { element } from "protractor";

describe('Ogrenci listesi', function () {

    beforeEach(angular.mock.module('myApp'));

    describe('PersonListController', function () {
        var $compile, ctrl;

        beforeEach(angular.mock.inject(function (_$rootScope_, _$compile_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();


            // $httpBackend = _$httpBackend_;
            // $httpBackend.expectGET('http://localhost:1234/api/home/')
            //     .respond([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);

            const html = "<ogr-list></ogr-list>"

            //$compile services
           // ctrl = $componentController('ogrList');
        }));

        it('should create a `employees` property with 2 people fetched with `$http`', function () {

            $httpBackend.flush();
            expect(ctrl.ogrenciler).toEqual([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);
        });



    });

});
*/

/*
import "angular";
import "angular-mocks";
import "./../../index.js";

describe('Ogrenci listesi', function () {

    beforeEach(angular.mock.module('myApp'));

    describe('PersonListController', function () {
        var $httpBackend, ctrl;

        beforeEach(angular.mock.inject(function ($componentController, _$httpBackend_) {
            // $httpBackend = _$httpBackend_;
            // $httpBackend.expectGET('http://localhost:1234/api/home/')
            //     .respond([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);
            const html = "<ogr-list></ogr-list>"
            //$compile services
           // ctrl = $componentController('ogrList');
        }));

        it('should create a `employees` property with 2 people fetched with `$http`', function () {

            $httpBackend.flush();
            expect(ctrl.ogrenciler).toEqual([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);
        });



    });

});

*/