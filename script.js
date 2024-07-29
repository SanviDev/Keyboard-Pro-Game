const modalLenguage = document.getElementById("lenguage");

////////////////////////////*Functions////////////////////////////

function addClass(at, cl) {
  at.className += " " + cl;
}

function removeClass(at, cl) {
  at.classList.remove(cl);
}

////////////////////////////*Lenguage////////////////////////////

const openCloseOptions = () => {
  ////////////////////////////?Abrir Modal////////////////////////////
  document.getElementById("lenguageSelector").addEventListener("click", (e) => {
    modalLenguage.classList.toggle("activate");
    lenguage();
  });
};
////////////////////////////?Cambio de Idioma////////////////////////////
const lenguage = () => {
  document.getElementById("en").addEventListener("click", (e) => {
    const l = "en";
    modalLenguage.classList.remove("activate");
    textContent(l);
    return l;
  });
  document.getElementById("es").addEventListener("click", (e) => {
    const l = "es";
    modalLenguage.classList.remove("activate");
    textContent(l);
    return l;
  });
};

////////////////////////////*Texts and Words////////////////////////////

const textContent = (l) => {
  ////////////////////////////?Diccionario en Ingles////////////////////////////
  const textInEnglish = [
    "apple",
    "ball",
    "cat",
    "dog",
    "elephant",
    "flower",
    "garden",
    "house",
    "ice",
    "jacket",
    "kite",
    "lemon",
    "mountain",
    "night",
    "orange",
    "pencil",
    "queen",
    "river",
    "sun",
    "tree",
    "umbrella",
    "vase",
    "window",
    "xylophone",
    "yarn",
    "zebra",
    "book",
    "chair",
    "desk",
    "egg",
    "fish",
    "giraffe",
    "hat",
    "insect",
    "juice",
    "key",
    "lamp",
    "moon",
    "nest",
    "owl",
    "plate",
    "quilt",
    "rain",
    "star",
    "turtle",
    "uniform",
    "violin",
    "water",
    "box",
    "clock",
    "doll",
    "envelope",
    "fan",
    "glove",
    "horse",
    "island",
    "jar",
    "kangaroo",
    "leaf",
    "mirror",
    "net",
    "octopus",
    "plant",
    "rope",
    "shell",
    "train",
    "underwear",
    "whale",
    "x-ray",
    "bag",
    "candle",
    "door",
    "ear",
    "frog",
    "goat",
    "heart",
    "ice cream",
    "jam",
    "knife",
    "lion",
    "mouse",
    "notebook",
    "pig",
    "ring",
    "ship",
    "telephone",
    "unicorn",
    "vulture",
    "wolf",
    "yacht",
    "zoo",
    "airplane",
    "basket",
    "carrot",
    "drum",
    "eggplant",
    "flag",
    "guitar",
    "horse",
    "iron",
    "jigsaw",
    "koala",
    "ladder",
    "milk",
    "nut",
    "onion",
    "parrot",
    "quiver",
    "robot",
    "snake",
    "television",
    "umbrella",
    "volcano",
    "window",
    "yacht",
    "zebra",
    "boat",
    "car",
    "iguana",
    "jellyfish",
    "lizard",
    "monkey",
    "narwhal",
    "penguin",
    "quokka",
    "rabbit",
    "shark",
    "tiger",
    "urchin",
    "xerus",
    "yak",
    "zebra",
  ];
  ////////////////////////////?Diccionario en Español////////////////////////////
  const textInSpanish = [
    "manzana",
    "pelota",
    "gato",
    "perro",
    "elefante",
    "flor",
    "casa",
    "hielo",
    "chaqueta",
    "cometa",
    "limon",
    "noche",
    "naranja",
    "reina",
    "rio",
    "sol",
    "arbol",
    "paraguas",
    "jarron",
    "ventana",
    "xilofono",
    "hilo",
    "cebra",
    "libro",
    "silla",
    "escritorio",
    "huevo",
    "pez",
    "jirafa",
    "sombrero",
    "insecto",
    "jugo",
    "llave",
    "lampara",
    "luna",
    "nido",
    "buho",
    "plato",
    "colcha",
    "lluvia",
    "estrella",
    "tortuga",
    "uniforme",
    "violin",
    "agua",
    "caja",
    "reloj",
    "muneca",
    "sobre",
    "ventilador",
    "guante",
    "caballo",
    "isla",
    "frasco",
    "canguro",
    "hoja",
    "espejo",
    "red",
    "pulpo",
    "planta",
    "cuerda",
    "zapatilla",
    "tren",
    "ropa interior",
    "ballena",
    "radiografia",
    "bolsa",
    "vela",
    "puerta",
    "oreja",
    "rana",
    "cabra",
    "corazon",
    "helado",
    "mermelada",
    "cuchillo",
    "leon",
    "raton",
    "cuaderno",
    "cerdo",
    "anillo",
    "barco",
    "telefono",
    "unicornio",
    "buitre",
    "lobo",
    "yate",
    "zoologico",
    "avion",
    "canasta",
    "zanahoria",
    "tambor",
    "berenjena",
    "bandera",
    "guitarra",
    "caballo",
    "hierro",
    "rompecabezas",
    "koala",
    "escalera",
    "leche",
    "nuez",
    "cebolla",
    "loro",
    "carcaj",
    "robot",
    "serpiente",
    "television",
    "paraguas",
    "volcan",
    "ventana",
    "yate",
    "cebra",
    "coche",
    "iguana",
    "medusa",
    "lagarto",
    "mono",
    "narval",
    "pinguino",
    "quokka",
    "conejo",
    "tiburon",
    "tigre",
    "erizo",
    "xerus",
    "yak",
    "cebra",
  ];

  ////////////////////////////?Switch Lenguage////////////////////////////

  let arrayToUse;
  if (l === "es") {
    arrayToUse = textInSpanish;
    document.querySelector("h2").textContent = "¿Listo?";
    document.querySelector("#in-focus").textContent = "CLICK AQUÍ PARA VER";
  } else {
    1;
    arrayToUse = textInEnglish;
    document.querySelector("h2").textContent = "Ready?";
    document.querySelector("#in-focus").textContent = "CLICK TO FOCUS";
  }

  ////////////////////////////?inner HTML of Game////////////////////////////

  const gameElement = document.getElementById("game");
  gameElement.innerHTML = "";

  for (let i = 0; i < 200; i++) {
    const index = Math.floor(Math.random() * arrayToUse.length);
    const word = arrayToUse[index];
    gameElement.innerHTML +=
      ' <div class="word"><span class="letter">' +
      word.split("").join('</span><span class="letter">') +
      "</span></div>";
  }

  const letter = document.querySelector(".letter");
  const word = document.querySelector(".word");
  addClass(letter, "current");
  addClass(word, "current");
};

////////////////////////////*Inicialize////////////////////////////

openCloseOptions();
textContent();

////////////////////////////*Write////////////////////////////

const letter = document.querySelector(".letter");
const allLetters = [...document.querySelectorAll(".letter")];
const word = document.querySelector(".word");
addClass(letter, "current");
addClass(word, "current");

document.querySelector(".game-container").addEventListener("keyup", (ev) => {
  const key = ev.key;
  const currentLetter = document.querySelector(".letter.current");
  const currentWord = document.querySelector(".word.current");
  const supposed = currentLetter?.innerHTML || " ";
  const isLetter = key.length === 1 && key !== " ";
  const isSpace = key === " ";
  const isDelete = key === "Backspace";
  const isFirstLetter =
    currentLetter === currentWord.querySelector(".letter:first-child");

  console.log({ key, supposed });

  if (isLetter) {
    if (currentLetter) {
      if (key === supposed) {
        addClass(currentLetter, "correct");
      } else {
        addClass(currentLetter, "incorrect");
      }
      removeClass(currentLetter, "current");
      if (currentLetter.nextSibling) {
        addClass(currentLetter.nextSibling, "current");
      }
    }
  }
  if (isSpace) {
    if (supposed !== " ") {
      const noCorrectForSpace = [
        ...document.querySelectorAll(".word.current .letter:not(.correct)"),
      ];
      noCorrectForSpace.forEach((letter) => {
        addClass(letter, "incorrect");
      });
      removeClass(currentLetter, "current");
    }
    removeClass(currentWord, "current");
    addClass(currentWord.nextElementSibling, "current");
    addClass(currentWord.nextElementSibling.firstChild, "current");
  }

  if (isDelete) {
    if (currentLetter && isFirstLetter) {
      removeClass(currentWord, "current");
      addClass(currentWord.previousSibling, "current");
      removeClass(currentLetter, "current");
      addClass(currentWord.previousSibling.lastChild, "current");
      removeClass(currentWord.previousSibling.lastChild, "incorrect");
      removeClass(currentWord.previousSibling.lastChild, "correct");
    } else if (currentLetter) {
      removeClass(currentLetter, "current");
      addClass(currentLetter.previousSibling, "current");
      removeClass(currentLetter.previousSibling, "incorrect");
      removeClass(currentLetter.previousSibling, "correct");
    } else if (!currentLetter) {
        
    }
    }
    
    const nextLetter = document.querySelector('.letter.current');
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');
    cursor.style.top = (currentLetter || currentWord).getBoundingClientRect().top + 2 + 'px';
    cursor.style.left = (currentLetter || currentWord).getBoundingClientRect()[currentLetter ? 'left' : 'right'] + 'px';
});


