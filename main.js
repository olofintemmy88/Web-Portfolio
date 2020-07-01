    $(document).ready(function () {
        $('.menu-toggler').on('click', function () {
            $(this).toggleClass('open');
            $('.top-nav').toggleClass('open');
        });
        $('.top-nav .nav-link').on('click', function () {
            $('.menu-toggler').removeClass('open');
            $('.top-nav').removeClass('open');
        });
        
        // Add smooth scrolling to all links
        //$('nav a[href="#"]').on('click', function(event){
            // make sure this.hash has a value before overriding default behavior
           // if(this.hash !=="") {
                // prevent default anchor click behavior
              //  event.preventDefault();
                // store hash
               // var hash = this.hash;
                // using jquery's animate() method to add smooth page scroll
                // The optional number (2000) specifies the number of milliseconds it takes to scroll to the specified area
               // $('html, body').animate({
                 //   scrollTop: $(hash).offset().top
               // }, 2000, function(){
                    // Add hash(#) to URL when done scrolling (default click behavior)
                  //  window.location.hash = hash;
               // });
            //}// end if
            //});
           $('nav a[href *= "#"]').on('click', function () {
             $('html, body').animate({
             scrollTop: $($(this).attr('href')).offset().top-100
           }, 2000);
          });  

     $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
          }, 2000);
    });

   AOS.init({
       easing: 'ease',
       duration: 1800,
         once: true
   });
});


