$(document).ready(function() {
  console.log('Ready to begin the test...');


// button click effect
  $( ".mobile-btn" ).click(function() {
      $( ".mobile_nav" ).slideToggle( "slow" );
  $( ".mobile_nav" ).css("display", "flex");
  });

// student objects

  var student = {
    name:'Brenda',
    age:'20',
    likesCoding:true,
  }

  if (student.likesCoding==true) {console.log(student.name + ', '+ student.age);}

// log data

$.ajax({
  type:'GET',
  url:'js/refugees.json',
  success:function(data) {
    console.log(data);
    buildContent(data);
  },
  error: function(error) {
    console.log(error);
  },
});

function buildContent(data) {
  console.log(data)
  var target = $(".cards");
  for (var i = 0; i < data.length; i ++) {
      console.log(data[i].Origin);
      console.log(data[i].Value);
      var country = data[i];
      var newHTML = mkDataHTML(country);
      newHTML.appendTo(target);

  }

  function mkDataHTML(country) {
    var origin = country.Origin;
    var value = country.Value;
    return $("<div class='card_item'><p class='data_line1'>" + origin + "</p>" + "<p class='data_line2'>" + value + " Requests </p></div>");
  }


}






});
