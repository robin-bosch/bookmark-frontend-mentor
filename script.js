document.querySelector("#burger-btn").addEventListener("click", toggleMenu);
document.querySelector("#close-btn").addEventListener("click", toggleMenu);


function toggleMenu() {
  document.querySelector("#mobile-menu").classList.toggle("open");
  document.querySelector("#burger-btn").classList.toggle("open");
  document.querySelector("#header-logo").classList.toggle("open");

}

var acc = document.getElementsByClassName("faq-question-header");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("open");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

const panels = document.querySelectorAll('.feature-tab');
const links = document.querySelectorAll('.feature-nav-link');

function showPanel(panelIndex) {
  links.forEach((link, index) => {
    if(index == panelIndex) {
      link.classList.add("active");
    }
    else {
      console.log("this is not active")
      link.classList.remove("active");
    }
});
  panels.forEach((panel, index) => {
      panel.style.transform = `translateX(-${panelIndex*100}%)`;
  });
}


document.getElementById('#contact-form').addEventListener('submit', function (e) {
  console.log("submit")
  e.preventDefault(); // Prevent the form from submitting

  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  // Check if the email is not valid (you can use a more comprehensive validation)
  if (!isValidEmail(emailInput.value)) {
    emailError.style.display = 'block';
    emailInput.classList.add('input-error');
  } else {
    // Clear the error message and class if the email is valid
    emailError.style.display = 'none';
    emailInput.classList.remove('input-error');
    
    // Submit the form or perform other actions
    this.submit();
  }
});

function isValidEmail(email) {
  // Implement your email validation logic here
  // You can use regular expressions or other methods
  // This is a simple example
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Initially show the first panel
showPanel(0);