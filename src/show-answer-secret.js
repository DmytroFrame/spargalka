// import { getKeyFromClipBoardText } from '../src/application/answerPlacer'
// import { getValidationAnswer } from './domain/questionAnswer'
// import { findAnswerByKey } from '../src/domain/questionsAnswers'
// import { fetchData } from '../src/services/api'
// import { changeOutputText } from './ui/output'

function getTextFromClipBoard() {
  return navigator.clipboard.readText();
}
function getValidationAnswer(answer) {
  return (
    answer ||
    "Зверніть увагу, що комунікація здійснюється виключно через корпоративну пошту!"
  );
}

function questionToKey(question) {
  return question
    .trim()
    .toLowerCase()
    .replace(/[^0-9a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]/g, "");
}

async function getKeyFromClipBoardText() {
  const clipBoardText = await getTextFromClipBoard();
  const clipTextToKeyAnswer = questionToKey(clipBoardText);
  return clipTextToKeyAnswer;
}

const findAnswerByKey = (data, key) => {
  const [_, answer] = Object.entries(data)
    .filter((arr) => arr[0].includes(key))
    .flat();

  return answer;
};

const API_URL =
  "https://raw.githubusercontent.com/DmytroFrame/spargalka/data/data.json";

const fetchData = async (url = API_URL) => {
  return fetch(url).then((res) => res.json());
};

const output = document.querySelector(".output");

function changeOutputText(text) {
  output.innerHTML = text;
}

let GLOBAL_DATA = {};
getValidationAnswer;
fetchData().then((data) => {
  GLOBAL_DATA = data;
});

document.addEventListener("keydown", async function () {
  const key = await getKeyFromClipBoardText();
  const validationAnswer = getValidationAnswer(
    findAnswerByKey(GLOBAL_DATA, key)
  );

  changeOutputText(validationAnswer);
});

// document.addEventListener('click', getAnswerFacade)
