/*
import angular from "angular";
import "angular-mocks";
import "./../../index.js";

describe('OgrServices', function () {

    var $httpBackend;
    var OgrServices;
    var Persons = [
        { Id: 89, Ad: "mehmet", Soyad: "basaran", Tc: "01234567890" },
        { Id: 91, Ad: "serkan", Soyad: "sorman", Email: "01234567890" }
    ];

    beforeEach(function () {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(angular.mock.module("ogrList"));
    

    beforeEach(angular.mock.inject(function (_$httpBackend_, OgrServices) {
        console.log('injecting');
        $httpBackend = _$httpBackend_;
        OgrServices = OgrServices;
        console.log('injecting2');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
        console.log('injecting3');
    });

    it('should fetch the person data from the database', function (done) {

        $httpBackend
            .expectGET("http://localhost/api/home/")
            .respond(Persons);
            console.log('injecting4');
        OgrServices.get().then(response => {
            varpersons = response.data;
            expect(persons.length).toEqual(2);
            done();
        });

        $httpBackend.flush();
    });

});
*/