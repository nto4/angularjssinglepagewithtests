//import { element } from "protractor";

describe('angularjs single page grad operationst', function () {
  it('should add a todo', async function () {
    browser.waitForAngular
    await browser.get('http://localhost:8082/#!/ogrenciler/');
    await element(by.id('KayitEkle')).click();

    await element(by.name('Ad')).sendKeys('mehmettest');
    element(by.name('Soyad')).sendKeys('basaran');
    //await expect(element(by.id('olustur')).disabled).toBe(true);
    element(by.name('Tc')).sendKeys('12345678901');
    //console.log(element(by.name('Tc')));
    element(by.id('olustur')).click();
    //await expect(element(by.id('olustur')).disabled).toBe(false);
    //await expect(element(by.id('olustur')).isEnabled()).toBe(true);
    //expect(foo.isEnabled()).toBe(false);
    // browser.getTitle().toEqual('Super Calculator');
    // element(by.id("olustur")).click;
    // await expect(element(by.id('x')))
    //var z = browser.element.all(by.repeater('ogrenci in $ctrl.ogrenciler')).count();
    //console.log(z);
    //expect().toEqual(2);
    // var foo = element(by.id('y'));
    // var tao = element(by.id('z'));
    
    // id vererek çözüm
    //expect(element(by.id('w')).getText()).toEqual({{ogrenci.Id}});
    expect(element(by.id('x')).getText()).toEqual('mehmettest');
    expect(element(by.id('y')).getText()).toEqual('basaran');
    expect(element(by.id('z')).getText()).toEqual('12345678901');
    //expect(foo.getText()).toEqual('mehmettest');
    await expect(browser.getTitle()).toEqual('test');
    await element(by.id('sil')).click();
    
    // container divinin içinde varmı? çalışmıor ?
    //element(by.className('container')).getAttribute('mehmettest');
    //element(by.className('container')).getAttribute('basaran');
    //element(by.className('container')).getAttribute('12345678901');
    //expect(element(by.id('184')).toEqual('184'));

    //Listede kaç ögrenci var ?
    var yoklama = element.all(by.repeater('ogrenci in $ctrl.ogrenciler'));//.first().getText();
    expect(yoklama.count()).toBe(1);
    //console.log(element.all(by.repeater('ogrenci in $ctrl.ogrenciler').get(0)));
    //expect(element.all(by.repeater('ogrenci in $ctrl.ogrenciler').get(0)).toBe(0));
    //console.log(yoklama.getText());
  // console.log(yoklama);
   //yoklama.getAttribute("Ad").then(function (Ad) { console.log(Ad)});
    //expect(yoklama[0].Ad).toBe('mehmettest');
   // console.log(yoklama[0]);
   // var mb = element.all(by.repeater('ogrenci in $ctrl.ogrenciler').get(0).getText());
    //console.log(mb);

    //expect(completedAmount.count()).toEqual(2);
  });
});




