$(document).ready(function(){
    $(".btn").click(function(){
      $(".banner-message").fadeOut('slow');
    });
    $(".banner-container").click(function(){
      $(".banner-message").fadeIn('slow');
    });

    function myFunction() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    };



  });

  