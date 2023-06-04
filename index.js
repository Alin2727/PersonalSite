$(document).ready(function() {
 
    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('loaded');
      },500);
   
  });

  // Show & hidden animation


  const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting) {
        entry.target.classList.add('show-left');
      }
      // } else{
      //   entry.target.classList.remove('show');
      // }
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
        // } else{
        //   entry.target.classList.remove('show');
        // }
      });
    });
    
      const hiddenElementsRight = document.querySelectorAll('.hidden-right');
      hiddenElementsRight.forEach((el) => observerRight.observe(el));
    
  