document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  });
function changeBackground() {
  // Array of colors
  const colors = [
    "#F4E1D2",
    "#DAB894",
    "#8C6239",
    "#FFE4B5",
    "#A67B5B",
    "#C69C6D",
    "#EED5B7",
  ];

  // Get a random color from the array
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Change the background color
  document.body.style.backgroundColor = randomColor;
}
