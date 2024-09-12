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
};

const generateSeatButtons = () => {};

showWelcomeScreen();
