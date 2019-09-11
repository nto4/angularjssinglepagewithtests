import template from './ogr-edit.html';
class OgrEdit {

        constructor(OgrServices, $routeParams) {
                this.OgrServices = OgrServices;
                //if($routeParams.Id == undefined)
                //return;
                OgrServices.get($routeParams.Id)
                        .then(ogrenci => {
                                this.ogrenci = ogrenci;
                        }, ex => {
                                console.log(ex);
                        });
        }
        goList() {
                window.location.href = "#!/ogrenciler";
        }
        goAdd() {
                this.OgrServices.post(this.ogrenci).then(x => this.goList())
        }
        goUpdate() {
                this.OgrServices.put(this.ogrenci).then(x => this.goList())
        }
}
export default {
        controller: ["OgrServices", "$routeParams", OgrEdit],
        template: template
};
