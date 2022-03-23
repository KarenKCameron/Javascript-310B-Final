const formEl = document.getElementById('earthquake-form');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const streetEl = document.getElementById('street');
  const cityEl = document.getElementById('city');
  const stateEl = document.getElementById('state');
  const zipcodeEl = document.getElementById('zipcode');
  const BASE_URL_Zip = 'http://api.positionstack.com/v1/forward'

  const street = streetEl.value;
  const city = cityEl.value;
  const state = stateEl.value;
  const zipcode = zipcodeEl.value;
  const query = `${street} ${city} ${state} ${zipcode}`;
  const zipApi = `${BASE_URL_Zip}?access_key=${API_KEY_Zip}&query=${query}`;
  // const usgsApi = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${latitude}&longitude=${longitude}&maxradiuskm=25`
  class user  {
    constructor(street, city, state, zipcode){
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }
static getStreet(){
  return this.street
}
static getCity(){
  return this.city
}
static getState(){
  return this.state
}
static getZipcode(){
  return this.zipcode
}
  }  


  // class seismic {
  //   constructor(magnitude){
  //     this.magnitude = magnitude;
  //   }
  // }


  fetch(zipApi)
    .then(function (response) {
      // debugger;
      return response.json();
    })
    .then(function (responseJson) {
      console.log(responseJson);
      const ul = document.getElementById("coordinates")
      for (let i = 0; i < 1; i++) {

        const latitude = responseJson.data[i].latitude;
        console.log(latitude);

        const longitude = responseJson.data[i].longitude;
        console.log(longitude);

        let item = document.createElement("li")
        item.textContent = `${latitude}, ${longitude}`
        ul.appendChild(item);

        // console.log(latitude)

        usgs(latitude, longitude)

      };

    });

      function usgs(latitude, longitude) {
        const usgsApi = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${latitude}&longitude=${longitude}&maxradiuskm=25`
        fetch(usgsApi)
        .then(function (data) {
          return data.json();
        })
        .then(function (responseJson) {
          console.log(responseJson);
          const ul = document.getElementById("quakes")
          for (let i = 0; i < responseJson.features.length; i++) {

            const time = responseJson.features[i].properties.time;
            console.log(time);

            const place = responseJson.features[i].properties.place;
            console.log(place);

            const magnitude = responseJson.features[i].properties.mag;
            console.log(magnitude);

          }//end of for loop
        });

          
      }
   
  });//end of on click

  