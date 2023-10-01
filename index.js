$(document).ready(function() {
 
    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('loaded');
      },800);
   
  });

  // Show & hidden animation


  const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show-left');
      }
    });
  });
  
    const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
    hiddenElementsLeft.forEach((el) => observerLeft.observe(el));
  

    const observerRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show-right');
        }
      });
    });
    
      const hiddenElementsRight = document.querySelectorAll('.hidden-right');
      hiddenElementsRight.forEach((el) => observerRight.observe(el));
    
   // Închideți meniul când se face clic pe un element din meniu pe versiunea mobilă
$('nav ul a').on('click', function() {
  if ($(window).width() <= 710) {
      $('input[type="checkbox"]').prop('checked', false);
  }
});

      