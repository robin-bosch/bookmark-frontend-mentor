document.querySelector("#burger-btn").addEventListener("click", function() {
    let nav = document.querySelector("#mobile-menu");

    if(nav.classList.contains("open")) {
        nav.classList.remove("open");
        document.querySelector("#burger-btn").classList.remove("open");
    }

    else {
        nav.classList.add("open");
        document.querySelector("#burger-btn").classList.add("open");
    }
})


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