<<<<<<< HEAD
const formEl = document.getElementById('earthquake-form');

let secondsRemaining = 5;

setTimeout(() => {

  notice.style.display = 'none';

}, 5000);

let countDownInterval = setInterval(function () {
  if (secondsRemaining > 0) {
    secondsRemaining--;
    console.log(secondsRemaining);
  } else {
    clearInterval(countDownInterval);
  }

}, 1000);

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const notice = document.getElementById("notice");
  const streetEl = document.getElementById('street');
  const cityEl = document.getElementById('city');
  const stateEl = document.getElementById('state');
  const zipcodeEl = document.getElementById('zipcode');
  const BASE_URL_Zip = 'http://api.positionstack.com/v1/forward'
  const API_KEY_Zip = '3048ee1b331b060f85d5005ca6e4d50c'
  const street = streetEl.value;
  const city = cityEl.value;
  const state = stateEl.value;
  const zipcode = zipcodeEl.value;
  const query = `${street} ${city} ${state} ${zipcode}`;
  const zipApi = `${BASE_URL_Zip}?access_key=${API_KEY_Zip}&query=${query}`;


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

        usgs(latitude, longitude)

        localStorage.setItem('coordinates', latitude)
        localStorage.setItem('coordinates', longitude)
        console.log('Coordinates are:  ' + latitude + ', ' + longitude)
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

          const place = responseJson.features[i].properties.place;
          console.log(place);

          const magnitude = responseJson.features[i].properties.mag;
          console.log(magnitude);

          let item = document.createElement("li")
          item.textContent = `${magnitude}, ${place}`
          ul.appendChild(item);

          localStorage.setItem('magnitude', magnitude)
          console.log('Magnitude is:  ' + magnitude);
        }//end of for loop
      });


  }



  //end of on click

  function streetValidation(x) {
    let xLength = x.value.length > 3
    if (!xLength) {
      x.validity.value = false
      x.setCustomValidity('This field must be more than three characters, please try again.')
      x.parentElement.classList.remove('valid');
      x.parentElement.classList.add('invalid');
      x.reportValidity();
      console.log('Bad input');
      return false;
    } else {
      x.validity.valid = true;
      x.setCustomValidity('');
      x.parentElement.classList.remove('invalid');
      x.parentElement.classList.add('valid');
      return true;
    }
  };

  function stateValidation(x) {
    const stateRegex = /^|A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY]$/;
    if (!x.value.match(stateRegex)) {
      x.setCustomValidity("Invalid state abbreviation, please try again.")
      x.parentElement.classList.remove('valid');
      x.parentElement.classList.add('invalid');
      x.reportValidity();
      console.log('Bad input')
    } else {
      x.validity.valid = true;
      x.setCustomValidity('');
      x.parentElement.classList.remove('invalid');
      x.parentElement.classList.add('valid');
    }
  };

  function zipValidation(x) {
    const zipRegex = /^\d{5}$/;
    if (!x.value.match(zipRegex)) {
      x.setCustomValidity("Invalid zipcode format, please try again.")
      x.parentElement.classList.remove('valid');
      x.parentElement.classList.add('invalid');
      x.reportValidity();
      console.log('Bad input')
    } else {
      x.validity.valid = true;
      x.setCustomValidity('');
      x.parentElement.classList.remove('invalid');
      x.parentElement.classList.add('valid');
    }
  };

  const streetValidity = (e) => {
    e.preventDefault();
    streetValidation(streetEl);
  };

  const cityValidity = (e) => {
    e.preventDefault();
    validState(cityEl);
  };

  const stateValidity = (e) => {
    e.preventDefault();
    stateValidation(stateEl);
  };

  const zipValidity = (e) => {
    e.preventDefault();
    zipValidation(zipcodeEl);
  };

  streetEl.addEventListener("change", streetValidity, true);
  cityEl.addEventListener("change", cityValidity, true);
  stateEl.addEventListener("change", stateValidity, true);
  zipcodeEl.addEventListener("change", zipValidity, true);

});


=======
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

  
>>>>>>> 45f66e576b01e5271b1c776e7421f7d40574e03f
