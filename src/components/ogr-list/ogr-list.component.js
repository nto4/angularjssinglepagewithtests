import template from './ogr-list.html';


class OgrListe {

        constructor(OgrServices) {
                this.OgrServices = OgrServices;
                this.OgrServices.getAll()
                        .then(ogrenciler => {
                                this.ogrenciler = ogrenciler;
                        }, ex => {
                                console.log(ex);
                        });
             
        }

        goEdit(Id) {
                window.location.href = "#!/edit/" + Id;
        }

        goDelete(Id) {
                this.OgrServices.delete(Id)
                        .then(() => {
                               
                                
                                //for local array deleting 
                                
                                var index = this.ogrenciler.findIndex(x => x.Id ===Id);
                                this.ogrenciler.splice(1, index);
                                 window.location.href = "#!/ogrenciler";
                        }, ex => 
                        { $window.alert(greeting);});
        }
       
        goEditt() {
                window.location.href = "#!/edit/";
        }
        goShorId(){
                
        }


        /*
        goInsert() {
          window.location.href = "#!/edit/" + Id;
        }
        */

}
export default {
        controller: ["OgrServices", OgrListe],
        template: template
};
