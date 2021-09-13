topScrollButton = document.getElementById("top-scroll-btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topScrollButton.style.display = "block";
    } else {
        topScrollButton.style.display = "none";
    }
  }

  function topScroll() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

console.log(topScrollButton)