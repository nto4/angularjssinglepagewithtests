describe('angularjs single page grad operationst', function () {
  it('should add a todo', async function () {
    browser.waitForAngular
    await browser.get('http://localhost:8082/#!/ogrenciler/');
    await element(by.id('KayitEkle')).click();

    await element(by.name('Ad')).sendKeys('mehmettest');
    element(by.name('Soyad')).sendKeys('basaran');

    element(by.name('Tc')).sendKeys('12345678901');
   
    element(by.id('olustur')).click();
    
    expect(element(by.id('x')).getText()).toEqual('mehmettest');
    expect(element(by.id('y')).getText()).toEqual('basaran');
    expect(element(by.id('z')).getText()).toEqual('12345678901');
    
    await expect(browser.getTitle()).toEqual('test');
    var yoklama = element.all(by.repeater('ogrenci in $ctrl.ogrenciler'));
    expect(yoklama.count()).toBe(1);
    await element(by.id('sil')).click();
    
  
    element(by.className('container')).getAttribute('mehmettest');
    element(by.className('container')).getAttribute('basaran');
    element(by.className('container')).getAttribute('12345678901');

  });
});