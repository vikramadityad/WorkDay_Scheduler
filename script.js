// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  $('.saveBtn').on('click', function(){
    console.log('test', this)
    var btnId = this.parentElement.id
    var inputval = $(this).prev().val()
    localStorage.setItem(btnId, inputval);
  })


  $(document).ready(function () {
       $('#currentDay').text(new Date().toLocaleString());
      for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      if (key.match(/^hour-\d+$/)) {
             $(`#${key} .description`).val(value);
      }
    }
  });
    //  $('#hour-9 .description').val(localStorage.getItem('hour-9'))

 

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  

  var getHour = dayjs().hour()
  if(getHour < 9 ) {
    $('.time-block').addClass('future')
  }
  else if(getHour > 12 && getHour <= 17) {
    getHour = getHour -12
  }
  else if(getHour > 17) {
    $('.time-block').addClass('past')
  }
  
  var currentHour = `#hour-${getHour}`
  var currDom = $(currentHour)
  console.log(currDom)
  if(currDom){
    currDom.addClass('present')
    currDom.nextAll().addClass('future')
    currDom.prevAll().addClass('past')
  }

  
  
 
  
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(new Date().toLocaleString())
});
