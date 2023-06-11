$(document).ready(function() {
 
    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('loaded');
      },800);
   
  });

  // Show & hidden animation


  const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting) {
        entry.target.classList.add('show-left');
      }
    });
  });
  
    const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
    hiddenElementsLeft.forEach((el) => observerLeft.observe(el));
  

    const observerRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
          entry.target.classList.add('show-right');
        }
      });
    });
    
      const hiddenElementsRight = document.querySelectorAll('.hidden-right');
      hiddenElementsRight.forEach((el) => observerRight.observe(el));
    

      
    
    