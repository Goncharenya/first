jQuery(function($){
   $(document).on("click", ".mobile-menu", function(){
       $(".mobile-menu__line").toggleClass("active");
      $(".menu-list").toggleClass("open");


   })
});