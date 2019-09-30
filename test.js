function myAPI(url) {
  return $.ajax({
    url: url
  })
}

var response1 = myAPI("https://randomuser.me/api/");

response1.done(function (data1) {
  var response2 = myAPI("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8792447a7832f123804f2176266deba7");

  response2.done(function (data2) {
    var total = { Bags: {} };
    // console.log(total);
    if (data1 !== null) {
      document.getElementById('first').innerHTML = data1.results[0].email;
      console.log(Object.keys(data1.results[0]));
      Object.keys(total).forEach(function (key) {
        total[key] = { No_of_rooms: (data1.results[0]) }; //storing the 1st api's data in one variable
        console.log("total 1 : ", total);
      });
    }
    if (data2 !== null) {
      document.getElementById('second').innerHTML = data2.name;
      console.log(Object.keys(data2));
      Object.keys(total).forEach(function (key) {
        total[key] = {...total[key], No_of_rooms_2: (data2) }; //added both values in one variable
        console.log("total 2 : ", total);
      });
    }
  });
});

