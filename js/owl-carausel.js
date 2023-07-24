$(".owl-carousel").owlCarousel({
  loop:true,
  margin:10,
  responsive:{
    0:{
      items: 1,
    },
    600:{
      items:2,
    },
                                        
    900:{
      items:3
    },

    1200: {
      items:4
    },
  },

});




$('.owl-re').owlCarousel({
  dots:false,
  loop:true,
  margin:10,
  navText: ['<span><i class="bi bi-chevron-left"></i></span>', '<span><i class="bi bi-chevron-right"></i></span>'],
  nav:true,
  responsive:{
      
      0:{
          items:1
      },
      600:{
          items:2
      },
      1300:{
          items:2
      }
  }

})


$('.owl-dishes').owlCarousel({
  dots:false,
  loop:true,
  margin:10,
  navText: ['<span><i class="bi bi-chevron-left"></i></span>', '<span><i class="bi bi-chevron-right"></i></span>'],
  nav:true,
  autoplay:true,
  autoplayTimeout:1500,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      860:{
          items:3
      },
      1000:{
          items:3
      }
  }
})

$('.owl-carousel1').owlCarousel({
  dots:false,
  loop:true,
  margin:10,
  navText: ['<span><i class="bi bi-chevron-left"></i></span>', '<span><i class="bi bi-chevron-right"></i></span>'],
  nav:true,
  autoplay:true,
  autoplayTimeout:1500,
  autoplayHoverPause:true,
  responsive:{
      
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }

})


$('.owl-carousel').owlCarousel({
  dots:false,
  loop:true,
  margin:10,
  navText: ['<span><i class="bi bi-chevron-left"></i></span>', '<span><i class="bi bi-chevron-right"></i></span>'],
  nav:true,    
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
