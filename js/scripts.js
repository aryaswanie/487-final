$(document).ready(function() {
  console.log('Ready to begin the test...');

  $( ".mobile-btn" ).click(function() {
      $( ".mobile_nav" ).slideToggle( "slow" );
  $( ".mobile_nav" ).css("display", "flex");

});

});