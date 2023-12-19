import { getKeyFromClipBoardText } from '../src/application/answerPlacer'
import { getValidationAnswer } from './domain/questionAnswer'
import { findAnswerByKey } from '../src/domain/questionsAnswers'
import { fetchData } from '../src/services/api'
import { changeOutputText } from './ui/output'

let GLOBAL_DATA = {}

fetchData().then((data) => {
  GLOBAL_DATA = data
})

document.addEventListener('keydown', async function () {
  const key = await getKeyFromClipBoardText()
  const validationAnswer = getValidationAnswer(
    findAnswerByKey(GLOBAL_DATA, key),
  )

  changeOutputText(validationAnswer)
})

// document.addEventListener('click', getAnswerFacade)
