export function getValidationAnswer(answer) {
  return (
    answer ||
    'Зверніть увагу, що комунікація здійснюється виключно через корпоративну пошту!'
  )
}

export function questionToKey(question) {
  return question
    .trim()
    .toLowerCase()
    .replace(/[^0-9a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]/g, '')
}
