class ogrServices {
  constructor($http) {
    this.$http = $http;
    this.API_URL = "http://localhost:1234/api/home/";//mock
  }
  getAll() { // select *
    return this.$http.get(this.API_URL)
      .then(response => response.data);
    //asenkron isteklerde 
  }
  get(Id) { // select
    return this.$http.get(this.API_URL + Id)
      .then(response => response.data);
  }

  post(ogrenci) { // insert
    return this.$http.post(this.API_URL, JSON.stringify(ogrenci));
  }

  put(ogrenci) { // update
    return this.$http.put(this.API_URL, JSON.stringify(ogrenci));
  }

  delete(id) { // delete
    return this.$http.delete(this.API_URL + id);
  }

}
export default ["$http", ogrServices];