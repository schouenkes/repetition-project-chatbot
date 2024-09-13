const welcomeScreen = document.getElementById("welcomeScreen");
const chatBox = document.getElementById("chatBox");
const form = document.getElementById("formArea");

const showWelcomeScreen = () => {
  createWelcomeScreen();
};

const createWelcomeScreen = () => {
  const introBox = document.createElement("div");
  introBox.className = "introbox";
  welcomeScreen.appendChild(introBox);

  const introTextBox = document.createElement("div");
  introTextBox.className = "intro-text-box";
  introTextBox.innerHTML = `
  <h1>Welcome</h1>
  <p>Want to see a movie?</p>
  <p>Click on a seat and let us continue the booking.</p>`;
  introBox.appendChild(introTextBox);

  // const introTitle = document.createElement("h2");
  // introTitle.textContent = "Welcome";
  // introTextBox.appendChild(introTitle);

  // const welcomeText1 = document.createElement("p");
  // welcomeText1.textContent = "Want to see a movie?";
  // introTextBox.appendChild(welcomeText1);

  // const welcomeText2 = document.createElement("p");
  // welcomeText2.textContent = "Click on a seat and let us continue the booking.";
  // introTextBox.appendChild(welcomeText2);

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

const showBotMessage = (message) => {
  chatBox.innerHTML += ` <div class="bot-message"><p>${message}</p></div>`;
};

const showUserMessage = (message) => {
  chatBox.innerHTML += ` <div class="user-message"><p>${message}</p></div>`;
};

const startChat = () => {
  welcomeScreen.remove();
  showBotMessage("Welcome to The Movie House! I'm Bob, what's your name?");
  createNameInput();
};

const createNameInput = () => {
  form.innerHTML = `
  <input type="text" class="text-input" id="userNameInput"/>
  <button class="send-button" id="sendButton" type="button">Send</button>`;

  const nameInput = document.getElementById("userNameInput");
  const submitButton = document.getElementById("sendButton");

  submitButton.addEventListener("click", () => showUsername(nameInput));
  nameInput.addEventListener(
    "keypress",
    (handleEnter = (event) => {
      if (event.key === "Enter") {
        showUsername(nameInput);
        event.preventDefault();
      }
    })
  );
};

const showUsername = (nameinput) => {
  const username = nameinput.value;
  if (username === "") {
    showBotMessage("Please, enter your name in the input field.");
  } else {
    form.innerHTML = "";
    showUserMessage(`${username}`);
    setTimeout(createGenreButtons, 1100);
    setTimeout(() => showBotMessage(`Hello ${username}, what genre are you up for?`), 1100);
  }
};

const createGenreButtons = () => {
  const genres = ["comedy", "romantic", "kids", "fantasy"];

  genres.forEach((genre) => {
    genreButton = document.createElement("button");
    genreButton.className = "option-buttons";
    genreButton.type = "button";
    genreButton.textContent = genre;
    form.appendChild(genreButton);

    genreButton.addEventListener("click", () => showGenreChoice(genre));
  });
};

const showGenreChoice = (genre) => {
  form.innerHTML = "";
  showUserMessage(`I want to see a ${genre} movie`);
};

showWelcomeScreen();

window.addEventListener("resize", generateSeatButtons);
