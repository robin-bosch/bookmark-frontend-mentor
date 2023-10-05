/**
 * Toggles the open and close animation for the menu
 * #burger-btn and #header-logo get their own open class to toggle their visibility (hidden when open)
 */
function toggleMenu() {
  document.querySelector("#mobile-menu").classList.toggle("open");
  document.querySelector("#burger-btn").classList.toggle("open");
  document.querySelector("#header-logo").classList.toggle("open");

}
// Attached to the menu button and the close button in the menu
document.querySelector("#burger-btn").addEventListener("click", toggleMenu);
document.querySelector("#close-btn").addEventListener("click", toggleMenu);


/**
 * Scrolls the feature container to the left or right depending on the clicked tab
 * 
 * @param {*} tabIndex - Index of the tab to show
 */
function showTab(tabIndex) {
    // Remove the active status where the status is not active for every link 
    // Add the active status to the link where the index matches the new index
    document.querySelectorAll('.feature-nav-link').forEach((link, index) => {
        if(index == tabIndex) {
            link.classList.add("active");
        }
        else {
            link.classList.remove("active");
        }
    });
    document.querySelectorAll('.feature-tab').forEach((tab) => {
        tab.style.transform = `translateX(-${tabIndex*100}%)`;
    });
}

//Show the first tab
showTab(0);


/**
 * Attaches an event listener to every FAQ question to expand it.
 */
document.querySelectorAll(".faq-question-header").forEach((question, index) => {
    question.addEventListener("click", function() {

        this.classList.toggle("open");
        let questionBody = this.nextElementSibling;

        if (questionBody.style.maxHeight) {
            questionBody.style.maxHeight = null;
        }
        else {
            questionBody.style.maxHeight = questionBody.scrollHeight + "px";
        }
    });
})


/*
* Prevent the submit to inject the own error message if the email address is not valid
*/
document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');


    // Check if the email valid
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailError.style.display = 'none';
        emailInput.classList.remove('input-error');

        // Submit
        // this.submit();
    }
    else {
        // Display error message
        emailError.style.display = 'block';
        emailInput.classList.add('input-error');
    }
});