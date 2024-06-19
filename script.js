const answerContainers = document.querySelectorAll(".answer-container");
const number = document.querySelectorAll(".number");


//  TESTING OUT THE FLIP ANIMATION, CODE TO BE ADJUSTED TO ONLY FLIP WHEN THE RESPONSES FROM THE API ARRIVE
// answerContainers.forEach( answerContainer => {
//     answerContainer.addEventListener("mouseover", (event) => {
        
//         const elemenToFlip = event.target;
//         flipElement(elemenToFlip);
//     })
// })



// answerContainers.forEach( answerContainer => {
//     answerContainer.addEventListener("onmouseout", (event) => {
    
//         const elementToRestore = event.target;
//         flipElement(elementToRestore);
//     });
// })



// animations flipper
function flipElement(element) {
    element.classList.toggle('flipped');
}

// Swal.fire({
//     title: "Quiz",
//     text: "Who is the most famous person on earth",
//     showConfirmButton: false,
//     toast: true,
//     position: 'top',
//     timer: 60000,
//     timerProgressBar: {
//       background: '#FF0000 !important', // Red color
//       // You can add other styles here, like:
//       // height: 5,
//       // borderRadius: 10,
//     }
//   })

Math.floor()
let timerInterval;
Swal.fire({
//   title: "Auto close alert!",
  title: "Name a reason why you love this game?",
  html: "Time left <b></b> seconds.",
  position: "top",
  toast: true,
  showConfirmButton: false,
  timer: 60000,
  timerProgressBar: true,
  background: "#DEEEFF",
  didOpen: () => {
    // Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Math.floor( Swal.getTimerLeft() / 1000)}`;
    }, 1000);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
  