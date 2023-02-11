// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));
  
    var divTags = document.querySelectorAll("div");
    console.log(divTags)
    
    for (let i = 0; i < divTags.length; i++) {
      if (divTags[i].id.startsWith("hour")) {
          // if (divTags[i].id.))
          hour_24 = divTags[i].id.slice(-2)
          console.log(hour_24)
          var hour = dayjs().hour()
          console.log(hour)
          if (hour_24 < hour) {
            divTags[i].setAttribute("class", "row time-block past");
          }  
          else if (hour_24 == hour) {
            divTags[i].setAttribute("class", "row time-block present");
          }
          else {
            divTags[i].setAttribute("class", "row time-block future");
          }
          //dayjs().hour() // gets current hour
          //newDate = dayjs().hour(12) // returns new dayjs object
    }} 
    
    const saveButton = document.querySelector("button");
  
    saveButton.addEventListener("click", function () {
      console.log("I pressed the button!")
      var note = document.getElementById("hour-09");
      console.log("Note: " + note)
      localStorage.setItem("hour-09", note);
    }
    );
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });