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