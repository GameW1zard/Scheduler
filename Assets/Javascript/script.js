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

  var Today = dayjs()
  var Hour = dayjs().format('HH')
 
  var H0 = [$("#hour-0"), dayjs().hour(0), $("#hour-0 > button"), $("#hour-0 > textarea")]
  var H1 = [$("#hour-1"), dayjs().hour(1), $("#hour-1 > button"), $("#hour-1 > textarea")]
  var H2 = [$("#hour-2"), dayjs().hour(2), $("#hour-2 > button"), $("#hour-2 > textarea")]
  var H3 = [$("#hour-3"), dayjs().hour(3), $("#hour-3 > button"), $("#hour-3 > textarea")]
  var H4 = [$("#hour-4"), dayjs().hour(4), $("#hour-4 > button"), $("#hour-4 > textarea")]
  var H5 = [$("#hour-5"), dayjs().hour(5), $("#hour-5 > button"), $("#hour-5 > textarea")]
  var H6 = [$("#hour-6"), dayjs().hour(6), $("#hour-6 > button"), $("#hour-6 > textarea")]
  var H7 = [$("#hour-7"), dayjs().hour(7), $("#hour-7 > button"), $("#hour-7 > textarea")]
  var H8 = [$("#hour-8"), dayjs().hour(8), $("#hour-8 > button"), $("#hour-8 > textarea")]
  var H9 = [$("#hour-9"), dayjs().hour(9), $("#hour-9 > button"), $("#hour-9 > textarea")]
  var H10 = [$("#hour-10"), dayjs().hour(10), $("#hour-10 > button"), $("#hour-10 > textarea")]
  var H11 = [$("#hour-11"), dayjs().hour(11), $("#hour-11 > button"), $("#hour-11 > textarea")]
  var H12 = [$("#hour-12"), dayjs().hour(12), $("#hour-12 > button"), $("#hour-12 > textarea")]
  var H13 = [$("#hour-13"), dayjs().hour(13), $("#hour-13 > button"), $("#hour-13 > textarea")]
  var H14 = [$("#hour-14"), dayjs().hour(14), $("#hour-14 > button"), $("#hour-14 > textarea")]
  var H15 = [$("#hour-15"), dayjs().hour(15), $("#hour-15 > button"), $("#hour-15 > textarea")]
  var H16 = [$("#hour-16"), dayjs().hour(16), $("#hour-16 > button"), $("#hour-16 > textarea")]
  var H17 = [$("#hour-17"), dayjs().hour(17), $("#hour-17 > button"), $("#hour-17 > textarea")]
  var H18 = [$("#hour-18"), dayjs().hour(18), $("#hour-18 > button"), $("#hour-18 > textarea")]
  var H19 = [$("#hour-19"), dayjs().hour(19), $("#hour-19 > button"), $("#hour-19 > textarea")]
  var H20 = [$("#hour-20"), dayjs().hour(20), $("#hour-20 > button"), $("#hour-20 > textarea")]
  var H21 = [$("#hour-21"), dayjs().hour(21), $("#hour-21 > button"), $("#hour-21 > textarea")]
  var H22 = [$("#hour-22"), dayjs().hour(22), $("#hour-22 > button"), $("#hour-22 > textarea")]
  var H23 = [$("#hour-23"), dayjs().hour(23), $("#hour-23 > button"), $("#hour-23 > textarea")]
  
  Timecolor()


  //Time Handleing
  function Timecolor(){
    if (Today.isBefore(H0[1]) === true) {console.log("its before 12"), H0[0].addClass("future")}
    else if (Today.isSame(H0[1]) === true) {console.log("it is H0"), H0[0].addClass("present")}
    else {console.log("its after 12"), H0[0].addClass("past")};
  
    if (Today.isBefore(H1[1]) === true) {console.log("its before H1"), H1[0].addClass("future")}
    else if (Today.isSame(H1[1]) === true) {console.log("it is H1"), H1[0].addClass("present")}
    else {console.log("its after H1"), H1[0].addClass("past")};
  
    if (Today.isBefore(H2[1]) === true) {console.log("its before H2"), H2[0].addClass("future")}
    else if (Today.isSame(H2[1]) === true) {console.log("it is H2"), H2[0].addClass("present")}
    else {console.log("its after H2"), H2[0].addClass("past")};
  
    if (Today.isBefore(H3[1]) === true) {console.log("its before H3"), H3[0].addClass("future")}
    else if (Today.isSame(H3[1]) === true) {console.log("it is H3"), H3[0].addClass("present")}
    else {console.log("its after H3"), H3[0].addClass("past")};
  
    if (Today.isBefore(H4[1]) === true) {console.log("its before H4"), H4[0].addClass("future")}
    else if (Today.isSame(H4[1]) === true) {console.log("it is H4"), H4[0].addClass("present")}
    else {console.log("its after H4"), H4[0].addClass("past")};
  
    if (Today.isBefore(H5[1]) === true) {console.log("its before H5"), H5[0].addClass("future")}
    else if (Today.isSame(H5[1]) === true) {console.log("it is H5"), H5[0].addClass("present")}
    else {console.log("its after H5"), H5[0].addClass("past")};
  
    if (Today.isBefore(H6[1]) === true) {console.log("its before H6"), H6[0].addClass("future")}
    else if (Today.isSame(H6[1]) === true) {console.log("it is H6"), H6[0].addClass("present")}
    else {console.log("its after H6"), H6[0].addClass("past")};
  
    if (Today.isBefore(H7[1]) === true) {console.log("its before H7"), H7[0].addClass("future")}
    else if (Today.isSame(H7[1]) === true) {console.log("it is H7"), H7[0].addClass("present")}
    else {console.log("its after H7"), H7[0].addClass("past")};
  
    if (Today.isBefore(H8[1]) === true) {console.log("its before H8"), H8[0].addClass("future")}
    else if (Today.isSame(H8[1]) === true) {console.log("it is H8"), H8[0].addClass("present")}
    else {console.log("its after H8"), H8[0].addClass("past")};
  
    if (Today.isBefore(H9[1]) === true) {console.log("its before H9"), H9[0].addClass("future")}
    else if (Today.isSame(H9[1]) === true) {console.log("it is H9"), H9[0].addClass("present")}
    else {console.log("its after H9"), H9[0].addClass("past")};
  
    if (Today.isBefore(H10[1]) === true) {console.log("its before H10"), H10[0].addClass("future")}
    else if (Today.isSame(H10[1]) === true) {console.log("it is H10"), H10[0].addClass("present")}
    else {console.log("its after H10"), H10[0].addClass("past")};
  
    if (Today.isBefore(H11[1]) === true) {console.log("its before H11"), H11[0].addClass("future")}
    else if (Today.isSame(H11[1]) === true) {console.log("it is H11"), H11[0].addClass("present")}
    else {console.log("its after H11"), H11[0].addClass("past")};
  
    if (Today.isBefore(H12[1]) === true) {console.log("its before H12"), H12[0].addClass("future")}
    else if (Today.isSame(H12[1]) === true) {console.log("it is H12"), H12[0].addClass("present")}
    else {console.log("its after H12"), H12[0].addClass("past")};
  
    if (Today.isBefore(H13[1]) === true) {console.log("its before H13"), H13[0].addClass("future")}
    else if (Today.isSame(H13[1]) === true) {console.log("it is H13"), H13[0].addClass("present")}
    else {console.log("its after H13"), H13[0].addClass("past")};
  
    if (Today.isBefore(H14[1]) === true) {console.log("its before H14"), H14[0].addClass("future")}
    else if (Today.isSame(H14[1]) === true) {console.log("it is H14"), H14[0].addClass("present")}
    else {console.log("its after H14"), H14[0].addClass("past")};
  
    if (Today.isBefore(H15[1]) === true) {console.log("its before H15"), H15[0].addClass("future")}
    else if (Today.isSame(H15[1]) === true) {console.log("it is H15"), H15[0].addClass("present")}
    else {console.log("its after H15"), H15[0].addClass("past")};
  
    if (Today.isBefore(H16[1]) === true) {console.log("its before H16"), H16[0].addClass("future")}
    else if (Today.isSame(H16[1]) === true) {console.log("it is H16"), H16[0].addClass("present")}
    else {console.log("its after H16"), H16[0].addClass("past")};
    
    if (Today.isSame(H17[1]) === true) {console.log("it is H17"), H17[0].addClass("present")}
    else if (Today.isBefore(H17[1]) === true) {console.log("its before H17"), H17[0].addClass("future")}
    else {console.log("its after H17"), H17[0].addClass("past")};
  
    if (Today.isBefore(H18[1]) === true) {console.log("its before H18"), H18[0].addClass("future")}
    else if (Today.isSame(H18[1]) === true) {console.log("it is H18"), H18[0].addClass("present")}
    else {console.log("its after H18"), H18[0].addClass("past")};
  
    if (Today.isBefore(H19[1]) === true) {console.log("its before H19"), H19[0].addClass("future")}
    else if (Today.isSame(H19[1]) === true) {console.log("it is H19"), H19[0].addClass("present")}
    else {console.log("its after H19"), H19[0].addClass("past")};
  
    if (Today.isBefore(H20[1]) === true) {console.log("its before H20"), H20[0].addClass("future")}
    else if (Today.isSame(H20[1]) === true) {console.log("it is H20"), H20[0].addClass("present")}
    else {console.log("its after H20"), H20[0].addClass("past")};
  
    if (Today.isBefore(H21[1]) === true) {console.log("its before H21"), H21[0].addClass("future")}
    else if (Today.isSame(H21[1]) === true) {console.log("it is H21"), H21[0].addClass("present")}
    else {console.log("its after H21"), H21[0].addClass("past")};
  
    if (Today.isBefore(H22[1]) === true) {console.log("its before H22"), H22[0].addClass("future")}
    else if (Today.isSame(H22[1]) === true) {console.log("it is H22"), H22[0].addClass("present")}
    else {console.log("its after H22"), H22[0].addClass("past")};
  
    if (Today.isBefore(H23[1]) === true) {console.log("its before H23"), H23[0].addClass("future")}
    else if (Today.isSame(H23[1]) === true) {console.log("it is H23"), H23[0].addClass("present")}
    else {console.log("its after H23"), H23[0].addClass("past")};
  }


  //Save handling

  for (var i = 0; i <= 23; i++) {
    var times = ["H0", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "H11", "H12", "H13", "H14", "H15", "H16", "H17", "H18", "H19", "H20", "H21", "H22", "H23", ]
  
     //localStorage.setItem(times[i], i)
    eval(times[i])[3].val(localStorage.getItem(times[i]))

  }


  H0[2].click(function () {localStorage.setItem("H0", H0[3].val())})
  H1[2].click(function () {localStorage.setItem("H1", H1[3].val())})
  H2[2].click(function () {localStorage.setItem("H2", H2[3].val())})
  H3[2].click(function () {localStorage.setItem("H3", H3[3].val())})
  H4[2].click(function () {localStorage.setItem("H4", H4[3].val())})
  H5[2].click(function () {localStorage.setItem("H5", H5[3].val())})
  H6[2].click(function () {localStorage.setItem("H6", H6[3].val())})
  H7[2].click(function () {localStorage.setItem("H7", H7[3].val())})
  H8[2].click(function () {localStorage.setItem("H8", H8[3].val())})
  H9[2].click(function () {localStorage.setItem("H9", H9[3].val())})
  H10[2].click(function () {localStorage.setItem("H10", H10[3].val())})
  H11[2].click(function () {localStorage.setItem("H11", H11[3].val())})
  H12[2].click(function () {localStorage.setItem("H12", H12[3].val())})
  H13[2].click(function () {localStorage.setItem("H13", H13[3].val())})
  H14[2].click(function () {localStorage.setItem("H14", H14[3].val())})
  H15[2].click(function () {localStorage.setItem("H15", H15[3].val())})
  H16[2].click(function () {localStorage.setItem("H16", H16[3].val())})
  H17[2].click(function () {localStorage.setItem("H17", H17[3].val())})
  H18[2].click(function () {localStorage.setItem("H18", H18[3].val())})
  H19[2].click(function () {localStorage.setItem("H19", H19[3].val())})
  H20[2].click(function () {localStorage.setItem("H20", H20[3].val())})
  H21[2].click(function () {localStorage.setItem("H21", H21[3].val())})
  H22[2].click(function () {localStorage.setItem("H22", H22[3].val())})
  H23[2].click(function () {localStorage.setItem("H23", H23[3].val())})




  $("#currentDay").text("Today is " + Today.format('dddd MMMM D'))

  

  
});






