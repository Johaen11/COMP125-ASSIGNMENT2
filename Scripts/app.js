/* main JavaScript file */
/*File Name: app.js
* Author's Name: Johaen Gnanakumar
* Website's Name:comp125MyProfile
* File Description:This is where the javascipt functions are applied
*/
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
     // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
     paragraphElements[3] = document.getElementById("paragraphFour");
    // define your paragraphs array;
    var paragraphs = [];
    
     // create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    
    // check to see if sendButton exists
    if(sendButton) {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }
    
    
    // event handler function
    function sendButtonClick(event) {
        console.log("clicked!");
    }
    
    // create a reference to the firstName field
     var firstName = document.getElementById("firstName");
    
    // create a reference to the form
    var contactForm = document.getElementById("contactForm");
    
    
    if(contactForm) {
        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        });
    }
    
    /**
     * This function shows the input from each form field 
     * on the console
     * 
     * @method showFormInput
     * @return {void} 
     */
    function showFormInput() {
        console.log("++++++++++++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("++++++++++++++++++++++++++++++++");
    }
    
    
    // data for my pages
    paragraphs[0] = "My name is Johaen Gnanakumar. I am currently a student in centennial college for software Engineerin Technician. My mission is to complete my diploma and to be good at programming. After college, i would like to attend a university to further my studies in software.   ";
    paragraphs[1] = "This is a song that i worked on with fasecity and its a electronic mix of Justice Tribute";
    paragraphs[2] = "This is a video that i edited using wevideo.com. Warning: Explicit Language";
    paragraphs[3] = "A project that i am starting is making a business website for an Avon Employee. Website hasn't been made yet";
    
    
      
    // check to see if paragraph one exists
    var paragraphElementsLength = paragraphElements.length;
    
    // if paragraph exists then populate each paragraph on the page
 
    // check to see if paragraph one exists
    for (var index = paragraphElementsLength; index >= 0; index--) { 
        if(paragraphElements[index]) { 
         paragraphElements[index].innerHTML = paragraphs[index]; 
         }
    }
    
    
})();