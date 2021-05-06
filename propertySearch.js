$(document).ready(function () {
  var data = {
    properties: [
      {
        id: "battaramulla",
        type: "House",
        bedrooms: 3,
        price: 250000,
        tenure: "Freehold",
        description:
        "An attractive three bedroom semi-detached family home situated within 0.5 miles of Battaramulla station with trains and within easy walking distance of local shops, schools, bus routes and National Trust Bank. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",        
        location: "Battaramulla Property",
        picture: "images/Thumbnails/battaramulla.jpg",
        url: "battaramulla.html",
        added: {
          month: "March",
          day: 15,
          year: 2020,
        },
      },
      {
        id: "borella",
        type: "House",
        bedrooms: 2,
        price: 300000,
        tenure: "Freehold",
        description:
        "An attractive three bedroom semi-detached family home situated within 0.5 miles of Borella station with trains and within easy walking distance of local shops, schools, bus routes and National Trust Bank. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",        
        location: "Borella Property",
        picture: "images/Thumbnails/borella.jfif",
        url: "borella.html",
        added: {
          month: "September",
          day: 14,
          year: 2020,
        },
      },
      {
        id: "galaha",
        type: "Flat",
        bedrooms: 3,
        price: 400000,
        tenure: "Freehold",
        description:
          "A good looking flat in Galaha with two bedrooms close to the main road with top hotels, schools, banks, and malls. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
        location: "Galaha Property",
        picture: "images/Thumbnails/galaha.jpg",
        url: "galaha.html",
        added: {
          month: "April",
          day: 12,
          year: 2019,
        },
      },
      {
        id: "galle",
        type: "Flat",
        bedrooms: 2,
        price: 500000,
        tenure: "Freehold",
        description:
        "A good looking flat in Galle with two bedrooms close to the main road with top hotels, schools, banks, and malls. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
        location: "Galle Property",
        picture: "images/Thumbnails/galle.png",
        url: "galle.html",
        added: {
          month: "July",
          day: 14,
          year: 2020,
        },
      },
      {
        id: "kotte",
        type: "Flat",
        bedrooms: 3,
        price: 600000,
        tenure: "Freehold",
        description:
        "A good looking flat in Kotte with two bedrooms close to the main road with top hotels, schools, banks, and malls. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
        location: "Kotte Property",
        picture: "images/Thumbnails/kotte.jpg",
        url: "kotte.html",
        added: {
          month: "August",
          day: 12,
          year: 2020,
        },
      },
      {
        id: "nugegoda",
        type: "House",
        bedrooms: 2,
        price: 650000,
        tenure: "Freehold",
        description:
        "An attractive three bedroom semi-detached family home situated within 0.5 miles of Kotte station with trains and within easy walking distance of local shops, schools, bus routes and National Trust Bank. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",        
        location: "Nugegoda Property",
        picture: "images/Thumbnails/nugegoda.jpg",
        url: "nugegoda.html",
        added: {
          month: "November",
          day: 24,
          year: 2020,
        },
      },
      {
        id: "nuwara-eliya",
        type: "House",
        bedrooms: 3,
        price: 700000,
        tenure: "Freehold",
        description:
        "An attractive three bedroom semi-detached family home situated within 0.5 miles of Nuwara Eliya station with trains and within easy walking distance of local shops, schools, bus routes and National Trust Bank. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",        
        location: "Nuwara Eliya Property",
        picture: "images/Thumbnails/nuwara.jpg",
        url: "nuwara eliya.html",
        added: {
          month: "January",
          day: 12,
          year: 2020,
        },
      },
      {
        id: "rajagiriya",
        type: "Flat",
        bedrooms: 2,
        price: 800000,
        tenure: "Freehold",
        description:
        "A good looking flat in Rajagiriya with two bedrooms close to the main road with top hotels, schools, banks, and malls. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
        location: "Rajagiriya Property",
        picture: "images/Thumbnails/rajagiriya.jpg",
        url: "rajagiriya.html",
        added: {
          month: "June",
          day: 14,
          year: 2019,
        },
      },
    ],
  };

  $(function () {
    $("#search").on("click", function () {
      var typeLand = $("#type option:selected").text();
      var date = $("#dateadded").val();
      var minumumBeds = $("#minBed option:selected").val();
      var maximumBeds = $("#maxBed option:selected").val();
      var minumumPrice = $("#minAmount option:selected").val();
      var maximumPrice = $("#maxAmount option:selected").val();

      var result = "<div class='card-deck'>";
      for (var i in data.properties) {
        if (typeLand == data.properties[i].type) {
          if (
            data.properties[i].bedrooms >= minumumBeds &&
            data.properties[i].bedrooms <= maximumBeds
          ) {
            if (
              data.properties[i].price >= minumumPrice &&
              data.properties[i].price <= maximumPrice
            ) {
              result +=
                "<div class='card'>" +
                "<img class='card-img-top img-fluid'" +
                "src=" +
                data.properties[i].picture +
                " />" +
                "<h1 class='card-title'>" +
                data.properties[i].location +
                "</h1>" +
                "<h3>" +
                data.properties[i].price +
                "</h3>" +
                "<p class='card-text'>" +
                data.properties[i].description +
                "</p>" +
                "<a class='btn btn-primary' href='" +
                data.properties[i].url +
                "'>Visit Property</a>" +
                "</div>";
            }
          }
        }
      }
      result += "</div>";
      document.getElementById("searches-response").innerHTML = result;
    });
  });
});
