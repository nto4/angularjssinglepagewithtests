
import "angular";
import "angular-mocks";
import "./../../index.js";

describe('Ogr List html', () => {
    let $compile;
    let $rootScope;
    
    beforeEach(() => {
        jasmine.addCustomEqualityTester(angular.equals);
    });
    
    beforeEach(angular.mock.module('myApp'));
    
    beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));
    
    it('should replace the content with the ogr-list component', function() {
        const element = $compile('<ogr-list></ogr-list')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('id="karma-component-test" value="test successful"');
    });
   });