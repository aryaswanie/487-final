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


});
