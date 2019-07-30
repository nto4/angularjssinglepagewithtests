describe('Protractor Demo App', function() {
it(/**'should have a title'**/'should return Deniz', async function() {
//browser.get('http://juliemr.github.io/protractor-demo/');

// browser.getTitle()).toEqual('Super Calculator');
//expect(el.getAttribute('6'));
/** await browser.get('http://www.angularjs.org');
 
 await element(by.model('yourName')).sendKeys('Deniz');

 var greeting = element(by.binding('yourName'));x

 expect(await greeting.getText()).toEqual('Hello Deniz!');
 **/
//browser.waitForAngularEnabled(false);
 browser.waitForAngular
await browser.get('https://localhost:44364/Car/Create'); 
 

 
await element(by.id('Name')).sendKeys('Deniz');

// var writtenText = await element(by.id('Name')).getText();

element(by.buttonText('Create')).click;
 
// var nameSearch = 
await element(by.className('container body-content')).getAttribute('Deniz');
 
// var x = nameSearch.getText('Deniz');
 
//expect(await x.toBe('Deniz'));
 
//let divs = document.getElementsByClassName("container body-content");

// var x = divs.search('Deniz');

// expect(await x.toBe('Deniz'));
 
//var elementToClick = $('Create');
/** 
 browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 10000).then ( function () 
 { element(by.buttonText('Create')).click();});**/

 
//await browser.get('https://localhost:44364/Car/Index');



 });
 });

