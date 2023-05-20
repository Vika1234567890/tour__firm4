// slider
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
// $('.multiple-items').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });



// btn
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
      if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
            document.getElementById('buttonUp').style.display = "block";
      }else{
            document.getElementById('buttonUp').style.display = "none";
      }
}


function topFunction(){
  document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}
