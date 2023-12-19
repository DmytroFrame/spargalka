const output = document.querySelector('.output')

function getTextFromClipBoard() {
  return navigator.clipboard.readText()
}

function changeOutputText(text) {
  output.innerHTML = text
}

function doValidationForTextOutput(text) {
  return (
    text ||
    'Зверніть увагу, що комунікація здійснюється виключно через корпоративну пошту!'
  )
}

async function getAnswerFacade(question) {
  const clipBoardText = await getTextFromClipBoard()
  changeOutputText(clipBoardText)
}

document.addEventListener('visibilitychange', function () {
  if (!document.hidden) {
    const timeOut = setTimeout(async () => {
      getAnswerFacade()
      return window.clearTimeout(timeOut)
    }, 100)
  }
})

document.addEventListener('click', getAnswerFacade)
