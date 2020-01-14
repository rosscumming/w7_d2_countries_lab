import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: '#app',
    data: {
      selectedCountry: null,
      countries: null,
      countryFlags: null
    },
    mounted(){
      this.fetchCountry()
    },
    methods: {
      fetchCountry: function () {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
      },



      // .then(response => response.json()) //return object from JSON
      // .then(data => this.dogImgURL = data.message)
      // .catch(error => console.log("error logging", error))

    }
  })








});
