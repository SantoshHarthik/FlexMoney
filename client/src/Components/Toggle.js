// import React from 'react'

// const Toggle = () => {
//   var countDownDate = new Date(getFirstDayOfNextMonth()).getTime();


//   var x = setInterval(function () {


//     var now = new Date().getTime();

//     var distance = countDownDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     // var seconds = Math.floor((distance % (1000 * 60)) / 1000);


//     document.getElementById("demo").innerHTML ="Expires in "+ days + "D " + hours + "H ";


//     if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("demo").innerHTML = "EXPIRED";
//     }
//   }, 1000);


//   function getFirstDayOfNextMonth() {
//     const date = new Date();

//     return new Date(date.getFullYear(), date.getMonth() + 1, 1);
//   }



//   return (
//     <div>
//       <br/>
//       <p id="demo"></p>
//     </div>
//   )
// }

// export default Toggle




import React from 'react'

const Toggle = () => {

  var countDownDate = new Date(getFirstDayOfNextMonth()).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML ="Expires in "+  days + "d " + hours + "h ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

  function getFirstDayOfNextMonth() {
    const date = new Date();

    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
  }


  return (
    <div>

<p id="demo"></p>
    </div>
  )
}

export default Toggle
