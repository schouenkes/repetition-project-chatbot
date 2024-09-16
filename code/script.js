const contentBox = document.getElementById("contentBox");

const showWelcomeScreen = () => {
  createWelcomeScreen();
};

const createWelcomeScreen = () => {
  const welcomeScreen = document.createElement("div");
  welcomeScreen.className = "welcome-screen";
  welcomeScreen.id = "welcomeScreen";
  contentBox.appendChild(welcomeScreen);

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
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += ` <div class="bot-message"><p>${message}</p></div>`;
  scrollToLatestMessage();
};

const showUserMessage = (message) => {
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += ` <div class="user-message"><p>${message}</p></div>`;
  scrollToLatestMessage();
};

const scrollToLatestMessage = () => {
  const chatBox = document.getElementById("chatBox");
  chatBox.scrollTop = chatBox.scrollHeight;
};

const startChat = () => {
  const chatBox = document.createElement("section");
  chatBox.className = "chatbox";
  chatBox.id = "chatBox";
  contentBox.appendChild(chatBox);

  const form = document.createElement("form");
  form.id = "formArea";
  contentBox.appendChild(form);

  welcomeScreen.remove();
  showBotMessage("Welcome to The Movie House! I'm Bob, what's your name?");
  createNameInput();
};

const createNameInput = () => {
  const form = document.getElementById("formArea");

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
    const form = document.getElementById("formArea");
    form.innerHTML = "";
    showUserMessage(`${username}`);
    setTimeout(() => getMovieGenre(username), 1100);
  }
};

const getMovieGenre = (username) => {
  createGenreButtons();
  showBotMessage(`Hello ${username}, what genre are you up for?`);
};

const createGenreButtons = () => {
  const form = document.getElementById("formArea");

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
  const form = document.getElementById("formArea");

  form.innerHTML = "";
  showUserMessage(`I want to see a ${genre} movie`);
  setTimeout(() => getMovieChoice(genre), 1100);
};

const getMovieChoice = (genre) => {
  createMovieOptions(genre);
  showBotMessage(`Nice, what movie do you want to see?`);
};

const createMovieOptions = (genre) => {
  const form = document.getElementById("formArea");

  const comedyMovies = ["We're the Millers", "The Hangover", "Dumb and dumber"];
  const romanticMovies = ["The Notebook", "Five feet apart", "A star is born"];
  const kidsMovies = ["Inside out", "Sing", "Moana"];
  const fantasyMovies = ["Damsel", "Avatar", "Wicked"];

  const customSelect = document.createElement("div");
  customSelect.className = "custom-select";
  form.appendChild(customSelect);

  const selectButton = document.createElement("button");
  selectButton.className = "select-button";
  selectButton.type = "button";
  selectButton.innerHTML = `Choose a movie from the list <span class="arrow">&darr;</span>`;
  customSelect.appendChild(selectButton);

  const selectList = document.createElement("ul");
  selectList.className = "select-list";
  customSelect.appendChild(selectList);

  const createMovieOption = (movie) => {
    const selectOptions = document.createElement("li");
    selectOptions.className = "select-option";
    selectOptions.textContent = movie;
    selectList.appendChild(selectOptions);

    selectOptions.addEventListener("click", () => showMovieChoice(movie, genre));
  };

  switch (genre) {
    case "comedy":
      comedyMovies.forEach(createMovieOption);
      break;
    case "romantic":
      romanticMovies.forEach(createMovieOption);
      break;
    case "kids":
      kidsMovies.forEach(createMovieOption);
      break;
    case "fantasy":
      fantasyMovies.forEach(createMovieOption);
      break;
    default:
      showBotMessage(`You need to choose a movie in the list`);
      break;
  }

  const toggleSelectList = () => {
    selectList.style.display = selectList.style.display === "block" ? "none" : "block";
  };

  selectButton.addEventListener("click", toggleSelectList);
};

const showMovieChoice = (movie, genre) => {
  const form = document.getElementById("formArea");

  form.innerHTML = "";
  showUserMessage(`I want to see ${movie}`);
  setTimeout(() => getTimeChoice(genre, movie), 1100);
};

const getTimeChoice = (genre, movie) => {
  createTimeOptions(genre, movie);
  showBotMessage(`${movie} is a good choice!  
    when do you want to see the movie?`);
};

const createTimeOptions = (genre, movie) => {
  const form = document.getElementById("formArea");

  let times = [];

  switch (genre) {
    case "kids":
      times = ["Tuesday 17:00", "Thursday 18:00", "Friday 19:00", "Saturday 20:00"];
      break;
    case "comedy":
      times = ["Monday 19:00", "Thursday 19:00", "Friday 20:00", "Saturday 21:00"];
      break;
    case "romantic":
      times = ["Monday 19:00", "Wednesday 19:00", "Friday 20:00", "Sunday 19:00"];
      break;
    case "fantasy":
      times = ["Wednesday 19:00", "Friday 20:00", "Saturday 21:00", "Sunday 20:00"];
      break;
    default:
      showBotMessage(`You need to choose a movie in the list`);
      break;
  }

  times.forEach((time) => {
    const timeButton = document.createElement("button");
    timeButton.className = "option-buttons";
    timeButton.type = "button";
    timeButton.textContent = time;
    form.appendChild(timeButton);

    timeButton.addEventListener("click", () => showTimeChoice(time, movie));
  });
};

const showTimeChoice = (time, movie) => {
  showUserMessage(`I want to book ${time}`);
  formArea.innerHTML = "";
  setTimeout(() => confirmBooking(time, movie), 1100);
};

const confirmBooking = (time, movie) => {
  const form = document.getElementById("formArea");

  showBotMessage(
    `I have booked a seat for ${movie} on ${time}. We looking forward to have you and we will have the popcorn ready for you!`
  );
  form.innerHTML = "";
  setTimeout(recreateWelcomeScreen, 5000);
};

const recreateWelcomeScreen = () => {
  const form = document.getElementById("formArea");
  const chatBox = document.getElementById("chatBox");
  chatBox.remove();
  form.remove();

  showWelcomeScreen();
};

showWelcomeScreen();

window.addEventListener("resize", generateSeatButtons);
