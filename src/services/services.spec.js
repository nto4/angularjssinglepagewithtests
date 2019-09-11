import "angular";
import "angular-mocks";
import "./../index.js";


describe('OgrServices', function () {

    var $httpBackend;
    var OgrServices;
    var Ogrenciler = [
        { Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' },
        { Id: '91', Ad: 'mehmet', Soyad: 'basaran', Tc: '01234567890' }
    ];
    beforeEach(function () {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(angular.mock.module("myApp"));

    beforeEach(angular.mock.inject(function (_$httpBackend_, _OgrServices_) {

        $httpBackend = _$httpBackend_;
        OgrServices = _OgrServices_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the person data from the database', function (done) {
        //debugger;
        $httpBackend
            .expectGET("http://localhost:1234/api/home/")
            .respond(Ogrenciler);


        OgrServices.getAll().then(response => {
            // console.log(response);
            var ogrenciler = response;
            //expect(ogrenciler[0].Id).toEqual("91");
            function countProperties(obj) {
                var count = 0;

                for (var property in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, property)) {
                        count++;
                    }
                }

                return count;
            }
            expect(Ogrenciler.length).toEqual(2);
            done();
        });
        $httpBackend.flush();
    });
});

