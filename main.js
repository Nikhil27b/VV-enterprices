var imageSources = ["../assets/images/hero/hero1.jpeg","../assets/images/hero/hero2.jpeg","../assets/images/hero/hero3.jpeg","../assets/images/hero/hero4.jpeg"]

var index = 0;
setInterval(function(){
  if (index === imageSources.length) {
    index = 0;
  }
 var heroimage =  document.getElementById("heroimage");
 heroimage.src = imageSources[index] 
 heroimage.style.transition = "0.4s ease-in"
 index++;
}, 4000);



$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

v