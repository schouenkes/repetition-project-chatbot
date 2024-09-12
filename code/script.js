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

  let movieSeatButton;
  const screenWidth = window.innerWidth;

  if (screenWidth <= 380) {
    movieSeatButton = 70;
  } else if (screenWidth <= 480) {
    movieSeatButton = 66;
  } else if (screenWidth <= 600) {
    movieSeatButton = 50;
  } else {
    movieSeatButton = 60;
  }

  for (i = 0; i < movieSeatButton; i++) {
    const seatButton = document.createElement("button");
    seatButton.className = "seat-button";
    seatButton.type = "button";
    seatButton.textContent = "x";
    movieSeatBox.appendChild(seatButton);
  }
};

showWelcomeScreen();

window.addEventListener("resize", generateSeatButtons);
