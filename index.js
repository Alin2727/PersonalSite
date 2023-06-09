$(document).ready(function() {
 
    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('loaded');
      },100);
   
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
    

      //// Scroll behavior



      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
      
        var target = $($.attr(this, 'href'));
        var targetOffset = target.offset().top;
      
        if ($(window).scrollTop() !== targetOffset) {
          $('html, body').animate({
            scrollTop: targetOffset
          }, 1000);
        }
      });
      
    
    
//    $(document).ready(function() {
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 1200, function() {
//         // Check if the hash value has changed
//         if (window.location.hash !== hash) {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         }
//       });
//     }
//   });
// });
