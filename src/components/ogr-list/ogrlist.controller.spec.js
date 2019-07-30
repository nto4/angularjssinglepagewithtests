import "angular";
import "angular-mocks";
import "./../../index.js";
    
describe('Ogrenci listesi controller', function () {

    beforeEach(angular.mock.module('myApp'));

    describe('PersonListController', function () {
        var $httpBackend, ctrl;

        beforeEach(angular.mock.inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_; 
            $httpBackend.expectGET('http://localhost:1234/api/home/')
                .respond([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);

            ctrl = $componentController('ogrList');
        }));

        it('should create a `employees` property with 2 people fetched with `$http`', function () {

            $httpBackend.flush();
            expect(ctrl.ogrenciler).toEqual([{ Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }]);
        });



    });

});