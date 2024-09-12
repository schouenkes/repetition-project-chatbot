const welcomeScreen = document.getElementById("welcomeScreen");

const showWelcomeScreen = () => {
  createWelcomeScreen();
};

const createWelcomeScreen = () => {
  const introBox = document.createElement("div");
  introBox.className = "introbox";
  welcomeScreen.appendChild(introBox);

  const introTextBox = document.createElement("div");
  introTextBox.className = "intro-text-box";
  introBox.appendChild(introTextBox);

  const introTitle = document.createElement("h2");
  introTitle.textContent = "Welcome";
  introTextBox.appendChild(introTitle);

  const welcomeText1 = document.createElement("p");
  welcomeText1.textContent = "Want to see a movie?";
  introTextBox.appendChild(welcomeText1);

  const welcomeText2 = document.createElement("p");
  welcomeText2.textContent = "Click on a seat and let us continue the booking.";
  introTextBox.appendChild(welcomeText2);

  const buttonBox = document.createElement("div");
  buttonBox.className = "movieseat-box";
  buttonBox.id = "seatBox";
  welcomeScreen.appendChild(buttonBox);

  generateSeatButtons();
};

const generateSeatButtons = () => {
  const movieSeatBox = document.getElementById("seatBox");

  movieSeatBox.innerHTML = "";

  let movieSeatButtons;
  const screenWidth = window.innerWidth;

  if (screenWidth <= 380) {
    movieSeatButtons = 70;
  } else if (screenWidth <= 480) {
    movieSeatButtons = 66;
  } else if (screenWidth <= 600) {
    movieSeatButtons = 50;
  } else {
    movieSeatButtons = 60;
  }

  for (i = 0; i < movieSeatButtons; i++) {
    const seatButton = document.createElement("button");
    seatButton.className = "seat-button";
    seatButton.type = "button";
    seatButton.textContent = "x";
    movieSeatBox.appendChild(seatButton);
  }

  seatButtons = document.querySelectorAll(".seat-button");
  seatButtons.forEach((seatButton) => {
    seatButton.addEventListener("click", startChat);
  });
};

const startChat = () => {
  welcomeScreen.remove();
};

showWelcomeScreen();

window.addEventListener("resize", generateSeatButtons);
